
import React, { useEffect, useRef } from 'react';

// Logo array - easy to edit manually
const clientLogos = [
  {
    id: 1,
    src: "/lovable-uploads/logo1.png",
    alt: "Client Logo 1"
  },
  {
    id: 2,
    src: "/lovable-uploads/logo2.png",
    alt: "Client Logo 2"
  },
  {
    id: 3,
    src: "/lovable-uploads/logo3.png",
    alt: "Client Logo 3"
  },
  {
    id: 4,
    src: "/lovable-uploads/logo4.png",
    alt: "Client Logo 4"
  },
  {
    id: 5,
    src: "/lovable-uploads/logo5.png",
    alt: "Client Logo 5"
  },
  {
    id: 6,
    src: "/lovable-uploads/logo6.png",
    alt: "Client Logo 6"
  }
];

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
    <section className="py-8 bg-white border-y border-gray-100" id="client-logos">
      <div className="overflow-hidden">
        <div className="container-custom">
          <div 
            ref={scrollRef} 
            className="flex items-center space-x-12 py-4 overflow-x-hidden w-full"
            style={{ minWidth: "200%" }}
          >
            {/* Trusted By label */}
            <div className="flex-shrink-0 mr-6">
              <span className="uppercase text-sm font-bold tracking-wider text-gray-500">Trusted By</span>
            </div>
            
            {/* First set of logos */}
            {clientLogos.map(logo => (
              <div key={logo.id} className="flex-shrink-0">
                <img src={logo.src} alt={logo.alt} className="h-12 max-w-full object-contain" />
              </div>
            ))}
            
            {/* Duplicate set for seamless looping */}
            <div className="flex-shrink-0 mr-6">
              <span className="uppercase text-sm font-bold tracking-wider text-gray-500">Trusted By</span>
            </div>
            
            {clientLogos.map(logo => (
              <div key={`duplicate-${logo.id}`} className="flex-shrink-0">
                <img src={logo.src} alt={logo.alt} className="h-12 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogoCarousel;
