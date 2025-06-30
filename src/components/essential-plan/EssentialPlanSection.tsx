
import React, { useState } from "react";
import PlanSelector from "@/components/packages/PlanSelector";
import DynamicPackageDetails from "@/components/packages/DynamicPackageDetails";
import { PlanOption } from "@/pages/PackageDetail";

const essentialPlans: PlanOption[] = [
  {
    id: "6-weeks",
    duration: "6 Weeks Plan",
    price: "NPR 14,000",
    originalPrice: "NPR 18,000",
    savings: "Save NPR 4,000"
  },
  {
    id: "8-weeks",
    duration: "8 Weeks Plan",
    price: "NPR 18,000",
    originalPrice: "NPR 24,000",
    savings: "Save NPR 6,000"
  },
  {
    id: "12-weeks",
    duration: "12 Weeks Plan",
    price: "NPR 26,000",
    originalPrice: "NPR 35,000",
    savings: "Save NPR 9,000",
    popular: true
  }
];

const howItWorks = [
  "You enrol in a package of your choice",
  "You fill in your additional key details like food preferences, preferred time to contact, any medical issues etc",
  "Coach calls you within 24 hours at your preferred time",
  "Coach understands your goals, sets expectations about how this will work",
  "Coach evaluates and prepares the best plan for you",
  "Coach assesses your weekly progress and makes course adjustments"
];

const whyChoose: Record<string, string[]> = {
  "6-weeks": [
    "Integrated fitness + nutrition strategy for 6 weeks",
    "Customized workout plan (gym/home) + personalized meal plan",
    "Bi-weekly 1-on-1 coaching sessions via WhatsApp",
    "Video demos for exercises + recipe suggestions",
    "Goal-based programming (fat loss, strength, nutrition habits)",
    "All trackers included (workout, meal, habits)",
    "Standard support (Mon–Fri response within 24 hrs)"
  ],
  "8-weeks": [
    "Integrated fitness + nutrition strategy for 8 weeks",
    "Customized workout plan (gym/home) + personalized meal plan",
    "Weekly 1-on-1 coaching sessions via WhatsApp",
    "Video demos for exercises + recipe suggestions",
    "Goal-based programming (fat loss, strength, nutrition habits)",
    "All trackers included (workout, meal, habits)",
    "Enhanced support (Mon–Sat response within 18 hrs)",
    "Mid-program assessment and plan adjustment"
  ],
  "12-weeks": [
    "Integrated fitness + nutrition strategy for 12 weeks",
    "Customized workout plan (gym/home) + personalized meal plan",
    "Weekly 1-on-1 coaching sessions via WhatsApp",
    "Video demos for exercises + recipe suggestions",
    "Goal-based programming (fat loss, strength, nutrition habits)",
    "All trackers included (workout, meal, habits)",
    "Priority support (Mon–Sat response within 12 hrs)",
    "Comprehensive transformation support and accountability"
  ]
};

const EssentialPlanSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("12-weeks");

  const currentPlan = essentialPlans.find(plan => plan.id === selectedPlan) || essentialPlans[0];
  const currentWhyChoose = whyChoose[selectedPlan] || whyChoose["12-weeks"];
  const paymentLink = "https://docs.google.com/forms/d/e/1FAIpQLSfEsOR_hkYjRd00hZW5XmYuaH3lzRnl0NTmAvgzjyVadqRMGA/viewform?usp=header";

  return (
    <section id="essential-plan" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Plan</h2>
          <p className="text-lg max-w-3xl mx-auto">
            A comprehensive coaching system combining fitness and nutrition support for complete transformation.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Plan Selector */}
          <div className="lg:col-span-1">
            <PlanSelector
              plans={essentialPlans}
              selectedPlan={selectedPlan}
              onPlanSelect={setSelectedPlan}
            />
          </div>

          {/* Right Column - Package Details */}
          <div className="lg:col-span-2">
            <DynamicPackageDetails
              packageName="Essential Plan - Both Coaches"
              selectedPlan={currentPlan}
              howItWorks={howItWorks}
              whyChoose={currentWhyChoose}
              paymentLink={paymentLink}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialPlanSection;
