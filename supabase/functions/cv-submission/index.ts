
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CVSubmissionRequest {
  name: string;
  email: string;
  phone: string;
  position: string;
  cvFile: {
    name: string;
    type: string;
    content: string; // base64 encoded
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, position, cvFile }: CVSubmissionRequest = await req.json();

    console.log("Processing CV submission for:", name);

    // Convert base64 to buffer for attachment
    const cvBuffer = Uint8Array.from(atob(cvFile.content), c => c.charCodeAt(0));

    // Send email to company with CV attachment
    const emailResponse = await resend.emails.send({
      from: "CV Submissions <onboarding@resend.dev>",
      to: ["hr@meltdown.com"], // Replace with your actual email
      subject: `New CV Submission - ${name}${position ? ` (${position})` : ''}`,
      html: `
        <h2>New CV Submission Received</h2>
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h3>Candidate Information:</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            ${position ? `<li><strong>Preferred Position:</strong> ${position}</li>` : ''}
          </ul>
          
          <p>Please find the candidate's CV attached to this email.</p>
          
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was automatically generated from the CV submission form on your website.
          </p>
        </div>
      `,
      attachments: [
        {
          filename: cvFile.name,
          content: cvBuffer,
        },
      ],
    });

    // Send confirmation email to candidate
    const confirmationResponse = await resend.emails.send({
      from: "Meltdown Careers <onboarding@resend.dev>",
      to: [email],
      subject: "CV Submission Received - Thank You!",
      html: `
        <h2>Thank You for Your Application, ${name}!</h2>
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>We have successfully received your CV submission and want to thank you for your interest in joining our team.</p>
          
          <h3>What happens next?</h3>
          <ul>
            <li>Our HR team will review your CV and qualifications</li>
            <li>If your profile matches our current openings, we'll contact you within 2-3 business days</li>
            <li>We'll keep your information on file for future opportunities that match your skills</li>
          </ul>
          
          <p>We appreciate the time you've taken to apply and look forward to potentially working with you.</p>
          
          <p>Best regards,<br>
          The Meltdown Team</p>
          
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            If you have any questions about your application, please don't hesitate to contact us.
          </p>
        </div>
      `,
    });

    console.log("CV submission emails sent successfully:", {
      company: emailResponse,
      confirmation: confirmationResponse
    });

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "CV submitted successfully and emails sent"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in cv-submission function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to submit CV",
        details: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
