import React from 'react';
const clientLogos = [{
  id: 1,
  src: "/lovable-uploads/Veda.png",
  alt: "Veda Logo"
}, {
  id: 2,
  src: "/lovable-uploads/Karobar.png",
  alt: "Karobar Logo"
}, {
  id: 3,
  src: "/lovable-uploads/naamche.png",
  alt: "Naamche Logo"
}, {
  id: 4,
  src: "/lovable-uploads/SecurityPal.png",
  alt: "SecurityPal Logo"
}, {
  id: 5,
  src: "/lovable-uploads/HimalayanJava.png",
  alt: "Himalayan Java Logo"
}, {
  id: 6,
  src: "/lovable-uploads/flextecs.png",
  alt: "FlexTecs Logo"
}, {
  id: 7,
  src: "/lovable-uploads/GolchhaGroup.png",
  alt: "Golchha Group Logo"
}, {
  id: 8,
  src: "/lovable-uploads/YoungInnovations.png",
  alt: "Young Innovations Logo"
}, {
  id: 9,
  src: "/lovable-uploads/leapfrog.png",
  alt: "Leapfrog Logo"
}, {
  id: 10,
  src: "/lovable-uploads/shanker.png",
  alt: "Shanker Logo"
}, {
  id: 11,
  src: "/lovable-uploads/KingsCollege.png",
  alt: "Kings College Logo"
}, {
  id: 12,
  src: "/lovable-uploads/ottr.png",
  alt: "Ottr Logo"
}, {
  id: 13,
  src: "/lovable-uploads/CodingMountain.png",
  alt: "Coding Mountain Logo"
}, {
  id: 14,
  src: "/lovable-uploads/JagadambaMotors.png",
  alt: "Jagadamba Motors Logo"
}, {
  id: 15,
  src: "/lovable-uploads/OwlDigital.png",
  alt: "Owl Digital Logo"
}, {
  id: 16,
  src: "/lovable-uploads/KavyaSports.png",
  alt: "Kavya Sports Logo"
}, {
  id: 17,
  src: "/lovable-uploads/Stalwart.png",
  alt: "Stalwart Logo"
}, {
  id: 18,
  src: "/lovable-uploads/e3eb0025-e6fd-41c8-8f07-efb1d04c635b.png",
  alt: "CloudFactory Logo"
}];
const EnhancedClientCarousel = () => {
  return <section id="trusted-companies-section" className="py-12 bg-gradient-to-r from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Trusted by Leading Companies
        </h3>
        <div className="relative">
          {/* Gradient edges for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-50 via-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-50 via-white to-transparent pointer-events-none" />
          
          {/* Optimized scrolling container */}
          <div className="flex overflow-hidden">
            <div className="animate-seamless-scroll flex">
              {/* First set of logos */}
              {clientLogos.map(logo => <div key={`first-${logo.id}`} className="flex-shrink-0 flex items-center justify-center px-8 py-6 group ">
                  <div className="relative overflow-hidden rounded-xl p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-white/50 backdrop-blur-sm border border-gray-100/50 group-hover:bg-white/70">
                    <img src={logo.src} alt={logo.alt} className="h-12 md:h-16 w-auto max-w-[120px] md:max-w-[150px] object-contain transition-all duration-300 filter brightness-90 group-hover:brightness-100" draggable={false} loading="lazy" width="150" height="64" decoding="async" />
                  </div>
                </div>)}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map(logo => <div key={`second-${logo.id}`} className="flex-shrink-0 flex items-center justify-center px-8 py-6 group">
                  <div className="relative overflow-hidden rounded-xl p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg bg-white/50 backdrop-blur-sm border border-gray-100/50 group-hover:bg-white/70">
                    <img src={logo.src} alt={logo.alt} className="h-12 md:h-16 w-auto max-w-[120px] md:max-w-[150px] object-contain transition-all duration-300 filter brightness-90 group-hover:brightness-100" draggable={false} loading="lazy" width="150" height="64" decoding="async" />
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>

      {/* Optimized CSS animation for better performance */}
      <style>{`
        @keyframes seamless-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .animate-seamless-scroll {
          animation: seamless-scroll 60s linear infinite;
          width: fit-content;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
          transform: translateZ(0);
        }

        /* Pause animation on hover for better UX */
        .animate-seamless-scroll:hover {
          animation-play-state: paused;
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-seamless-scroll {
            animation-duration: 120s;
          }
        }
      `}</style>
    </section>;
};
export default EnhancedClientCarousel;