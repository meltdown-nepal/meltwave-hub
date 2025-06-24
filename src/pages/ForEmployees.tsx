
import React from 'react';
import HeroSection from '@/components/employees/HeroSection';
import ProgramsSection from '@/components/employees/ProgramsSection';
import BenefitsSection from '@/components/employees/BenefitsSection';
import PartnerSuccessSection from '@/components/employees/PartnerSuccessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/employees/CtaSection';
import WellnessAppShowcaseSection from "@/components/employees/WellnessAppShowcaseSection";
import EmployeePackageShowcase from "@/components/employees/EmployeePackageShowcase";

// Employee testimonials data (removed duplicate "Prashant Shrestha")
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
    title: "I used to lack motivation and dread going to the same fitness center, but Meltdown completely changed that with its uplifting vibe.",
    name: "Bibha Tandukar",
    role: ""
  }
];

const ForEmployees = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 via-yellow-50 to-white">
      {/* Whole-page background applied here */}
      <HeroSection />
      <WellnessAppShowcaseSection />
      <ProgramsSection />
      <EmployeePackageShowcase />
      <BenefitsSection />
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
