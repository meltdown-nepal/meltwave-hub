
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
      firstName, 
      lastName, 
      email, 
      phone, 
      company, 
      services, 
      experience, 
      certifications, 
      availability, 
      message 
    } = await req.json()

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Meltdown Providers <hello@meltdown.fit>',
        to: ['sanskar.meltdown@gmail.com', 'support@meltdownnepal.com'],
        subject: `New Wellness Provider Application from ${firstName} ${lastName}`,
        html: `
          <h2>New Wellness Provider Application</h2>
          
          <h3>Personal Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          
          <h3>Professional Information</h3>
          <p><strong>Services:</strong> ${services}</p>
          <p><strong>Experience:</strong> ${experience}</p>
          <p><strong>Certifications:</strong> ${certifications || 'Not provided'}</p>
          <p><strong>Availability:</strong> ${availability}</p>
          
          ${message ? `<h3>Additional Message</h3><p>${message}</p>` : ''}
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
