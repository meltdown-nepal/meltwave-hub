
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "npm:resend@2.0.0"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const demoRequest: DemoRequest = await req.json()
    
    console.log("Received demo request:", JSON.stringify(demoRequest));

    const emailResponse = await resend.emails.send({
      from: "Meltdown Demo <onboarding@resend.dev>",
      to: ["support@meltdownnepal.com"],
      subject: "New Demo Request 🎉",
      html: `
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
      `,
    });

    console.log("Email sent response:", JSON.stringify(emailResponse));

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: error.message }), 
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
}

serve(handler)
