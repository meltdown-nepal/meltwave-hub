
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, phone, company, interest, message } = await req.json()

    // Get environment variables
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    console.log("RESEND_API_KEY exists:", !!RESEND_API_KEY);
    
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

    // In test mode, we must use the special Resend test email address
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>', // Using Resend's test email
        to: 'sanskar.meltdown@gmail.com', // Send to a real recipient
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: emailContent,
        reply_to: email // Add reply-to so you can reply directly to the sender
      }),
    })

    const responseData = await res.json();
    
    if (!res.ok) {
      console.error("Email sending failed:", JSON.stringify(responseData));
      throw new Error(`Failed to send email: ${res.status}`)
    }

    console.log("Email sent response:", JSON.stringify(responseData));

    return new Response(
      JSON.stringify({ message: 'Email sent successfully', response: responseData }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
