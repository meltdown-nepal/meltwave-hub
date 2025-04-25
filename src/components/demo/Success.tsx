
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import confetti from 'canvas-confetti';
import { PartyPopper } from "lucide-react";

export const Success: React.FC = () => {
  React.useEffect(() => {
    // Fire confetti twice for a better effect
    const fireConfetti = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          spread: 100,
          origin: { y: 0.6 }
        });
      }, 250);
    };

    fireConfetti();
  }, []);

  return (
    <div className="text-center space-y-6 animate-fade-in">
      <div className="inline-block p-4 bg-primary/10 rounded-full mb-4 animate-bounce">
        <PartyPopper className="h-8 w-8 text-primary" />
      </div>
      
      <h2 className="text-2xl font-semibold">Thanks! We'll reach out via email shortly.</h2>
      <p className="text-gray-600">
        Our team will review your information and get back to you with next steps.
      </p>
      
      <div className="space-x-4 pt-6">
        <Link to="/">
          <Button variant="outline" className="hover:scale-105 transition-transform">
            Back to Homepage
          </Button>
        </Link>
        <Link to="/corporate-wellness">
          <Button className="hover:scale-105 transition-transform">
            See How It Works
          </Button>
        </Link>
      </div>
    </div>
  );
};
