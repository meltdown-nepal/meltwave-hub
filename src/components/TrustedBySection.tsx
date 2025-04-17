import React, { useEffect, useRef } from 'react';
import { ScrollArea } from './ui/scroll-area';

// Logo array - easy to edit manually
const logos = [{
  id: 1,
  src: "https://www.brand.lftechnology.com/download/full-color/leapfrog-fl-fc.svg",
  alt: "Company Logo 1"
}, {
  id: 2,
  src: "/lovable-uploads/logo2.png",
  alt: "Company Logo 2"
}, {
  id: 3,
  src: "/lovable-uploads/logo3.png",
  alt: "Company Logo 3"
}, {
  id: 4,
  src: "/lovable-uploads/logo4.png",
  alt: "Company Logo 4"
}, {
  id: 5,
  src: "/lovable-uploads/logo5.png",
  alt: "Company Logo 5"
}, {
  id: 6,
  src: "/lovable-uploads/logo6.png",
  alt: "Company Logo 6"
}];
const TrustedBySection = () => {
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

    // Faster animation for more fluid movement
    const animationId = setInterval(animateScroll, 20);
    return () => clearInterval(animationId);
  }, []);
  return <section id="trusted-by" className="bg-gray-50 py-0">
      <div className="container-custom py-0 my-[2px] bg-white">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider mx-0 py-0 my-[20px]">Our Clients</h2>
        </div>
        
        {/* Desktop scrolling logos - full width continuous flow */}
        <div className="hidden md:block overflow-hidden">
          <div ref={scrollRef} style={{
          minWidth: "200%"
        }} className="flex items-center space-x-12 overflow-x-hidden w-full py-0 bg-white">
            {/* First set of logos */}
            {logos.map(logo => <div key={logo.id} className="flex-shrink-0 flex items-center justify-center bg-white p-6 rounded-md shadow-sm h-24 w-48">
                <img src={logo.src} alt={logo.alt} className="max-h-14 max-w-full object-none" />
              </div>)}
            
            {/* Duplicate set for seamless looping */}
            {logos.map(logo => <div key={`duplicate-${logo.id}`} className="flex-shrink-0 flex items-center justify-center bg-white p-6 rounded-md shadow-sm h-24 w-48">
                <img src={logo.src} alt={logo.alt} className="max-h-14 max-w-full object-contain" />
              </div>)}
          </div>
        </div>
        
        {/* Mobile version with ScrollArea */}
        <div className="md:hidden">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-6 py-6 px-4">
              {logos.map(logo => <div key={logo.id} className="flex-shrink-0 flex items-center justify-center bg-white p-4 rounded-md shadow-sm h-20 w-40">
                  <img src={logo.src} alt={logo.alt} className="max-h-12 max-w-full object-contain" />
                </div>)}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>;
};
export default TrustedBySection;