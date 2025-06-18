
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PlanSelector from "@/components/packages/PlanSelector";
import DynamicPackageDetails from "@/components/packages/DynamicPackageDetails";

// Plan data structure
export interface PlanOption {
  id: string;
  duration: string;
  price: string;
  originalPrice?: string;
  savings?: string;
  popular?: boolean;
}

// Package plans data
const packagePlansMap: Record<string, {
  name: string;
  plans: PlanOption[];
  howItWorks: string[];
  whyChoose: string[];
  paymentLinkBase: string;
}> = {
  "personal-training": {
    name: "Personal Training Package",
    plans: [
      {
        id: "3-weeks",
        duration: "3 Weeks Plan",
        price: "NPR 3,750",
        originalPrice: "NPR 5,000",
        savings: "Save NPR 1,250"
      },
      {
        id: "6-weeks",
        duration: "6 Weeks Plan",
        price: "NPR 7,500",
        originalPrice: "NPR 10,000",
        savings: "Save NPR 2,500",
        popular: true
      },
      {
        id: "12-weeks",
        duration: "12 Weeks Plan",
        price: "NPR 15,000",
        originalPrice: "NPR 20,000",
        savings: "Save NPR 5,000"
      }
    ],
    howItWorks: [
      "You enrol in a package of your choice",
      "You fill in your additional key details like food preferences, preferred time to contact, any medical issues etc",
      "Coach calls you within 24 hours at your preferred time",
      "Coach understands your goals, sets expectations about how this will work",
      "Coach evaluates and prepares the best plan for you",
      "Coach assesses your weekly progress and makes course adjustments"
    ],
    whyChoose: [
      "Plans designed only for you: Personalised fitness & nutrition consultation tailor-made for you—including diet plans, training programs with video links, progress tracker sheet and weekly 1-on-1 guidance.",
      "Accountability and Progress Tracking: Your coach will set up in-depth weekly calls according to your schedule to discuss your progress. Changes in your plans will be made as needed.",
      "Video Consultation: Three video consultations with your Coach during the plan duration, beside the regular weekly call just in case.",
      "Continuous Support: You can communicate with the coaches via message regularly. You can also contact the Meltdown operations team in case any changes are needed from the coach."
    ],
    paymentLinkBase: "https://forms.gle/demo-personal-training",
  },
  "health-nutrition": {
    name: "Health and Nutrition Package",
    plans: [
      {
        id: "3-weeks",
        duration: "3 Weeks Plan",
        price: "NPR 3,750",
        originalPrice: "NPR 5,000",
        savings: "Save NPR 1,250"
      },
      {
        id: "6-weeks",
        duration: "6 Weeks Plan",
        price: "NPR 7,500",
        originalPrice: "NPR 10,000",
        savings: "Save NPR 2,500",
        popular: true
      },
      {
        id: "12-weeks",
        duration: "12 Weeks Plan",
        price: "NPR 15,000",
        originalPrice: "NPR 20,000",
        savings: "Save NPR 5,000"
      }
    ],
    howItWorks: [
      "You enrol in a package of your choice",
      "You fill in your additional key details like food preferences, preferred time to contact, any medical issues etc",
      "Coach calls you within 24 hours at your preferred time",
      "Coach understands your goals, sets expectations about how this will work",
      "Coach evaluates and prepares the best plan for you",
      "Coach assesses your weekly progress and makes course adjustments"
    ],
    whyChoose: [
      "Plans designed only for you: Personalised fitness & nutrition consultation tailor-made for you—including diet plans, training programs with video links, progress tracker sheet and weekly 1-on-1 guidance.",
      "Accountability and Progress Tracking: Your coach will set up in-depth weekly calls according to your schedule to discuss your progress. Changes in your plans will be made as needed.",
      "Video Consultation: Three video consultations with your Coach during the plan duration, beside the regular weekly call just in case.",
      "Continuous Support: You can communicate with the coaches via message regularly. You can also contact the Meltdown operations team in case any changes are needed from the coach."
    ],
    paymentLinkBase: "https://forms.gle/demo-health-nutrition",
  }
};

const PackageDetail = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const pkg = packagePlansMap[packageId || ""];
  const [selectedPlan, setSelectedPlan] = useState<string>(pkg?.plans?.[1]?.id || pkg?.plans?.[0]?.id || "");

  if (!pkg) {
    return (
      <div className="max-w-3xl mx-auto py-24 px-2 text-center">
        <p className="text-lg text-gray-700 mb-6">Sorry, we couldn't find that package.</p>
        <Link to="/packages" className="inline-flex items-center text-primary font-medium hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Packages
        </Link>
      </div>
    );
  }

  const currentPlan = pkg.plans.find(plan => plan.id === selectedPlan) || pkg.plans[0];

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: `linear-gradient(
          180deg,
          #fff 0%,
          #fff 51%,
          #FEF9C3 60%,
          #FEF9C3 72%,
          #FEF9C3 100%
        )`
      }}
    >
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="mb-7">
          <Link to="/packages" className="inline-flex items-center text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Packages
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{pkg.name}</h1>
          <div className="h-1 rounded bg-gradient-to-r from-primary to-secondary w-32 mx-auto" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Plan Selector */}
          <div className="lg:col-span-1">
            <PlanSelector
              plans={pkg.plans}
              selectedPlan={selectedPlan}
              onPlanSelect={setSelectedPlan}
            />
          </div>

          {/* Right Column - Dynamic Package Details */}
          <div className="lg:col-span-2">
            <DynamicPackageDetails
              packageName={pkg.name}
              selectedPlan={currentPlan}
              howItWorks={pkg.howItWorks}
              whyChoose={pkg.whyChoose}
              paymentLink={`${pkg.paymentLinkBase}-${selectedPlan}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
