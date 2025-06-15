
import React from "react";
import { Button } from "@/components/ui/button";

interface PackageDetailsContentProps {
  name: string;
  howItWorks: string[];
  whyChoose: string[];
  paymentLink: string;
}

const PackageDetailsContent: React.FC<PackageDetailsContentProps> = ({
  name,
  howItWorks,
  whyChoose,
  paymentLink,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 py-10 px-2 md:px-8">
      {/* Why choose - Left */}
      <div className="flex-1 bg-white bg-opacity-70 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-semibold mb-4">Why You Should Take the {name}</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          {whyChoose.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
      {/* How it works - Right */}
      <div className="flex-1 bg-white bg-opacity-70 rounded-lg p-6 shadow flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-4">How it Works</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-800">
            {howItWorks.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="mt-8 flex justify-end">
          <a href={paymentLink} target="_blank" rel="noopener noreferrer">
            <Button variant={"default"} size={"lg"} className="mt-2">
              Proceed to Pay
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsContent;
