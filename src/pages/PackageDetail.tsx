
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PackageDetailsContent from "@/components/packages/PackageDetailsContent";

// Demo data for now (add/adjust content as needed)
const packageDetailMap: Record<string, {
  name: string;
  howItWorks: string[];
  whyChoose: string[];
  paymentLink: string;
}> = {
  "personal-training": {
    name: "Personal Training Package",
    howItWorks: [
      "Book a consultation with our certified personal trainer.",
      "Get a custom fitness assessment and tailored workout plan.",
      "Train with your coach (virtual or in-person) to achieve goals.",
      "Track your progress and get regular feedback.",
    ],
    whyChoose: [
      "Personalized routines & attention.",
      "Faster results with expert motivation and accountability.",
      "Progress tracking and flexible scheduling.",
      "Perfect for beginners or those needing a push."
    ],
    paymentLink: "https://forms.gle/demo-personal-training", // Replace with real link
  },
  "health-nutrition": {
    name: "Health and Nutrition Package",
    howItWorks: [
      "You enrol in a package of your choice",
      "You fill in your additional key details like food preferences, preferred time to contact, any medical issues etc",
      "Coach calls you within 24 hours at your preferred time",
      "Coach understands your goals, sets expectations about how this will work",
      "Coach evaluates and prepares the best plan for you",
      "Coach assesses your weekly progress and makes course adjustments",
      "You get results, yay!"
    ],
    whyChoose: [
      "Professional nutritional support for all goals.",
      "Achieve sustainable eating habits.",
      "Boost your energy, immunity, and wellbeing.",
      "Ongoing coach support and tasty recipes!"
    ],
    paymentLink: "https://forms.gle/demo-health-nutrition", // Replace with real link
  }
};

const PackageDetail = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const pkg = packageDetailMap[packageId || ""];

  if (!pkg) {
    return (
      <div className="max-w-3xl mx-auto py-24 px-2 text-center">
        <p className="text-lg text-gray-700 mb-6">Sorry, we couldn't find that package.</p>
        <Link to="/packages" className="inline-flex items-center text-primary font-medium hover:underline">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Packages
        </Link>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: `linear-gradient(
          90deg,
          #fff 0%,
          #fff 60%,
          #FFD838 60%,
          #FFD838 100%
        )`
      }}
    >
      <div className="max-w-4xl mx-auto py-10 px-2">
        <div className="mb-7">
          <Link to="/packages" className="inline-flex items-center text-primary font-medium hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Packages
          </Link>
        </div>
        {/* Bigger accent at the top */}
        <div className="h-1 rounded bg-gradient-to-r from-primary to-secondary w-32 mx-auto mb-8" />
        {/* Details Content */}
        <PackageDetailsContent
          name={pkg.name}
          howItWorks={pkg.howItWorks}
          whyChoose={pkg.whyChoose}
          paymentLink={pkg.paymentLink}
        />
      </div>
    </div>
  );
};

export default PackageDetail;

