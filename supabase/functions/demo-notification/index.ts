
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface DemoRequest {
  company_size: string;
  company_name: string;
  company_type: string;
  role: string;
  full_name: string;
  email: string;
  phone?: string;
}

serve(async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");
      throw new Error("Missing required API key");
    }
    
    const demoRequest: DemoRequest = await req.json();
    console.log("Received demo request:", JSON.stringify(demoRequest));

    // Construct email content
    const htmlContent = `
      <h2>New Demo Request from ${demoRequest.company_name}</h2>
      <h3>Company Information:</h3>
      <ul>
        <li>Size: ${demoRequest.company_size}</li>
        <li>Type: ${demoRequest.company_type}</li>
      </ul>
      <h3>Contact Information:</h3>
      <ul>
        <li>Name: ${demoRequest.full_name}</li>
        <li>Role: ${demoRequest.role}</li>
        <li>Email: ${demoRequest.email}</li>
        ${demoRequest.phone ? `<li>Phone: ${demoRequest.phone}</li>` : ''}
      </ul>
    `;

    // Send email using Resend API directly
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Meltdown Demo <onboarding@resend.dev>",
        to: ["support@meltdownnepal.com"],
        subject: "New Demo Request 🎉",
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

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
