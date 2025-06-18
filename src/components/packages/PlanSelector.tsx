
import React from "react";
import { Badge } from "@/components/ui/badge";
import { PlanOption } from "@/pages/PackageDetail";

interface PlanSelectorProps {
  plans: PlanOption[];
  selectedPlan: string;
  onPlanSelect: (planId: string) => void;
}

const PlanSelector: React.FC<PlanSelectorProps> = ({
  plans,
  selectedPlan,
  onPlanSelect,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-6 text-center lg:text-left">Choose Your Plan</h2>
      
      {plans.map((plan) => (
        <div
          key={plan.id}
          onClick={() => onPlanSelect(plan.id)}
          className={`
            relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg
            ${selectedPlan === plan.id
              ? 'border-primary bg-primary/5 shadow-md transform scale-[1.02]'
              : 'border-gray-200 bg-white hover:border-primary/50'
            }
          `}
        >
          {/* Popular Badge */}
          {plan.popular && (
            <Badge className="absolute -top-2 left-4 bg-primary text-black font-semibold px-3 py-1">
              Most Popular
            </Badge>
          )}
          
          {/* Plan Duration */}
          <div className="mb-3">
            <h3 className="text-lg font-bold text-gray-900">{plan.duration}</h3>
          </div>
          
          {/* Pricing */}
          <div className="mb-4">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
              {plan.originalPrice && (
                <span className="text-sm text-gray-500 line-through">{plan.originalPrice}</span>
              )}
            </div>
            {plan.savings && (
              <p className="text-sm text-green-600 font-medium">{plan.savings}</p>
            )}
          </div>
          
          {/* Selection Indicator */}
          <div className={`
            w-4 h-4 rounded-full border-2 absolute top-4 right-4 transition-all duration-200
            ${selectedPlan === plan.id
              ? 'bg-primary border-primary'
              : 'border-gray-300'
            }
          `}>
            {selectedPlan === plan.id && (
              <div className="w-2 h-2 bg-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanSelector;
