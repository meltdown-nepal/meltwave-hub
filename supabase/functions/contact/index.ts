
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { Resend } from "npm:resend@2.0.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, phone, company, interest, message } = await req.json()

    // Get environment variables
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    
    if (!RESEND_API_KEY) {
      console.error('Missing Resend API key')
      throw new Error('Missing Resend API key')
    }

    const resend = new Resend(RESEND_API_KEY)

    // Validate required fields
    if (!firstName || !lastName || !email || !interest || !message) {
      console.error('Missing required fields in contact form submission')
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        },
      )
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

    console.log('Attempting to send email with Resend...')
    
    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Meltdown Contact <no-reply@meltdownnepal.com>', // after domain verification
      to: 'sanskar.meltdown@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: emailContent,
    })

    console.log('Resend API response:', JSON.stringify(emailResponse))
    
    // Check if the email was sent successfully
    if (emailResponse.error) {
      console.error('Resend API error:', emailResponse.error)
      throw new Error(`Failed to send email: ${emailResponse.error.message}`)
    }

    return new Response(
      JSON.stringify({ message: 'Email sent successfully', data: emailResponse.data }),
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
