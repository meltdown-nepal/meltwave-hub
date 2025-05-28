
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { type, data } = await req.json()

    if (type === 'page_view') {
      // First, upsert the session
      const { data: existingSession } = await supabaseClient
        .from('visitor_sessions')
        .select('*')
        .eq('session_id', data.session_id)
        .single()

      if (existingSession) {
        // Update existing session
        await supabaseClient
          .from('visitor_sessions')
          .update({
            last_activity: new Date().toISOString(),
            page_views_count: (existingSession.page_views_count || 0) + 1,
            exit_page: data.page_path
          })
          .eq('session_id', data.session_id)
      } else {
        // Create new session
        await supabaseClient
          .from('visitor_sessions')
          .insert({
            session_id: data.session_id,
            first_visit: new Date().toISOString(),
            last_activity: new Date().toISOString(),
            page_views_count: 1,
            is_returning_visitor: false,
            country: data.country,
            city: data.city,
            device_type: data.device_type,
            browser: data.browser,
            os: data.os,
            utm_source: data.utm_source,
            utm_medium: data.utm_medium,
            utm_campaign: data.utm_campaign,
            entry_page: data.page_path,
            exit_page: data.page_path
          })
      }

      // Insert page view
      await supabaseClient
        .from('page_views')
        .insert({
          session_id: data.session_id,
          page_path: data.page_path,
          page_title: data.page_title,
          referrer: data.referrer,
          user_agent: data.user_agent,
          ip_address: data.ip_address,
          country: data.country,
          city: data.city,
          device_type: data.device_type,
          browser: data.browser,
          os: data.os,
          screen_resolution: data.screen_resolution,
          viewport_size: data.viewport_size,
          utm_source: data.utm_source,
          utm_medium: data.utm_medium,
          utm_campaign: data.utm_campaign,
          utm_term: data.utm_term,
          utm_content: data.utm_content
        })

    } else if (type === 'event') {
      // Insert visitor event
      await supabaseClient
        .from('visitor_events')
        .insert({
          session_id: data.session_id,
          event_type: data.event_type,
          event_name: data.event_name,
          event_data: data.event_data,
          page_path: data.page_path
        })

    } else if (type === 'page_duration') {
      // Update page view duration
      await supabaseClient
        .from('page_views')
        .update({
          duration_seconds: data.duration_seconds
        })
        .eq('session_id', data.session_id)
        .eq('page_path', data.page_path)
        .order('timestamp', { ascending: false })
        .limit(1)
    }

    return new Response(
      JSON.stringify({ success: true }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('Error tracking visitor:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})
