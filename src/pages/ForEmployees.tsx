
import React from 'react';
import HeroSection from '@/components/employees/HeroSection';
import BenefitsSection from '@/components/employees/BenefitsSection';
import ProgramsSection from '@/components/employees/ProgramsSection';
import PartnerSuccessSection from '@/components/employees/PartnerSuccessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/employees/CtaSection';

// Employee testimonials data
const employeeTestimonials = [
  {
    title: "Gym consistency was a struggle. Having multiple fitness centers to choose from made it so much easier.",
    name: "Chiring Sherpa",
    role: ""
  }, 
  {
    title: "I used to lack motivation and dread going to the same fitness center, but Meltdown completely changed that with its uplifting vibe.",
    name: "Prashant Shrestha",
    role: ""
  }, 
  {
    title: "Partnering with Meltdown has helped me build a more positive mindset around fitness.",
    name: "Prashant Shrestha",
    role: ""
  }, 
  {
    title: "I used to lack motivation and dread going to the same fitness center, but Meltdown completely changed that with its uplifting vibe.",
    name: "Bibha Tandukar",
    role: ""
  }
];

const ForEmployees = () => {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <ProgramsSection />
      <TestimonialsSection 
        testimonials={employeeTestimonials}
        title="Employee Success Stories"
        subtitle="Hear from employees who have experienced positive changes through our wellness programs."
      />
      <PartnerSuccessSection />
      <CtaSection />
    </div>
  );
};

export default ForEmployees;
