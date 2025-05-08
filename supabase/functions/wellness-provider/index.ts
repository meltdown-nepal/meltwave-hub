
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface WellnessProviderData {
  serviceType: string;
  serviceTypeOther?: string;
  operationMode: string;
  location: string;
  clientsPerWeek: string;
  gymCollaboration: boolean;
  name: string;
  email: string;
  phone?: string;
  additionalInfo?: string;
}

serve(async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    console.log("RESEND_API_KEY exists:", !!RESEND_API_KEY);
    
    if (!RESEND_API_KEY) {
      throw new Error('Missing Resend API key')
    }
    
    const providerData: WellnessProviderData = await req.json();
    console.log("Received wellness provider submission:", JSON.stringify(providerData));

    // Construct email content
    const htmlContent = `
      <h2>New Wellness Provider Application</h2>
      
      <h3>Provider Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${providerData.name}</li>
        <li><strong>Email:</strong> ${providerData.email}</li>
        <li><strong>Phone:</strong> ${providerData.phone || 'Not provided'}</li>
      </ul>
      
      <h3>Service Details:</h3>
      <ul>
        <li><strong>Service Type:</strong> ${providerData.serviceType === 'other' ? providerData.serviceTypeOther : providerData.serviceType}</li>
        <li><strong>Operation Mode:</strong> ${providerData.operationMode}</li>
        <li><strong>Location:</strong> ${providerData.location}</li>
        <li><strong>Clients per Week:</strong> ${providerData.clientsPerWeek}</li>
        <li><strong>Interested in Gym Collaboration:</strong> ${providerData.gymCollaboration ? 'Yes' : 'No'}</li>
      </ul>
      
      ${providerData.additionalInfo ? `
        <h3>Additional Information:</h3>
        <p>${providerData.additionalInfo}</p>
      ` : ''}
    `;

    // Send email using Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Wellness Provider <onboarding@resend.dev>',
        to: ['sanskar.meltdown@gmail.com'], // Replace with your email
        subject: `New Wellness Provider: ${providerData.name}`,
        html: htmlContent,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error("Email sending failed:", JSON.stringify(errorData));
      throw new Error(`Failed to send email: ${emailResponse.status}`);
    }

    const responseData = await emailResponse.json();
    console.log("Email sent response:", JSON.stringify(responseData));

    // Store the wellness provider data in Supabase (optional if you want to store it)
    // We're just sending email notification for now

    return new Response(
      JSON.stringify({ message: 'Wellness provider application submitted successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Wellness provider submission error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
