
import React from "react";
import { Button } from "@/components/ui/button";
import { BadgeCheck, CheckCircle2 } from "lucide-react";

// Mock price & duration for now
const PACKAGE_PRICE = "NPR 3,999";
const PACKAGE_DURATION = "per month";

interface PackageDetailsContentProps {
  name: string;
  howItWorks: string[];
  whyChoose: string[];
  paymentLink: string;
}

const featureIcons = [
  <CheckCircle2 className="text-green-500 w-5 h-5" key="check" />,
  <BadgeCheck className="text-primary w-5 h-5" key="badge" />,
];

const PackageDetailsContent: React.FC<PackageDetailsContentProps> = ({
  name,
  howItWorks,
  whyChoose,
  paymentLink,
}) => {
  return (
    <section className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-16 animate-fade-in">
      {/* Top Title and Accent */}
      <div className="px-6 pt-8 pb-2 sm:px-10">
        <h1 className="text-2xl sm:text-3xl font-header font-bold text-center mb-2">{name}</h1>
        {/* Accent Gradient Line */}
        <div className="h-1 rounded bg-gradient-to-r from-primary to-secondary w-24 mx-auto mb-2" />
      </div>

      {/* Pricing & CTA Box */}
      <div className="flex justify-center items-center">
        <div className="bg-gradient-to-r from-primary/80 to-secondary/90 rounded-xl px-8 py-6 shadow-md flex flex-col items-center -mt-6 z-10 mx-2 border border-yellow-200">
          <div className="text-2xl font-bold text-black mb-0">{PACKAGE_PRICE}</div>
          <div className="text-gray-600 text-sm mb-3">{PACKAGE_DURATION}</div>
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-black text-white hover:bg-primary font-semibold shadow transition hover:-translate-y-1 duration-200 mt-2">
              Proceed to Pay
            </Button>
          </a>
        </div>
      </div>

      {/* Main Info Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-8 sm:px-10">
        {/* Features / Included Section */}
        <section>
          <h2 className="text-lg font-semibold mb-4 text-gray-900">What's Included</h2>
          <ul className="space-y-3">
            {whyChoose.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                {featureIcons[idx % featureIcons.length]}
                <span className="text-gray-700">{point}</span>
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
                {/* Step Number */}
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
    </section>
  );
};

export default PackageDetailsContent;

