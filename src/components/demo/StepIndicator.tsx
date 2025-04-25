
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            index + 1 <= currentStep
              ? 'bg-primary w-8'
              : 'bg-gray-200 w-4'
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
