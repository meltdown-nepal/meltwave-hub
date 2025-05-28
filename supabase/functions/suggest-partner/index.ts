
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
    const { partnerName, location, services, contactInfo, additionalInfo, submitterName, submitterEmail } = await req.json()

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Meltdown Partners <hello@meltdown.fit>',
        to: ['hello@meltdown.fit', 'business@meltdown.fit'],
        subject: `New Partner Suggestion: ${partnerName}`,
        html: `
          <h2>New Partner Suggestion</h2>
          
          <h3>Suggested Partner Information</h3>
          <p><strong>Partner Name:</strong> ${partnerName}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Services:</strong> ${services}</p>
          <p><strong>Contact Info:</strong> ${contactInfo}</p>
          ${additionalInfo ? `<p><strong>Additional Info:</strong> ${additionalInfo}</p>` : ''}
          
          <h3>Submitted By</h3>
          <p><strong>Name:</strong> ${submitterName}</p>
          <p><strong>Email:</strong> ${submitterEmail}</p>
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
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
