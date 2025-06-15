
import React from "react";

const steps = [
  {
    number: 1,
    title: "Apply",
    description:
      "Submit your application with details about your wellness services, credentials, and experience. Our team will review your application and contact you for the next steps.",
  },
  {
    number: 2,
    title: "Onboard",
    description:
      "Complete our onboarding process with profile setup, service definition, and training. You'll also get access to our Academy for certification.",
  },
  {
    number: 3,
    title: "Connect",
    description:
      "Receive bookings from corporate clients matched to your services, and deliver outstanding wellness programs with our support.",
  },
];

const HowItWorksStepper = () => {
  return (
    <section aria-labelledby="how-it-works-heading" className="w-full max-w-5xl mx-auto px-2 md:px-0">
      <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold mb-4 text-center">
        How It Works for Providers
      </h2>
      <p className="text-lg max-w-3xl mx-auto text-center mb-10">
        A simple process to join our network and start growing your wellness business.
      </p>
      {/* Stepper */}
      <div className="relative flex items-center justify-between mb-10 max-w-3xl mx-auto">
        {/* Horizontal line */}
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-primary/20 z-0" style={{transform: "translateY(-50%)"}}></div>
        {steps.map((step, i) => (
          <div key={step.number} className="relative z-10 flex flex-col items-center w-1/3">
            {/* Step circle/number */}
            <div className="flex items-center justify-center rounded-full w-14 h-14 bg-white border-4 border-primary shadow-md font-bold text-xl text-primary z-10 transition-all duration-300">
              {step.number}
            </div>
            {/* Step title */}
            <span className="mt-4 text-lg font-semibold text-gray-900 text-center">{step.title}</span>
          </div>
        ))}
      </div>
      {/* Descriptions below for each step */}
      <div className="flex flex-col md:flex-row gap-8 justify-between max-w-3xl mx-auto">
        {steps.map((step) => (
          <div key={step.number} className="flex-1 min-w-0">
            <p className="text-gray-600 text-base text-center md:text-left">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksStepper;
