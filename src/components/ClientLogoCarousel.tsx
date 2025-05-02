
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
  const [resetInProgress, setResetInProgress] = useState(false);

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
    
    const scrollSpeed = isMobile ? 0.4 : 0.7;
    
    const animateScroll = () => {
      if (scrollRef.current && !resetInProgress) {
        const containerWidth = scrollRef.current.clientWidth;
        const scrollWidth = scrollRef.current.scrollWidth;
        const scrollLeft = scrollRef.current.scrollLeft;
        const halfwayPoint = scrollWidth / 2;
        
        // If we're near the end of the first set, smoothly reset
        if (scrollLeft >= halfwayPoint - containerWidth) {
          setResetInProgress(true);
          
          // Use requestAnimationFrame for smooth transition
          const resetScroll = () => {
            if (scrollRef.current) {
              // Reset to beginning with a smooth transition
              scrollRef.current.scrollTo({
                left: 0,
                behavior: 'auto'
              });
              
              // Wait a tiny bit to avoid visual jank
              setTimeout(() => {
                setResetInProgress(false);
              }, 50);
            }
          };
          
          resetScroll();
        } else {
          scrollRef.current.scrollLeft += scrollSpeed;
        }
      }
      
      if (!resetInProgress) {
        animationRef.current = requestAnimationFrame(animateScroll);
      }
    };
    
    animationRef.current = requestAnimationFrame(animateScroll);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, isMobile, resetInProgress]);

  return (
    <section className="py-8 bg-yellow-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Loved by ❤️</h3>
        <div className="relative overflow-hidden">
          {/* Add gradients for fade effect on the sides */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-yellow-50 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-yellow-50 to-transparent"></div>
          
          <div
            ref={scrollRef}
            className="flex items-center justify-start py-8 overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            {/* First set of logos */}
            {clientLogos.map((logo) => (
              <div 
                key={logo.id} 
                className="flex-shrink-0 mx-10 transition-transform hover:scale-110 duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 md:h-24 w-auto max-w-[140px] md:max-w-[180px] object-contain"
                  draggable={false}
                  loading="lazy"
                  width="180"
                  height="96"
                />
              </div>
            ))}
            
            {/* Duplicate the full set of logos to create a seamless loop */}
            {clientLogos.map((logo) => (
              <div 
                key={`clone-${logo.id}`} 
                className="flex-shrink-0 mx-10 transition-transform hover:scale-110 duration-300"
              >
                <img
                  src={logo.src}
                  alt={`${logo.alt} (duplicate)`}
                  className="h-20 md:h-24 w-auto max-w-[140px] md:max-w-[180px] object-contain"
                  draggable={false}
                  loading="lazy"
                  width="180"
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
