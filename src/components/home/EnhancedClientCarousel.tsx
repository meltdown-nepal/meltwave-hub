
import React from 'react';
import { IMAGE_REGISTRY } from '@/utils/imageRegistry';
import OptimizedImageV2 from '../OptimizedImageV2';

const EnhancedClientCarousel = () => {
  // Create company logos array from registry
  const companyLogos = Object.entries(IMAGE_REGISTRY.companies).map(([key, src], index) => ({
    id: index + 1,
    src,
    alt: key.replace(/([A-Z])/g, ' $1').trim() + ' Logo'
  }));

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...companyLogos, ...companyLogos];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies that have transformed their workplace wellness with Meltdown.
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container with CSS animation */}
          <div className="flex overflow-hidden">
            <div 
              className="flex will-change-transform"
              style={{
                animation: 'seamlessScroll 60s linear infinite',
                width: 'fit-content'
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div 
                  key={`${logo.id}-${index}`} 
                  className="flex-shrink-0 mx-6 md:mx-8 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <OptimizedImageV2
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-12 w-auto object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                    width={120}
                    height={48}
                    sizes="120px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for animation */}
      <style>{`
        @keyframes seamlessScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          [style*="seamlessScroll"] {
            animation-duration: 120s !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EnhancedClientCarousel;
