
import React from "react";
import PackageCard from "@/components/packages/PackageCard";

const packages = [
  {
    id: "personal-training",
    name: "Personal Training Package",
    description: "Work one-on-one with professional trainers to reach your unique fitness goals through customized routines and coaching.",
  },
  {
    id: "health-nutrition",
    name: "Health and Nutrition Package",
    description: "Receive expert nutritional guidance and healthy meal plans tailored for lifestyle transformation and overall wellbeing.",
  },
];

const Packages = () => (
  <div className="max-w-5xl mx-auto py-16 px-4">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Packages</h1>
    <div className="grid gap-10 md:grid-cols-2">
      {packages.map((pkg) => (
        <PackageCard key={pkg.id} {...pkg} />
      ))}
    </div>
  </div>
);

export default Packages;
