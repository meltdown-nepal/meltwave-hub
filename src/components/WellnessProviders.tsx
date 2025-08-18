
import React from 'react';
import { IMAGE_REGISTRY } from '../utils/imageRegistry';
import OptimizedImageV2 from '../components/OptimizedImageV2';

const wellnessLogos = Object.entries(IMAGE_REGISTRY.wellnessProviders).map(([key, src], index) => ({
  id: index + 1,
  src,
  alt: key.replace(/([A-Z])/g, ' $1').trim()
}));

const WellnessProviders = () => {
  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...wellnessLogos, ...wellnessLogos];

  return (
    <div>
      <section className="py-20 bg-gradient-to-b from-primary/20 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Wellness Providers
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Discover our network of premium wellness partners committed to helping you achieve your health goals.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling container with CSS animation */}
            <div className="flex overflow-hidden">
              <div 
                className="flex will-change-transform" 
                style={{
                  animation: 'smoothScroll 80s linear infinite',
                  width: 'fit-content'
                }}
              >
                {duplicatedLogos.map((logo, index) => (
                  <div 
                    key={`${logo.id}-${index}`} 
                    className="flex-shrink-0 mx-8 md:mx-10 h-20 flex items-center justify-center"
                  >
                    <OptimizedImageV2 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="max-h-16 w-auto object-contain" 
                      width={160} 
                      height={64} 
                      sizes="160px" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CSS for smooth animation */}
        <style>{`
          @keyframes smoothScroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          
          @media (prefers-reduced-motion: reduce) {
            [style*="smoothScroll"] {
              animation-duration: 160s !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default WellnessProviders;
