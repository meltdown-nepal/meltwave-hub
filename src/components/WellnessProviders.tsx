
import React, { useEffect, useRef } from 'react';

const providers = [
  {
    id: 1,
    src: "/lovable-uploads/Veda.png",
    alt: "Wellness Provider 1"
  },
  {
    id: 2,
    src: "/lovable-uploads/Karobar.png",
    alt: "Wellness Provider 2"
  },
  {
    id: 3,
    src: "/lovable-uploads/naamche.png",
    alt: "Wellness Provider 3"
  },
  {
    id: 4,
    src: "/lovable-uploads/SecurityPal.png",
    alt: "Wellness Provider 4"
  },
  {
    id: 5,
    src: "/lovable-uploads/HimalayanJava.png",
    alt: "Wellness Provider 5"
  }
];

const WellnessProviders = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateScroll = () => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    };

    const animationId = setInterval(animateScroll, 30);
    return () => clearInterval(animationId);
  }, []);

  return (
    <section className="py-8 bg-yellow-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Our Wellness Providers</h3>
        <div className="overflow-hidden">
          <div 
            ref={scrollRef} 
            className="flex justify-center items-center space-x-12 py-4 overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {[...providers, ...providers].map((provider, index) => (
              <div key={`${provider.id}-${index}`} className="flex-shrink-0">
                <img 
                  src={provider.src} 
                  alt={provider.alt} 
                  className="h-16 w-40 object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessProviders;
