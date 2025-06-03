
import React from 'react';
import AnimatedElement from '../animations/AnimatedElement';

const clientLogos = [
  { id: 1, src: "/lovable-uploads/Veda.png", alt: "Veda Logo" },
  { id: 2, src: "/lovable-uploads/Karobar.png", alt: "Karobar Logo" },
  { id: 3, src: "/lovable-uploads/naamche.png", alt: "Naamche Logo" },
  { id: 4, src: "/lovable-uploads/SecurityPal.png", alt: "SecurityPal Logo" },
  { id: 5, src: "/lovable-uploads/HimalayanJava.png", alt: "Himalayan Java Logo" },
  { id: 6, src: "/lovable-uploads/flextecs.png", alt: "FlexTecs Logo" },
  { id: 7, src: "/lovable-uploads/GolchhaGroup.png", alt: "Golchha Group Logo" },
  { id: 8, src: "/lovable-uploads/YoungInnovations.png", alt: "Young Innovations Logo" },
  { id: 9, src: "/lovable-uploads/leapfrog.png", alt: "Leapfrog Logo" },
  { id: 10, src: "/lovable-uploads/shanker.png", alt: "Shanker Logo" },
  { id: 11, src: "/lovable-uploads/KingsCollege.png", alt: "Kings College Logo" },
  { id: 12, src: "/lovable-uploads/ottr.png", alt: "Ottr Logo" },
  { id: 13, src: "/lovable-uploads/CodingMountain.png", alt: "Coding Mountain Logo" },
  { id: 14, src: "/lovable-uploads/JagadambaMotors.png", alt: "Jagadamba Motors Logo" },
  { id: 15, src: "/lovable-uploads/OwlDigital.png", alt: "Owl Digital Logo" },
  { id: 16, src: "/lovable-uploads/KavyaSports.png", alt: "Kavya Sports Logo" },
  { id: 17, src: "/lovable-uploads/Stalwart.png", alt: "Stalwart Logo" },
  { id: 18, src: "/lovable-uploads/e3eb0025-e6fd-41c8-8f07-efb1d04c635b.png", alt: "CloudFactory Logo" }
];

const EnhancedClientCarousel = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-white to-secondary/5 overflow-hidden">
      <div className="container-custom">
        <AnimatedElement animation="slideUp" delay={0.2}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted By Leading Companies
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join the growing community of forward-thinking organizations that prioritize employee wellness
            </p>
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fadeIn" delay={0.4}>
          <div className="relative">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
            
            {/* Enhanced scrolling container */}
            <div className="flex overflow-hidden">
              <div className="animate-enhanced-scroll flex items-center">
                {/* First set */}
                {clientLogos.map((logo) => (
                  <div
                    key={`first-${logo.id}`}
                    className="flex-shrink-0 mx-8 group"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-16 w-auto max-w-[140px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clientLogos.map((logo) => (
                  <div
                    key={`second-${logo.id}`}
                    className="flex-shrink-0 mx-8 group"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-16 w-auto max-w-[140px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      <style>{`
        @keyframes enhanced-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-enhanced-scroll {
          animation: enhanced-scroll 60s linear infinite;
          width: fit-content;
        }

        .animate-enhanced-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EnhancedClientCarousel;
