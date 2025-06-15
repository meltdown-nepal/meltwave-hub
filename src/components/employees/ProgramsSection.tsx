import React from "react";
import ProgramCategoryTabs from "./ProgramCategoryTabs";
const ProgramsSection = () => {
  return <section className="section-padding overflow-hidden bg-white">
      <div className="container-custom">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="mx-0 my-0 text-4xl">Wellness Programs Available To You</h2>
          
        </div>
        <ProgramCategoryTabs />
      </div>
    </section>;
};
export default ProgramsSection;