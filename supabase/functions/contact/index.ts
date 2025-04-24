
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, phone, company, interest, message } = await req.json()

    // Get environment variables
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    
    if (!RESEND_API_KEY) {
      throw new Error('Missing Resend API key')
    }

    // Construct email content
    const emailContent = `
      New Contact Form Submission:
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Company: ${company || 'Not provided'}
      Interest: ${interest}
      
      Message:
      ${message}
    `

    console.log('Sending email to support@meltdownnepal.com with Resend API')

    // Send email using Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'meltdownnepal@gmail.com',
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: emailContent,
      }),
    })

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}))
      console.error('Resend API error:', errorData)
      throw new Error(`Failed to send email: ${res.status} ${res.statusText}`)
    }

    const responseData = await res.json()
    console.log('Email sent successfully, response:', responseData)

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
