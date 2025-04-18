
import React, { useEffect, useRef } from 'react';

// Logo array - easy to edit manually
const clientLogos = [{
  id: 1,
  src: "/lovable-uploads/logo1.png",
  alt: "Client Logo 1"
}, {
  id: 2,
  src: "/lovable-uploads/logo2.png",
  alt: "Client Logo 2"
}, {
  id: 3,
  src: "/lovable-uploads/logo3.png",
  alt: "Client Logo 3"
}, {
  id: 4,
  src: "/lovable-uploads/logo4.png",
  alt: "Client Logo 4"
}, {
  id: 5,
  src: "/lovable-uploads/logo5.png",
  alt: "Client Logo 5"
}, {
  id: 6,
  src: "/lovable-uploads/logo6.png",
  alt: "Client Logo 6"
}];

const ClientLogoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animateScroll = () => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          // Reset to start with no visual interruption
          scrollRef.current.scrollLeft = 0;
        } else {
          // Smooth continuous scroll
          scrollRef.current.scrollLeft += 1;
        }
      }
    };

    // Animation interval
    const animationId = setInterval(animateScroll, 30);
    return () => clearInterval(animationId);
  }, []);
  
  return (
    <section className="py-8 bg-white">
      <div className="container-custom">
        <h3 className="text-2xl font-bold text-center mb-8">TRUSTED BY</h3>
        <div className="overflow-hidden">
          <div 
            ref={scrollRef} 
            className="flex space-x-12 py-4 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Double the logos to create seamless loop */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="flex-shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoCarousel;
