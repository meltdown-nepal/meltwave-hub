
import React from 'react';
import { Check } from "lucide-react";

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-heart-pulse text-amber-400">
        <path d="M19 14V6"></path>
        <path d="M14 9h10"></path>
        <path d="M21 17h-2.5a2 2 0 0 0-1.5.7l-1.7 2.6a2 2 0 0 1-3.3 0l-1.7-2.6a2 2 0 0 0-3.3 0l-1.7 2.6a2 2 0 0 1-3.3 0L1 17.8"></path>
        <path d="M5 6a1 1 0 0 0-1 1v3.7a1 1 0 0 0 .4.8L9 15"></path>
      </svg>
    ),
    title: "Accessibility",
    description: "Visit any center, any day—whenever it fits your schedule.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-brain text-amber-400">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 0-4.96.44 2.5 2.5 0 0 0-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 0 1.32-4.24 2.5 2.5 0 0 0 1.98-3A2.5 2.5 0 0 0 9.5 2Z"></path>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
      </svg>
    ),
    title: "Variety",
    description: "Try different activities and find what you love.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-coins text-amber-400">
        <circle cx="8" cy="8" r="6"></circle>
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
        <path d="M7 6h1v4"></path>
        <path d="m16.71 13.88.7.71-2.82 2.82"></path>
      </svg>
    ),
    title: "Affordability",
    description: "Your company subsidizes a portion of your subscription.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-users text-amber-400">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 1 0 7.75"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: "Challenges",
    description: "Compete with your friends and win rewards.",
  }
];

const BenefitsSection = () => {
  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How You Benefit</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our programs are designed to help you achieve balance, well-being, and success in all areas of your life.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-center bg-white py-4 px-4 sm:px-6 rounded-lg shadow hover:shadow-lg transition-all border border-amber-50"
            >
              <Check className="text-green-600 mr-3 flex-shrink-0" size={22} strokeWidth={3} />
              <div className="flex-shrink-0 mr-5 flex items-center justify-center w-12 h-12 rounded-full bg-amber-100">
                {benefit.icon}
              </div>
              <div className="text-left flex-1">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-sm md:text-base text-gray-700">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

