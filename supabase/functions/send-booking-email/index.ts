
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingEmailRequest {
  user_name: string;
  user_email: string;
  trainer_name: string;
  booking_date: string;
  booking_time: string;
  payment_method: string;
  amount: number;
  booking_id: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      user_name,
      user_email,
      trainer_name,
      booking_date,
      booking_time,
      payment_method,
      amount,
      booking_id
    }: BookingEmailRequest = await req.json();

    const paymentInstructions = payment_method === 'esewa' 
      ? `
        <h3>Payment Instructions - eSewa</h3>
        <ol>
          <li>Open your eSewa app or go to esewa.com.np</li>
          <li>Send NPR ${amount} to: <strong>9841234567</strong></li>
          <li>Use reference: <strong>${booking_id}</strong></li>
          <li>Screenshot the transaction and reply to this email with the proof</li>
        </ol>
      `
      : `
        <h3>Payment Instructions - Khalti</h3>
        <ol>
          <li>Open your Khalti app</li>
          <li>Send NPR ${amount} to: <strong>9841234567</strong></li>
          <li>Use reference: <strong>${booking_id}</strong></li>
          <li>Screenshot the transaction and reply to this email with the proof</li>
        </ol>
      `;

    const emailResponse = await resend.emails.send({
      from: "Fitness Trainers <onboarding@resend.dev>",
      to: [user_email],
      subject: `Booking Confirmation - Session with ${trainer_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Booking Confirmation</h1>
          
          <p>Dear ${user_name},</p>
          
          <p>Thank you for booking a training session! Here are your booking details:</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0;">Session Details</h2>
            <p><strong>Trainer:</strong> ${trainer_name}</p>
            <p><strong>Date:</strong> ${booking_date}</p>
            <p><strong>Time:</strong> ${booking_time}</p>
            <p><strong>Amount:</strong> NPR ${amount}</p>
            <p><strong>Booking ID:</strong> ${booking_id}</p>
          </div>
          
          ${paymentInstructions}
          
          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4>Important Notes:</h4>
            <ul>
              <li>Your session will be confirmed once payment is verified</li>
              <li>Please arrive 5 minutes early for your session</li>
              <li>Bring a water bottle and towel</li>
              <li>Wear comfortable workout clothes</li>
            </ul>
          </div>
          
          <p>If you have any questions, please reply to this email or contact your trainer directly.</p>
          
          <p>Best regards,<br>The Fitness Trainers Team</p>
        </div>
      `,
    });

    console.log("Booking email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
