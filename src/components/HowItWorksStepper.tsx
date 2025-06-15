
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
    <section aria-labelledby="how-it-works-heading" className="w-full max-w-3xl mx-auto px-2 md:px-0">
      <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold mb-4 text-center">
        How It Works for Providers
      </h2>
      <p className="text-lg max-w-2xl mx-auto text-center mb-10">
        A simple process to join our network and start growing your wellness business.
      </p>
      {/* Vertical Stepper */}
      <ol className="relative border-l-2 border-primary/20 mt-6 md:mt-10 space-y-8">
        {steps.map((step, idx) => (
          <li
            key={step.number}
            className="relative ml-6 group animate-fade-in"
            style={{
              animationDelay: `${idx * 100 + 100}ms`,
              animationFillMode: "both"
            }}
          >
            {/* Step Icon/Number */}
            <span
              className={`
                absolute -left-8 flex items-center justify-center w-12 h-12 rounded-full
                bg-white border-4 border-primary text-primary font-bold text-2xl shadow transition
                group-hover:bg-primary group-hover:text-white group-hover:scale-105 animate-float
                `}
              aria-label={`Step ${step.number}`}
            >
              {step.number}
            </span>
            {/* Card-like Box */}
            <div className="bg-white rounded-xl shadow-md p-6 pl-8 flex flex-col gap-2 hover:shadow-lg transition hover-lift border border-primary/10">
              <div className="font-semibold text-lg mb-1 text-primary">{step.title}</div>
              <div className="text-gray-700 text-base">{step.description}</div>
            </div>
            {/* Connecting vertical line (except last step) */}
            {idx < steps.length - 1 && (
              <span
                className="absolute left-0 top-12 w-1 h-full bg-primary/10"
                aria-hidden="true"
                style={{ zIndex: 0 }}
              ></span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowItWorksStepper;

