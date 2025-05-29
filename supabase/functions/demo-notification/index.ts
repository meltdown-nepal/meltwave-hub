
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
    const formData = await req.json()

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Meltdown Demo <onboarding@resend.dev>',
        to: ['sanskar.meltdown@gmail.com', 'support@meltdownnepal.com'],
        subject: `New Demo Request from ${formData.firstName} ${formData.lastName}`,
        html: `
          <h2>New Demo Request</h2>
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          
          <h3>Company Information</h3>
          <p><strong>Company:</strong> ${formData.company}</p>
          <p><strong>Industry:</strong> ${formData.industry}</p>
          <p><strong>Company Size:</strong> ${formData.companySize}</p>
          <p><strong>User Type:</strong> ${formData.userType}</p>
          
          ${formData.goals ? `<h3>Goals</h3><p>${formData.goals}</p>` : ''}
          ${formData.timeline ? `<h3>Timeline</h3><p>${formData.timeline}</p>` : ''}
          ${formData.budget ? `<h3>Budget</h3><p>${formData.budget}</p>` : ''}
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
