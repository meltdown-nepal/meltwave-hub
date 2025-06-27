
import React, { useState } from "react";
import EssentialPlanSelector, { EssentialPlanOption } from "./EssentialPlanSelector";
import EssentialPlanDetails from "./EssentialPlanDetails";

const essentialPlans: EssentialPlanOption[] = [
  {
    id: "diet-coach",
    title: "Diet Coach Only",
    duration: "6 Weeks Plan",
    price: "NPR 7,500",
    originalPrice: "NPR 10,000",
    savings: "Save NPR 2,500"
  },
  {
    id: "fitness-coach",
    title: "Fitness Coach Only",
    duration: "6 Weeks Plan",
    price: "NPR 7,500",
    originalPrice: "NPR 10,000",
    savings: "Save NPR 2,500"
  },
  {
    id: "both-coaches",
    title: "Both Coaches",
    duration: "6 Weeks Plan",
    price: "NPR 14,000",
    originalPrice: "NPR 18,000",
    savings: "Save NPR 4,000",
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
  "WhatsApp support (Mon–Fri, 2hr response time)",
  "Progress reviews and weekly check-ins",
  "Tracker access: meal, workout, and/or habits based on selected plan",
  "Weekly weigh-ins"
];

const planSpecificsMap: Record<string, string[]> = {
  "diet-coach": [
    "Custom 7-day diet plan updated weekly",
    "Food preferences, goals, local/seasonal ingredients",
    "Work-life meal timing & flexibility",
    "Meal tracking + guidance"
  ],
  "fitness-coach": [
    "Personalized workout plan for gym/home",
    "Strength, endurance, flexibility goals",
    "Habit + workout tracking"
  ],
  "both-coaches": [
    "Integrated fitness + nutrition strategy",
    "All trackers included",
    "Coaches coordinate to align plans",
    "Best for holistic transformation"
  ]
};

const EssentialPlanSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("both-coaches");

  const currentPlan = essentialPlans.find(plan => plan.id === selectedPlan) || essentialPlans[0];
  const currentPlanSpecifics = planSpecificsMap[selectedPlan] || planSpecificsMap["both-coaches"];
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
