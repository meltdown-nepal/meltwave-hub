
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
    
    // Map the form fields correctly based on the updated wellness onboarding form
    const {
      serviceType,
      serviceTypeOther,
      companyName,
      companyAddress,
      companyEmail,
      companyPhone,
      senderName,
      senderEmail,
      senderPhone,
      senderPosition,
      additionalNotes
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
        subject: `New Wellness Provider Application from ${companyName}`,
        html: `
          <h2>New Wellness Provider Application</h2>
          
          <h3>Service Information</h3>
          <p><strong>Service Type:</strong> ${actualServiceType}</p>
          
          <h3>Company Information</h3>
          <p><strong>Company Name:</strong> ${companyName}</p>
          <p><strong>Address:</strong> ${companyAddress}</p>
          <p><strong>Email:</strong> ${companyEmail}</p>
          <p><strong>Phone:</strong> ${companyPhone}</p>
          
          <h3>Contact Person Information</h3>
          <p><strong>Name:</strong> ${senderName}</p>
          <p><strong>Email:</strong> ${senderEmail}</p>
          <p><strong>Phone:</strong> ${senderPhone}</p>
          <p><strong>Position/Role:</strong> ${senderPosition}</p>
          
          ${additionalNotes ? `
          <h3>Additional Notes</h3>
          <p>${additionalNotes}</p>
          ` : ''}
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
