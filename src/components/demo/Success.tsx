
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import confetti from 'canvas-confetti';

export const Success: React.FC = () => {
  React.useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="text-center space-y-6 animate-fade-in">
      <h2 className="text-2xl font-semibold">Thanks! We'll reach out via email shortly.</h2>
      <p className="text-gray-600">
        Our team will review your information and get back to you with next steps.
      </p>
      <div className="space-x-4 pt-6">
        <Link to="/">
          <Button variant="outline">Back to Homepage</Button>
        </Link>
        <Link to="/corporate-wellness">
          <Button>See How It Works</Button>
        </Link>
      </div>
    </div>
  );
};
