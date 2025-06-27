import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { EssentialPlanOption } from "./EssentialPlanSelector";

interface EssentialPlanDetailsProps {
  selectedPlan: EssentialPlanOption;
  planSpecifics: string[];
  howItWorks: string[];
  whatsIncluded: string[];
  paymentLink: string;
}

const EssentialPlanDetails: React.FC<EssentialPlanDetailsProps> = ({
  selectedPlan,
  planSpecifics,
  howItWorks,
  whatsIncluded,
  paymentLink,
}) => {
  return (
    <div className="space-y-8">
      {/* Plan Summary Card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-8 pb-2 sm:px-10">
          <h1 className="text-2xl sm:text-3xl font-header font-bold text-center mb-2">
            {selectedPlan.title}
          </h1>
          <div className="h-1 rounded bg-gradient-to-r from-primary to-secondary w-24 mx-auto mb-2" />
        </div>

        {/* Pricing & CTA Box */}
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-r from-primary/80 to-secondary/90 rounded-xl px-8 py-6 shadow-md flex flex-col items-center -mt-6 z-10 mx-2 border border-yellow-200">
            <div className="text-2xl font-bold text-black mb-0">{selectedPlan.price}</div>
            <div className="text-gray-600 text-sm line-through mb-1">{selectedPlan.originalPrice}</div>
            <div className="text-green-600 text-sm font-medium mb-3">{selectedPlan.savings}</div>
            <a href={paymentLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-black text-white hover:bg-primary font-semibold shadow transition hover:-translate-y-1 duration-200 mt-2">
                Proceed to Pay
              </Button>
            </a>
          </div>
        </div>

        {/* Main Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-8 sm:px-10">
          {/* What's Included Section - Remove heading and display content directly */}
          <section>
            <ul className="space-y-3 mb-6">
              {whatsIncluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            {/* Plan Specifics */}
            <h3 className="text-md font-semibold mt-6 mb-3 text-gray-900">Plan Specifics:</h3>
            <ul className="space-y-2">
              {planSpecifics.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* How it Works Section */}
          <section>
            <h2 className="text-lg font-semibold mb-4 text-gray-900">How it Works</h2>
            <ol className="space-y-4">
              {howItWorks.map((step, idx) => (
                <li key={idx} className="relative pl-9">
                  <span className="absolute left-0 top-0 flex items-center justify-center w-7 h-7 rounded-full 
                    bg-gradient-to-br from-primary to-secondary text-black font-bold shadow-sm border-2 border-yellow-200
                  ">
                    {idx + 1}
                  </span>
                  <span className="text-gray-800 font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EssentialPlanDetails;
