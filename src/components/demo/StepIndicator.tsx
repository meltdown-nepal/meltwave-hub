
import React from "react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center mt-4 gap-2">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all duration-300 ${
            i + 1 === currentStep
              ? "w-8 bg-primary"
              : i + 1 < currentStep
              ? "w-4 bg-primary/70"
              : "w-4 bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
