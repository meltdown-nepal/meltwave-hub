
import React from "react";

interface HowItWorksTimelineProps {
  steps: string[];
}

const HowItWorksTimeline: React.FC<HowItWorksTimelineProps> = ({ steps }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">How it Works</h2>
      <ul className="relative pl-7 pb-1">
        {steps.map((step, idx) => {
          const isFirst = idx === 0;
          const isLast = idx === steps.length - 1;
          return (
            <li key={idx} className="flex items-start relative min-h-[48px]">
              {/* Timeline connector */}
              <div className="absolute left-0 flex flex-col items-center h-full top-0 z-0">
                {/* Dot/Star */}
                {isLast ? (
                  <div className="w-4 h-4 flex items-center justify-center rounded-full bg-primary text-black font-bold text-xs shadow-sm">
                    <svg className="w-4 h-4" viewBox="0 0 20 20">
                      <polygon points="10,2 12.3,7.5 18,7.5 13.3,11.3 15.6,17 10,13.8 4.4,17 6.7,11.3 2,7.5 7.7,7.5" fill="#FFD838" stroke="#FFD838" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-4 h-4 rounded-full bg-gray-700 border-2 border-primary" />
                )}

                {/* Line, except after last step */}
                {!isLast && (
                  <div
                    className="w-px flex-1"
                    style={{
                      background:
                        "repeating-linear-gradient(to bottom, #FFD838 0, #FFD838 5px, transparent 5px, transparent 12px)",
                      minHeight: "32px",
                      marginTop: "-2px"
                    }}
                  ></div>
                )}
              </div>

              {/* Step Text */}
              <span className="ml-7 text-gray-900 text-base">
                {step}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HowItWorksTimeline;
