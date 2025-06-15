
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
    console.log("Received form data:", formData)
    
    // Map the form fields correctly based on the wellness onboarding form
    const {
      name,
      email,
      phone,
      serviceType,
      serviceTypeOther,
      operationMode,
      location,
      clientsPerWeek,
      gymCollaboration,
      additionalInfo
    } = formData

    // Determine the actual service type
    const actualServiceType = serviceType === 'other' ? serviceTypeOther : serviceType
    
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Meltdown Providers <onboarding@resend.dev>',
        to: ['sanskar.meltdown@gmail.com', 'support@meltdownnepal.com'],
        subject: `New Wellness Provider Application from ${name}`,
        html: `
          <h2>New Wellness Provider Application</h2>
          
          <h3>Personal Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          
          <h3>Professional Information</h3>
          <p><strong>Service Type:</strong> ${actualServiceType}</p>
          <p><strong>Operation Mode:</strong> ${operationMode}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Clients per Week:</strong> ${clientsPerWeek}</p>
          <p><strong>Interested in Gym Collaboration:</strong> ${gymCollaboration ? 'Yes' : 'No'}</p>
          
          ${additionalInfo ? `<h3>Additional Information</h3><p>${additionalInfo}</p>` : ''}
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
    console.error("Error processing wellness provider application:", error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
