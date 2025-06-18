
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
        price: "NPR 2,999",
        originalPrice: "NPR 3,999",
        savings: "Save NPR 1,000"
      },
      {
        id: "6-weeks",
        duration: "6 Weeks Plan",
        price: "NPR 5,499",
        originalPrice: "NPR 7,998",
        savings: "Save NPR 2,499",
        popular: true
      },
      {
        id: "12-weeks",
        duration: "12 Weeks Plan",
        price: "NPR 9,999",
        originalPrice: "NPR 15,996",
        savings: "Save NPR 5,997"
      }
    ],
    howItWorks: [
      "Book a consultation with our certified personal trainer.",
      "Get a custom fitness assessment and tailored workout plan.",
      "Train with your coach (virtual or in-person) to achieve goals.",
      "Track your progress and get regular feedback.",
    ],
    whyChoose: [
      "Personalized routines & attention.",
      "Faster results with expert motivation and accountability.",
      "Progress tracking and flexible scheduling.",
      "Perfect for beginners or those needing a push."
    ],
    paymentLinkBase: "https://forms.gle/demo-personal-training",
  },
  "health-nutrition": {
    name: "Health and Nutrition Package",
    plans: [
      {
        id: "3-weeks",
        duration: "3 Weeks Plan",
        price: "NPR 2,499",
        originalPrice: "NPR 3,299",
        savings: "Save NPR 800"
      },
      {
        id: "6-weeks",
        duration: "6 Weeks Plan",
        price: "NPR 4,499",
        originalPrice: "NPR 6,598",
        savings: "Save NPR 2,099",
        popular: true
      },
      {
        id: "12-weeks",
        duration: "12 Weeks Plan",
        price: "NPR 7,999",
        originalPrice: "NPR 13,196",
        savings: "Save NPR 5,197"
      }
    ],
    howItWorks: [
      "You enrol in a package of your choice",
      "You fill in your additional key details like food preferences, preferred time to contact, any medical issues etc",
      "Coach calls you within 24 hours at your preferred time",
      "Coach understands your goals, sets expectations about how this will work",
      "Coach evaluates and prepares the best plan for you",
      "Coach assesses your weekly progress and makes course adjustments",
      "You get results, yay!"
    ],
    whyChoose: [
      "Professional nutritional support for all goals.",
      "Achieve sustainable eating habits.",
      "Boost your energy, immunity, and wellbeing.",
      "Ongoing coach support and tasty recipes!"
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
