
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
    const { 
      companySize, 
      companyName, 
      companyType, 
      role, 
      fullName, 
      email, 
      phoneContact, 
      phone 
    } = await req.json()

    // Get environment variables
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    
    if (!RESEND_API_KEY) {
      console.error('Missing Resend API key')
      throw new Error('Missing Resend API key')
    }

    const resend = new Resend(RESEND_API_KEY)

    // Validate required fields
    if (!companySize || !companyName || !companyType || !role || !fullName || !email) {
      console.error('Missing required fields in demo request')
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        },
      )
    }

    // Determine company size text
    const companySizeText = {
      solo: 'Just me',
      small: '2–10 people',
      medium: '11–50 people',
      large: '51–200 people',
      enterprise: '201+ people'
    }[companySize] || companySize;

    // Construct email content
    const emailContent = `
      New Demo Request:
      
      Name: ${fullName}
      Email: ${email}
      ${phoneContact ? `Phone: ${phone || 'Not provided'}` : ''}
      
      Company Details:
      Company Name: ${companyName}
      Company Type: ${companyType}
      Company Size: ${companySizeText}
      Role: ${role}
    `

    console.log('Attempting to send demo request email with Resend...')
    
    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Demo Request <onboarding@resend.dev>',
      to: 'support@meltdownnepal.com',
      subject: `New Demo Request from ${fullName} at ${companyName}`,
      text: emailContent,
    })

    console.log('Resend API response:', JSON.stringify(emailResponse))
    
    // Check if the email was sent successfully
    if (emailResponse.error) {
      console.error('Resend API error:', emailResponse.error)
      throw new Error(`Failed to send email: ${emailResponse.error.message}`)
    }

    return new Response(
      JSON.stringify({ message: 'Demo request received successfully', data: emailResponse.data }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Demo scheduling error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
