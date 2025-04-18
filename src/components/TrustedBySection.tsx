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
      
    </section>;
};
export default TrustedBySection;