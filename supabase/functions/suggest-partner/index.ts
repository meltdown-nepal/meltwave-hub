
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface SuggestPartnerData {
  centerName: string;
  serviceType: string;
  serviceTypeOther?: string;
  location: string;
  centerDescription?: string;
  userName: string;
  userEmail: string;
  userPhone?: string;
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
    
    const suggestionData: SuggestPartnerData = await req.json();
    console.log("Received partner suggestion:", JSON.stringify(suggestionData));

    // Construct email content
    const htmlContent = `
      <h2>New Wellness Partner Suggestion</h2>
      
      <h3>Suggested Wellness Center:</h3>
      <ul>
        <li><strong>Name:</strong> ${suggestionData.centerName}</li>
        <li><strong>Service Type:</strong> ${suggestionData.serviceType === 'Other' ? suggestionData.serviceTypeOther : suggestionData.serviceType}</li>
        <li><strong>Location:</strong> ${suggestionData.location}</li>
        ${suggestionData.centerDescription ? `<li><strong>Description:</strong> ${suggestionData.centerDescription}</li>` : ''}
      </ul>
      
      <h3>Suggested By:</h3>
      <ul>
        <li><strong>Name:</strong> ${suggestionData.userName}</li>
        <li><strong>Email:</strong> ${suggestionData.userEmail}</li>
        ${suggestionData.userPhone ? `<li><strong>Phone:</strong> ${suggestionData.userPhone}</li>` : ''}
      </ul>
      
      ${suggestionData.additionalInfo ? `
        <h3>Additional Information:</h3>
        <p>${suggestionData.additionalInfo}</p>
      ` : ''}
      
      <hr style="margin: 20px 0;">
      <p><em>This suggestion was submitted through the Meltdown wellness partner suggestion form.</em></p>
    `;

    // Send email using Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Partner Suggestions <onboarding@resend.dev>',
        to: ['sanskar.meltdown@gmail.com'], // Replace with your email
        subject: `New Partner Suggestion: ${suggestionData.centerName}`,
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

    return new Response(
      JSON.stringify({ message: 'Partner suggestion submitted successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Partner suggestion submission error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})
