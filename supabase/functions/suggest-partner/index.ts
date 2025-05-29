
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { 
      centerName, 
      serviceType, 
      serviceTypeOther, 
      location, 
      centerDescription, 
      userName, 
      userEmail, 
      userPhone, 
      additionalInfo 
    } = await req.json()

    console.log('Received suggest-partner data:', {
      centerName, 
      serviceType, 
      serviceTypeOther, 
      location, 
      centerDescription, 
      userName, 
      userEmail, 
      userPhone, 
      additionalInfo
    })

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Meltdown Partners <onboarding@resend.dev>',
        to: ['sanskar.meltdown@gmail.com', 'support@meltdownnepal.com'],
        subject: `New Partner Suggestion: ${centerName}`,
        html: `
          <h2>New Partner Suggestion</h2>
          
          <h3>Suggested Partner Information</h3>
          <p><strong>Center Name:</strong> ${centerName}</p>
          <p><strong>Service Type:</strong> ${serviceType}${serviceTypeOther ? ` (${serviceTypeOther})` : ''}</p>
          <p><strong>Location:</strong> ${location}</p>
          ${centerDescription ? `<p><strong>Description:</strong> ${centerDescription}</p>` : ''}
          
          <h3>Submitted By</h3>
          <p><strong>Name:</strong> ${userName}</p>
          <p><strong>Email:</strong> ${userEmail}</p>
          ${userPhone ? `<p><strong>Phone:</strong> ${userPhone}</p>` : ''}
          ${additionalInfo ? `<p><strong>Additional Info:</strong> ${additionalInfo}</p>` : ''}
        `,
      }),
    })

    const data = await res.json()
    
    return new Response(
      JSON.stringify(data),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: res.ok ? 200 : 400,
      },
    )
  } catch (error) {
    console.error('Error in suggest-partner function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
