import React from 'react';
const clientLogos = [{
  id: 1,
  src: "/lovable-uploads/397c4685-d91a-452b-b4fa-51c0f4236ee7.png",
  alt: "Athlete Land"
}, {
  id: 2,
  src: "/lovable-uploads/1b36a7dd-923f-4af1-8b78-0c422d5f576c.png",
  alt: "AWA Club"
}, {
  id: 3,
  src: "/lovable-uploads/14a3b627-4a42-469a-a6a5-d6f54dbb06ad.png",
  alt: "Bajra Sports Centre"
}, {
  id: 4,
  src: "/lovable-uploads/201cad4a-1cf7-49c2-961f-5e1c1760e01f.png",
  alt: "Bands Fitness"
}, {
  id: 5,
  src: "/lovable-uploads/cf919e11-e768-4da0-8356-f14df6a3e4f0.png",
  alt: "Blackstar Fitness"
}, {
  id: 6,
  src: "/lovable-uploads/bdc58112-4650-4b00-9673-ff29a29f2db5.png",
  alt: "Beauty & The Beast Fitness Station"
}, {
  id: 7,
  src: "/lovable-uploads/8acbd348-e2ba-45d5-9056-60b939d71eae.png",
  alt: "Bob's Gym"
}, {
  id: 8,
  src: "/lovable-uploads/06891232-b111-41e1-aa37-b381970e4df0.png",
  alt: "E Dev Gym"
}, {
  id: 9,
  src: "/lovable-uploads/719006e5-d062-44b4-99ba-8fbd518b54e7.png",
  alt: "Ekarana Muay Thai"
}, {
  id: 10,
  src: "/lovable-uploads/13b7cac1-6f5d-49af-a91d-95098751d3ee.png",
  alt: "Happy Minds"
}, {
  id: 11,
  src: "/lovable-uploads/ff546b12-05d6-4589-88bc-6dccce67bf1c.png",
  alt: "Regal Fitness"
}, {
  id: 12,
  src: "/lovable-uploads/5c9d285f-e605-40e0-9db4-01d516e2b888.png",
  alt: "Riddhi Pilates Studios"
}, {
  id: 13,
  src: "/lovable-uploads/53894216-71b2-4325-ab38-8344563caa74.png",
  alt: "Super Fitness"
}, {
  id: 14,
  src: "/lovable-uploads/d7f9a37a-1fe9-488e-b4e3-cbcef131cafe.png",
  alt: "Tapout Fitness"
}, {
  id: 15,
  src: "/lovable-uploads/98c39ae5-f842-422f-89a8-b8b626e945ad.png",
  alt: "Three Lions Fitness Center"
}, {
  id: 16,
  src: "/lovable-uploads/20d63b1f-921f-4e7c-b6a6-e9e511c135e0.png",
  alt: "Tranquility Spa"
}];
const WellnessProvidersCarousel = () => {
  return <section className="py-8 bg-yellow-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8 py-[20px]">Wellness Providers</h3>
        <div className="relative">
          {/* Gradient edges for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-yellow-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-yellow-50 to-transparent pointer-events-none" />
          
          {/* Optimized scrolling container */}
          <div className="flex overflow-hidden">
            <div className="animate-seamless-scroll flex">
              {/* First set of logos */}
              {clientLogos.map(logo => <div key={`first-${logo.id}`} className="flex-shrink-0 flex items-center justify-center px-6 py-4">
                  <img src={logo.src} alt={logo.alt} className="h-16 md:h-20 w-auto max-w-[140px] md:max-w-[180px] object-contain transition-all duration-300" draggable={false} loading="lazy" width="180" height="80" decoding="async" />
                </div>)}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map(logo => <div key={`second-${logo.id}`} className="flex-shrink-0 flex items-center justify-center px-6 py-4">
                  <img src={logo.src} alt={logo.alt} className="h-16 md:h-20 w-auto max-w-[140px] md:max-w-[180px] object-contain transition-all duration-300" draggable={false} loading="lazy" width="180" height="80" decoding="async" />
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
export default WellnessProvidersCarousel;