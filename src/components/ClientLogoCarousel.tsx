
import React, { useEffect, useRef } from 'react';

// Logo array - easy to edit manually
const clientLogos = [{
  id: 1,
  src: "/lovable-uploads/golchhagroup_logo_fill.png",
  alt: "Client Logo 1"
}, {
  id: 2,
  src: "/lovable-uploads/java.png",
  alt: "Client Logo 2"
}, {
  id: 3,
  src: "/lovable-uploads/securitypal.png",
  alt: "Client Logo 3"
}, {
  id: 4,
  src: "/lovable-uploads/karobar.png",
  alt: "Client Logo 4"
}, {
  id: 5,
  src: "/lovable-uploads/flextecs.png",
  alt: "Client Logo 5"
}, {
  id: 6,
  src: "/lovable-uploads/leapfrog.png",
  alt: "Client Logo 6"
},{
  id: 7,
  src: "/lovable-uploads/yi.png",
  alt: "Client Logo 5"
},{
  id: 8,
  src: "/lovable-uploads/vedalogo.png",
  alt: "Client Logo 5"
},{
  id: 9,
  src: "/lovable-uploads/stalwart.png",
  alt: "Client Logo 5"
},{
  id: 10,
  src: "/lovable-uploads/naamche.png",
  alt: "Client Logo 5"
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
