
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Logo {
  id: number;
  src: string;
  alt: string;
}

const clientLogos = [
  { id: 1, src: "/lovable-uploads/397c4685-d91a-452b-b4fa-51c0f4236ee7.png", alt: "Athlete Land" },
  { id: 2, src: "/lovable-uploads/1b36a7dd-923f-4af1-8b78-0c422d5f576c.png", alt: "AWA Club" },
  { id: 3, src: "/lovable-uploads/14a3b627-4a42-469a-a6a5-d6f54dbb06ad.png", alt: "Bajra Sports Centre" },
  { id: 4, src: "/lovable-uploads/201cad4a-1cf7-49c2-961f-5e1c1760e01f.png", alt: "Bands Fitness" },
  { id: 5, src: "/lovable-uploads/cf919e11-e768-4da0-8356-f14df6a3e4f0.png", alt: "Blackstar Fitness" },
  { id: 6, src: "/lovable-uploads/bdc58112-4650-4b00-9673-ff29a29f2db5.png", alt: "Beauty & The Beast Fitness Station" },
  { id: 7, src: "/lovable-uploads/8acbd348-e2ba-45d5-9056-60b939d71eae.png", alt: "Bob's Gym" },
  { id: 8, src: "/lovable-uploads/06891232-b111-41e1-aa37-b381970e4df0.png", alt: "E Dev Gym" },
  { id: 9, src: "/lovable-uploads/719006e5-d062-44b4-99ba-8fbd518b54e7.png", alt: "Ekarana Muay Thai" },
  { id: 10, src: "/lovable-uploads/13b7cac1-6f5d-49af-a91d-95098751d3ee.png", alt: "Happy Minds" },
  { id: 11, src: "/lovable-uploads/ff546b12-05d6-4589-88bc-6dccce67bf1c.png", alt: "Regal Fitness" },
  { id: 12, src: "/lovable-uploads/5c9d285f-e605-40e0-9db4-01d516e2b888.png", alt: "Riddhi Pilates Studios" },
  { id: 13, src: "/lovable-uploads/53894216-71b2-4325-ab38-8344563caa74.png", alt: "Super Fitness" },
  { id: 14, src: "/lovable-uploads/d7f9a37a-1fe9-488e-b4e3-cbcef131cafe.png", alt: "Tapout Fitness" },
  { id: 15, src: "/lovable-uploads/98c39ae5-f842-422f-89a8-b8b626e945ad.png", alt: "Three Lions Fitness Center" },
  { id: 16, src: "/lovable-uploads/20d63b1f-921f-4e7c-b6a6-e9e511c135e0.png", alt: "Tranquility Spa" }
];

const WellnessProviders = () => {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Determine items per row based on screen size
  let itemsPerRow = 4; // desktop default
  if (isMobile) {
    itemsPerRow = 1;
  } else if (window.innerWidth < 1024) {
    itemsPerRow = 2;
  }
  
  // Calculate total number of pages
  const totalPages = Math.ceil(clientLogos.length / itemsPerRow);
  
  // Get current page of logos
  const currentLogos = clientLogos.slice(
    currentPage * itemsPerRow,
    (currentPage + 1) * itemsPerRow
  );
  
  // Navigation handlers with animation
  const goToPrevPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const goToNextPage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  return (
    <section className="py-12 bg-yellow-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">Our Wellness Network</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These amazing gyms, studios, and wellness centers help power the Meltdown experience.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10">
            <Button
              variant="outline"
              size="icon"
              className="bg-white rounded-full shadow-md hover:bg-gray-50"
              onClick={goToPrevPage}
              aria-label="Previous page"
              disabled={isAnimating}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10">
            <Button
              variant="outline"
              size="icon"
              className="bg-white rounded-full shadow-md hover:bg-gray-50"
              onClick={goToNextPage}
              aria-label="Next page"
              disabled={isAnimating}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Logo grid with animation */}
          <div className="mx-12 overflow-hidden">
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out"
              style={{ 
                transform: `translateX(0%)`,
                opacity: isAnimating ? 0.5 : 1
              }}
            >
              {currentLogos.map((logo) => (
                <div 
                  key={logo.id} 
                  className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-40 transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-24 w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Page indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  currentPage === index ? "w-6 bg-primary" : "w-2 bg-gray-300"
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentPage(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                aria-label={`Go to page ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessProviders;
