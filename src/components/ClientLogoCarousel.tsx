
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
    <section className="py-10 bg-white">
      <div className="container-custom">
        <div className="flex items-center">
          <span className="text-sm font-semibold text-gray-500 mr-8 whitespace-nowrap">TRUSTED BY</span>
          <div 
            ref={scrollRef} 
            className="flex overflow-hidden space-x-12 items-center"
          >
            {/* Duplicate logos for seamless looping */}
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <img 
                key={`${logo.id}-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoCarousel;
