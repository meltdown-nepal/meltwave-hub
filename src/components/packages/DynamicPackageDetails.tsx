
import React from "react";
import { Button } from "@/components/ui/button";
import { BadgeCheck, CheckCircle2 } from "lucide-react";
import { PlanOption } from "@/pages/PackageDetail";

interface DynamicPackageDetailsProps {
  packageName: string;
  selectedPlan: PlanOption;
  howItWorks: string[];
  whyChoose: string[];
  paymentLink: string;
}

const featureIcons = [
  <CheckCircle2 className="text-green-500 w-5 h-5" key="check" />,
  <BadgeCheck className="text-primary w-5 h-5" key="badge" />,
];

const DynamicPackageDetails: React.FC<DynamicPackageDetailsProps> = ({
  packageName,
  selectedPlan,
  howItWorks,
  whyChoose,
  paymentLink,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 animate-fade-in">
      {/* Header with Pricing */}
      <div className="bg-gradient-to-r from-primary/80 to-secondary/90 px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-2">{selectedPlan.duration}</h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-3xl font-bold text-black">{selectedPlan.price}</div>
            {selectedPlan.originalPrice && (
              <div className="text-lg text-gray-600 line-through">{selectedPlan.originalPrice}</div>
            )}
          </div>
          {selectedPlan.savings && (
            <div className="text-green-700 font-semibold mb-4">{selectedPlan.savings}</div>
          )}
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 font-semibold shadow-lg transition-all duration-200 hover:-translate-y-1 px-8 py-3"
            >
              Proceed to Pay
            </Button>
          </a>
        </div>
      </div>

      {/* Package Details */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What's Included Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
              What's Included
            </h3>
            <ul className="space-y-4">
              {whyChoose.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1">
                  {featureIcons[idx % featureIcons.length]}
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How it Works Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
              How it Works
            </h3>
            <ol className="space-y-4">
              {howItWorks.map((step, idx) => (
                <li key={idx} className="relative pl-10 transition-all duration-300 hover:translate-x-1">
                  {/* Step Number */}
                  <span className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full 
                    bg-gradient-to-br from-primary to-secondary text-black font-bold shadow-sm border-2 border-yellow-200 text-sm
                  ">
                    {idx + 1}
                  </span>
                  <span className="text-gray-800 leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicPackageDetails;
