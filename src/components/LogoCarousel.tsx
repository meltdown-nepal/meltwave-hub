
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Logo {
  id: number;
  src: string;
  alt: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  title: string;
  description?: string;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos, title, description }) => {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(0);
  
  // Determine items per row based on screen size
  let itemsPerRow = 4; // desktop default
  if (isMobile) {
    itemsPerRow = 1;
  } else if (window.innerWidth < 1024) {
    itemsPerRow = 2;
  }
  
  // Calculate total number of pages
  const totalPages = Math.ceil(logos.length / itemsPerRow);
  
  // Get current page of logos
  const currentLogos = logos.slice(
    currentPage * itemsPerRow,
    (currentPage + 1) * itemsPerRow
  );
  
  // Navigation handlers
  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };
  
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };
  
  return (
    <section className="py-12 bg-yellow-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
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
                opacity: 1
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
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
