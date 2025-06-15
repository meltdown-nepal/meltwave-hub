import React from "react";
import ProgramCategoryTabs from "./ProgramCategoryTabs";
const ProgramsSection = () => {
  return <section className="section-padding overflow-hidden bg-white">
      <div className="container-custom">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-4xl mx-0 my-[20px]">Wellness Programs Available To You</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Discover a wide variety of programs across <span className="font-semibold text-primary">Fitness</span>, <span className="font-semibold text-secondary">Nutrition</span>, and <span className="font-semibold text-yellow-700">Mental Wellness</span> – all included with your employer's partnership with Meltdown.
          </p>
        </div>
        <ProgramCategoryTabs />
      </div>
    </section>;
};
export default ProgramsSection;