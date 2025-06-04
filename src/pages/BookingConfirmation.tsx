
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, CreditCard, Mail } from 'lucide-react';

const BookingConfirmation = () => {
  const location = useLocation();
  const bookingId = location.state?.bookingId;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-600">Booking Confirmed!</CardTitle>
            <p className="text-gray-600">Your training session has been successfully booked.</p>
          </CardHeader>

          <CardContent className="space-y-6">
            {bookingId && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Booking ID</p>
                <p className="font-mono text-sm">{bookingId}</p>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Check Your Email</h4>
                  <p className="text-sm text-gray-600">
                    We've sent you a confirmation email with payment instructions and session details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Payment Required</h4>
                  <p className="text-sm text-gray-600">
                    Please complete your payment using the instructions in your email to confirm your session.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Session Reminder</h4>
                  <p className="text-sm text-gray-600">
                    You'll receive a reminder 24 hours before your scheduled session.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold mb-3">What's Next?</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                <li>Complete payment using eSewa or Khalti as selected</li>
                <li>Upload payment proof via email or contact your trainer</li>
                <li>Receive session confirmation once payment is verified</li>
                <li>Attend your training session at the scheduled time</li>
              </ol>
            </div>

            <div className="flex gap-3">
              <Link to="/trainers" className="flex-1">
                <Button variant="outline" className="w-full">
                  Book Another Session
                </Button>
              </Link>
              <Link to="/" className="flex-1">
                <Button className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingConfirmation;
