
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import EssentialPlanSection from '@/components/essential-plan/EssentialPlanSection';

const EssentialPlan = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/meltfit">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to MeltFit
          </Link>
        </Button>
      </div>

      {/* Essential Plan Section */}
      <EssentialPlanSection />
    </div>
  );
};

export default EssentialPlan;
