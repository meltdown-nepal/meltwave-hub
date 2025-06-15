
import React from "react";

interface HowItWorksTimelineProps {
  steps: string[];
}

const HowItWorksTimeline: React.FC<HowItWorksTimelineProps> = ({ steps }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center mb-8">
        <span className="gradient-text">How it Works</span>
      </h2>
      <ul className="relative flex flex-col gap-10 px-2 sm:px-6 py-2 before:absolute before:left-7 before:top-8 before:bottom-4 before:w-1 before:bg-gradient-to-b before:from-primary before:to-secondary before:rounded-full before:z-0">
        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1;
          return (
            <li
              key={idx}
              className="relative flex items-center group animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Timeline node/dot */}
              <div className="z-10 flex flex-col items-center">
                {/* Star icon for last step, else animated dot with step number */}
                {isLast ? (
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 animate-pulse-glow"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFD838"
                      strokeWidth="1.5"
                    >
                      <polygon
                        points="12,2 14.3,8 21,8 15.5,12.2 17.8,19 12,15.4 6.2,19 8.5,12.2 3,8 9.7,8"
                        fill="#FFD838"
                        stroke="#FFD838"
                        className="drop-shadow-xl"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="relative w-7 h-7 flex items-center justify-center">
                    <div className="absolute w-7 h-7 rounded-full bg-gradient-to-br from-primary/90 to-yellow-400 border-2 border-primary shadow-lg animate-pulse-glow"></div>
                    <span className="relative text-lg font-bold text-gray-900 z-10 drop-shadow">{idx + 1}</span>
                  </div>
                )}

                {/* Connector line except for last step */}
                {!isLast && (
                  <div className="w-px flex-1 bg-gradient-to-b from-primary to-yellow-300 opacity-80 min-h-[48px]" />
                )}
              </div>

              {/* Step Card / Text with glass effect */}
              <div className="ml-6 w-full relative">
                <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg px-5 py-5 border border-yellow-100 group-hover:scale-[1.025] transition-transform duration-300 max-w-2xl">
                  <span className="block text-base sm:text-lg font-semibold text-gray-800">{step}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HowItWorksTimeline;

