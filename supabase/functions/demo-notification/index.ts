
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Map company size enum values to user-friendly labels
const companySizeLabels = {
  "under5": "< 5 people",
  "5to10": "5-10 people",
  "10to25": "10-25 people",
  "25to50": "25-50 people",
  "50to75": "50-75 people",
  "75to100": "75-100 people",
  "100to200": "100-200 people",
  "200to500": "200-500 people",
  "500plus": "500+ people"
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const formData = await req.json()

    console.log('Received demo notification data:', formData)

    // Get the user-friendly company size label
    const companySizeDisplay = companySizeLabels[formData.companySize] || formData.companySize

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Meltdown Demo <onboarding@resend.dev>',
        to: ['sanskar.meltdown@gmail.com', 'support@meltdownnepal.com'],
        subject: `New Demo Request from ${formData.fullName}`,
        html: `
          <h2>New Demo Request</h2>
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${formData.fullName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          
          <h3>Company Information</h3>
          <p><strong>Company:</strong> ${formData.companyName}</p>
          <p><strong>Company Type:</strong> ${formData.companyType}</p>
          <p><strong>Company Size:</strong> ${companySizeDisplay}</p>
          <p><strong>Role:</strong> ${formData.role}</p>
          <p><strong>User Type:</strong> ${formData.userType || 'Not specified'}</p>

          ${formData.additionalDetails ? `
          <h3>Additional Details</h3>
          <p>${formData.additionalDetails}</p>
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
    console.error('Error in demo-notification function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
