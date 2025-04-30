
import React, { useEffect, useRef, useState } from 'react';

// Reordered and filtered client logos as requested
const clientLogos = [
  {
    id: 9,
    src: "/lovable-uploads/leapfrog.png",
    alt: "Leapfrog Logo"
  }, {
    id: 4,
    src: "/lovable-uploads/SecurityPal.png",
    alt: "SecurityPal Logo"
  }, {
    id: 6,
    src: "/lovable-uploads/flextecs.png",
    alt: "FlexTecs Logo"
  }, {
    id: 8,
    src: "/lovable-uploads/YoungInnovations.png",
    alt: "Young Innovations Logo"
  }, {
    id: 3,
    src: "/lovable-uploads/naamche.png",
    alt: "Naamche Logo"
  }, {
    id: 12,
    src: "/lovable-uploads/ottr.png",
    alt: "Ottr Logo"
  }, {
    id: 15,
    src: "/lovable-uploads/OwlDigital.png",
    alt: "Owl Digital Logo"
  }, {
    id: 1,
    src: "/lovable-uploads/Veda.png",
    alt: "Veda Logo"
  }, {
    id: 7,
    src: "/lovable-uploads/GolchhaGroup.png",
    alt: "Golchha Group Logo"
  }, {
    id: 2,
    src: "/lovable-uploads/Karobar.png",
    alt: "Karobar Logo"
  }, {
    id: 5,
    src: "/lovable-uploads/HimalayanJava.png",
    alt: "Himalayan Java Logo"
  }, {
    id: 10,
    src: "/lovable-uploads/shanker.png",
    alt: "Shanker Logo"
  }, {
    id: 11,
    src: "/lovable-uploads/KingsCollege.png",
    alt: "Kings College Logo"
  }, {
    id: 13,
    src: "/lovable-uploads/CodingMountain.png",
    alt: "Coding Mountain Logo"
  }, {
    id: 14,
    src: "/lovable-uploads/JagadambaMotors.png",
    alt: "Jagadamba Motors Logo"
  }, {
    id: 16,
    src: "/lovable-uploads/KavyaSports.png",
    alt: "Kavya Sports Logo"
  }, {
    id: 17,
    src: "/lovable-uploads/Stalwart.png",
    alt: "Stalwart Logo"
  }
  // Removed:
  // - UBA Solutions 
  // - Snackon
  // - WeBajraStudio
  // - NepaliGharHotel
];

const ClientLogoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !scrollRef.current) return;
    
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

    // Faster animation for more fluid movement
    const animationId = setInterval(animateScroll, 20);
    return () => clearInterval(animationId);
  }, [isVisible]);

  return (
    <section className="py-8 bg-yellow-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Loved by employees</h3>
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex justify-center items-center space-x-16 py-6 overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {clientLogos.map((logo) => (
              <div 
                key={logo.id} 
                className="flex-shrink-0 transition-transform hover:scale-110 duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-24 w-48 object-contain"
                  draggable={false}
                  loading="lazy"
                  width="192"
                  height="96"
                />
              </div>
            ))}
            {/* Add clones of the first few items to create a seamless loop effect */}
            {clientLogos.slice(0, 5).map((logo) => (
              <div 
                key={`clone-${logo.id}`} 
                className="flex-shrink-0 transition-transform hover:scale-110 duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-24 w-48 object-contain"
                  draggable={false}
                  loading="lazy"
                  width="192"
                  height="96"
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
