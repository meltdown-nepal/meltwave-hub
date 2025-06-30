
import React, { useState } from "react";
import EssentialPlanSelector, { EssentialPlanOption } from "./EssentialPlanSelector";
import EssentialPlanDetails from "./EssentialPlanDetails";

const essentialPlans: EssentialPlanOption[] = [
  {
    id: "both-coaches-6",
    title: "Both Coaches",
    duration: "6 Weeks Plan",
    price: "NPR 14,000",
    originalPrice: "NPR 18,000",
    savings: "Save NPR 4,000"
  },
  {
    id: "both-coaches-8",
    title: "Both Coaches",
    duration: "8 Weeks Plan",
    price: "NPR 18,000",
    originalPrice: "NPR 24,000",
    savings: "Save NPR 6,000"
  },
  {
    id: "both-coaches-12",
    title: "Both Coaches",
    duration: "12 Weeks Plan",
    price: "NPR 26,000",
    originalPrice: "NPR 35,000",
    savings: "Save NPR 9,000",
    popular: true
  }
];

const howItWorks = [
  "Choose your plan",
  "Fill out your onboarding form",
  "Coach contacts you within 24 hours",
  "Personalized plan is designed for you",
  "Weekly sessions + support via WhatsApp",
  "Progress tracked and plan adjusted accordingly"
];

const whatsIncluded = [
  "Personalized weekly plan tailored to your goals",
  "Weekly 1:1 coaching sessions via call/video",
  "WhatsApp support (Mon–Fri, 8hr response time)",
  "Progress reviews and weekly check-ins",
  "Tracker access: meal, workout, and habits tracking",
  "Weekly weigh-ins"
];

const planSpecificsMap: Record<string, string[]> = {
  "both-coaches-6": [
    "Integrated fitness + nutrition strategy for 6 weeks",
    "All trackers included (meal, workout, habits)",
    "Coaches coordinate to align plans",
    "Bi-weekly progress assessments"
  ],
  "both-coaches-8": [
    "Integrated fitness + nutrition strategy for 8 weeks",
    "All trackers included (meal, workout, habits)",
    "Coaches coordinate to align plans",
    "Weekly progress assessments and plan adjustments"
  ],
  "both-coaches-12": [
    "Integrated fitness + nutrition strategy for 12 weeks",
    "All trackers included (meal, workout, habits)",
    "Coaches coordinate to align plans",
    "Weekly progress assessments and comprehensive transformation support"
  ]
};

const EssentialPlanSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("both-coaches-12");

  const currentPlan = essentialPlans.find(plan => plan.id === selectedPlan) || essentialPlans[0];
  const currentPlanSpecifics = planSpecificsMap[selectedPlan] || planSpecificsMap["both-coaches-12"];
  const paymentLink = "https://docs.google.com/forms/d/e/1FAIpQLSfEsOR_hkYjRd00hZW5XmYuaH3lzRnl0NTmAvgzjyVadqRMGA/viewform?usp=header";

  return (
    <section id="essential-plan" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Plan</h2>
          <p className="text-lg max-w-3xl mx-auto">
            A flexible, personalized coaching system that adapts to your lifestyle with expert support for long-term changes.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Plan Selector */}
          <div className="lg:col-span-1">
            <EssentialPlanSelector
              plans={essentialPlans}
              selectedPlan={selectedPlan}
              onPlanSelect={setSelectedPlan}
            />
          </div>

          {/* Right Column - Plan Details */}
          <div className="lg:col-span-2">
            <EssentialPlanDetails
              selectedPlan={currentPlan}
              planSpecifics={currentPlanSpecifics}
              howItWorks={howItWorks}
              whatsIncluded={whatsIncluded}
              paymentLink={paymentLink}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialPlanSection;
