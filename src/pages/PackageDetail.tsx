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
  whyChoose: Record<string, string[]>;
  paymentLinkBase: string;
}> = {
  "personal-training": {
    name: "Online Personal Training Package",
    plans: [
      {
        id: "6-weeks",
        duration: "6 Weeks Plan",
        price: "NPR 7,500",
        originalPrice: "NPR 10,000",
        savings: "Save NPR 2,500"
      },
      {
        id: "8-weeks",
        duration: "8 Weeks Plan",
        price: "NPR 10,000",
        originalPrice: "NPR 13,500",
        savings: "Save NPR 3,500"
      },
      {
        id: "12-weeks",
        duration: "12 Weeks Plan",
        price: "NPR 15,000",
        originalPrice: "NPR 20,000",
        savings: "Save NPR 5,000",
        popular: true
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
    whyChoose: {
      "6-weeks": [
        "Customized 6-week training plan (gym/home)",
        "Bi-weekly check-ins via WhatsApp",
        "Video demos for all exercises",
        "Goal-based programming (fat loss, strength, mobility, etc.)",
        "Habit tracker for consistency",
        "Standard support (Mon–Fri response within 24 hrs)"
      ],
      "8-weeks": [
        "Customized 8-week training plan (gym/home)",
        "Weekly check-ins via WhatsApp",
        "Video demos for all exercises",
        "Goal-based programming (fat loss, strength, mobility, etc.)",
        "Habit tracker for consistency",
        "Enhanced support (Mon–Sat response within 18 hrs)",
        "Mid-program assessment and plan adjustment"
      ],
      "12-weeks": [
        "Customized 12-week training plan (gym/home)",
        "Weekly check-ins via WhatsApp",
        "Video demos for all exercises",
        "Goal-based programming (fat loss, strength, mobility, etc.)",
        "Habit tracker for consistency",
        "Priority support (Mon–Sat response within 12 hrs)",
        "Accountability and tracking"
      ]
    },
    paymentLinkBase: "https://docs.google.com/forms/d/e/1FAIpQLSfEsOR_hkYjRd00hZW5XmYuaH3lzRnl0NTmAvgzjyVadqRMGA/viewform?usp=header",
  },
  "health-nutrition": {
    name: "Health and Nutrition Package",
    plans: [
      {
        id: "6-weeks",
        duration: "6 Weeks Plan",
        price: "NPR 7,500",
        originalPrice: "NPR 10,000",
        savings: "Save NPR 2,500"
      },
      {
        id: "8-weeks",
        duration: "8 Weeks Plan",
        price: "NPR 10,000",
        originalPrice: "NPR 13,500",
        savings: "Save NPR 3,500"
      },
      {
        id: "12-weeks",
        duration: "12 Weeks Plan",
        price: "NPR 15,000",
        originalPrice: "NPR 20,000",
        savings: "Save NPR 5,000",
        popular: true
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
    whyChoose: {
      "6-weeks": [
        "Tailored Fitness & Nutrition Plan: Custom workouts, diet plans, progress tracker & video tutorials—all built for you.",
        "Bi-weekly 1-on-1 Coaching: Personalized check-ins to track progress and adjust your plan.",
        "Video Consultations: Up to 2 video calls with your coach during the program.",
        "Ongoing Support: Message your coach anytime. Meltdown Ops team is also available for urgent needs or changes."
      ],
      "8-weeks": [
        "Tailored Fitness & Nutrition Plan: Custom workouts, diet plans, progress tracker & video tutorials—all built for you.",
        "Weekly 1-on-1 Coaching: Personalized check-ins to track progress and adjust your plan.",
        "Video Consultations: Up to 2 video calls with your coach during the program, plus weekly reviews.",
        "Ongoing Support: Message your coach anytime. Meltdown Ops team is also available for urgent needs or changes."
      ],
      "12-weeks": [
        "Tailore Fitness & Nutrition Plan: Custom workouts, diet plans, progress tracker & video tutorials—all built for you.",
        "Weekly 1-on-1 Coaching: Personalized check-ins to track progress and adjust your plan.",
        "Video Consultations: Up to 3 video calls with your coach during the program, plus weekly reviews.",
        "Ongoing Support: Message your coach anytime. Meltdown Ops team is also available for urgent needs or changes."
      ]
    },
    paymentLinkBase: "https://forms.gle/demo-health-nutrition",
  }
};

const PackageDetail = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const pkg = packagePlansMap[packageId || ""];
  const [selectedPlan, setSelectedPlan] = useState<string>(pkg?.plans?.find(p => p.popular)?.id || pkg?.plans?.[0]?.id || "");

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
  const currentWhyChoose = pkg.whyChoose[selectedPlan] || pkg.whyChoose[pkg.plans[0].id];

  // For personal training package, use the Google Form directly without plan ID
  const paymentLink = packageId === "personal-training" 
    ? pkg.paymentLinkBase 
    : `${pkg.paymentLinkBase}-${selectedPlan}`;

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
          <Link to="/meltfit" className="inline-flex items-center text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to MeltFit
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
              whyChoose={currentWhyChoose}
              paymentLink={paymentLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
