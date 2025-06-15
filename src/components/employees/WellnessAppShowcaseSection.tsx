
import React from "react";
import OptimizedImage from "../OptimizedImage";

const appScreens = [
  {
    title: "Home Dashboard",
    description: "Track your progress & well-being at a glance.",
    image: "/lovable-uploads/cb77fb1c-31c1-4d8b-a847-ec0e19c72cc3.png",
  },
  {
    title: "QR Check-In",
    description: "Easy check-ins for all wellness venues.",
    image: "/lovable-uploads/ae12e042-70fd-4d39-84e7-1d419fc5a18d.png",
  },
  {
    title: "Leaderboard",
    description: "See where you and your company stand for rewards.",
    image: "/lovable-uploads/1afeb7f0-633e-4f9d-8c6a-7c3ce21c9c97.png",
  },
];

const WellnessAppShowcaseSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-yellow-50 via-amber-50 to-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Our Exclusive Wellness App
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Access wellness anytime, anywhere—right from your phone. Track activity, check in, join challenges, and more with our beautifully designed, easy-to-use app.
          </p>
        </div>
        <div
          className="
            flex flex-col items-center md:flex-row md:justify-center gap-8 md:gap-12
            max-w-5xl mx-auto
          "
        >
          {appScreens.map((screen, i) => (
            <div
              key={screen.title}
              className="
                flex flex-col items-center
                bg-white/60 rounded-3xl shadow-xl border border-amber-100
                px-4 py-6 md:px-6 md:py-8
                w-full max-w-[320px]
                animate-fade-in
                transition-transform hover:scale-105
              "
              style={{ animationDelay: `${0.1 + 0.08 * i}s` }}
            >
              <div className="w-[170px] h-[355px] md:w-[180px] md:h-[370px] border-[6px] border-gray-900 rounded-[2.5rem] bg-gray-900 shadow-lg relative mb-6 overflow-hidden flex-shrink-0">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />
                <OptimizedImage
                  src={screen.image}
                  alt={screen.title}
                  className="w-full h-full object-cover object-top rounded-[1.7rem]"
                  width={180}
                  height={370}
                  priority={i === 0}
                />
                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-14 h-1 bg-gray-400 rounded-full opacity-75 z-20" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-1">{screen.title}</h3>
                <p className="text-sm text-gray-600">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessAppShowcaseSection;
