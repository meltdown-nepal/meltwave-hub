import React, { useEffect, useRef } from 'react';
const clientLogos = [{
  id: 1,
  src: "/lovable-uploads/Veda.png",
  alt: "Client Logo 1"
}, {
  id: 2,
  src: "/lovable-uploads/Karobar.png",
  alt: "Client Logo 2"
}, {
  id: 3,
  src: "/lovable-uploads/naamche.png",
  alt: "Client Logo 3"
}, {
  id: 4,
  src: "/lovable-uploads/SecurityPal.png",
  alt: "Client Logo 4"
}, {
  id: 5,
  src: "/lovable-uploads/HimalayanJava.png",
  alt: "Client Logo 5"
}, {
  id: 6,
  src: "/lovable-uploads/flextecs.png",
  alt: "Client Logo 6"
}, {
  id: 7,
  src: "/lovable-uploads/GolchhaGroup.png",
  alt: "Client Logo 7"
}, {
  id: 8,
  src: "/lovable-uploads/YoungInnovations.png",
  alt: "Client Logo 8"
}, {
  id: 9,
  src: "/lovable-uploads/leapfrog.png",
  alt: "Client Logo 9"
}, {
  id: 10,
  src: "/lovable-uploads/shanker.png",
  alt: "Client Logo 10"
},{
  id: 11,
  src: "/lovable-uploads/KingsCollege.png",
  alt: "Client Logo 10"
},{
  id: 12,
  src: "/lovable-uploads/ottr.png",
  alt: "Client Logo 10"
},{
  id: 13,
  src: "/lovable-uploads/CodingMountain.png",
  alt: "Client Logo 10"
},{
  id: 14,
  src: "/lovable-uploads/JagadambaMotors.png",
  alt: "Client Logo 10"
},{
  id: 15,
  src: "/lovable-uploads/OwlDigital.png",
  alt: "Client Logo 10"
},{
  id: 16,
  src: "/lovable-uploads/KavyaSports.png",
  alt: "Client Logo 10"
},{
  id: 17,
  src: "/lovable-uploads/Stalwart.png",
  alt: "Client Logo 10"
},{
  id: 18,
  src: "/lovable-uploads/WeBajraStudio.png",
  alt: "Client Logo 10"
},{
  id: 19,
  src: "/lovable-uploads/Nepalighar.png",
  alt: "Client Logo 10"
},{
  id: 20,
  src: "/lovable-uploads/UBASolutions.png",
  alt: "Client Logo 10"
},{
  id: 21,
  src: "/lovable-uploads/snackon.png",
  alt: "Client Logo 10"
},];
const ClientLogoCarousel = () => {
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
  return <section className="py-8 bg-yellow-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Loved by ❤️</h3>
        <div className="overflow-hidden">
          <div ref={scrollRef} className="flex justify-center items-center space-x-12 py-4 overflow-x-auto scrollbar-hide" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
            {[...clientLogos, ...clientLogos].map((logo, index) => <div key={`${logo.id}-${index}`} className="flex-shrink-0">
                <img src={logo.src} alt={logo.alt} className="h-16 w-40 object-contain" draggable={false} />
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ClientLogoCarousel;