
import React, { useEffect, useRef, useState } from 'react';

const clientLogos = [
  {
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
    src: "/lovable-uploads/WeBajraStudio.png",
    alt: "We Bajra Studio Logo"
  }, {
    id: 19,
    src: "/lovable-uploads/NepaliGharHotel.png",
    alt: "Nepali Ghar Hotel Logo"
  }, {
    id: 20,
    src: "/lovable-uploads/UBASolutions.png",
    alt: "UBA Solutions Logo"
  }, {
    id: 21,
    src: "/lovable-uploads/snackon.png",
    alt: "Snack On Logo"
  }
];

const ClientLogoCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number>();
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Detect if carousel is in viewport
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

  // Improved smooth scrolling animation
  useEffect(() => {
    if (!isVisible || !scrollRef.current) return;
    
    // Adjusted speeds for smoother animation
    const scrollSpeed = isMobile ? 0.5 : 0.8;
    let lastTimestamp = 0;
    
    const animate = (timestamp: number) => {
      if (!scrollRef.current) return;
      
      // Calculate time difference to ensure consistent speed regardless of frame rate
      const elapsed = timestamp - lastTimestamp;
      if (lastTimestamp !== 0 && elapsed > 0) {
        const containerWidth = scrollRef.current.clientWidth;
        const scrollWidth = scrollRef.current.scrollWidth / 2; // Half because we duplicated the logos
        
        // Increment scroll position based on elapsed time for smooth motion
        scrollRef.current.scrollLeft += (scrollSpeed * elapsed) / 16; // Normalize to ~60fps
        
        // If we reach the middle (clone section), reset to beginning
        if (scrollRef.current.scrollLeft >= scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      
      lastTimestamp = timestamp;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, isMobile]);

  return (
    <section className="py-8 bg-yellow-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Loved by ❤️</h3>
        <div className="relative overflow-hidden">
          {/* Enhanced gradients for fade effect on the sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-yellow-50 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-yellow-50 to-transparent"></div>
          
          <div
            ref={scrollRef}
            className="flex items-center justify-start py-8 overflow-x-hidden whitespace-nowrap"
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {/* First set of logos */}
            {clientLogos.map((logo) => (
              <div 
                key={logo.id} 
                className="inline-flex flex-shrink-0 mx-12 transition-transform hover:scale-110 duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-24 md:h-28 w-auto max-w-[160px] md:max-w-[200px] object-contain"
                  draggable={false}
                  loading="lazy"
                  width="200"
                  height="112"
                />
              </div>
            ))}
            
            {/* Duplicate set of logos for seamless looping */}
            {clientLogos.map((logo) => (
              <div 
                key={`clone-${logo.id}`} 
                className="inline-flex flex-shrink-0 mx-12 transition-transform hover:scale-110 duration-300"
              >
                <img
                  src={logo.src}
                  alt={`${logo.alt} (duplicate)`}
                  className="h-24 md:h-28 w-auto max-w-[160px] md:max-w-[200px] object-contain"
                  draggable={false}
                  loading="lazy"
                  width="200"
                  height="112"
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
