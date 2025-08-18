
import React from 'react';
import OptimizedImageV2 from '../OptimizedImageV2';
import { IMAGE_REGISTRY } from '../../utils/imageRegistry';

// Convert registry to array format for carousel
const clientLogos = Object.entries(IMAGE_REGISTRY.companies).map(([key, src], index) => ({
  id: index + 1,
  src,
  alt: `${key.charAt(0).toUpperCase() + key.slice(1)} Logo`
}));

const EnhancedClientCarousel = () => {
  // Show all logos instead of limiting to 12
  const visibleLogos = clientLogos;
  const duplicatedLogos = [...visibleLogos, ...visibleLogos];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    console.warn(`Failed to load client company image: ${img.src}`);
    // Hide the image container if it fails to load
    const container = img.closest('.logo-container');
    if (container) {
      (container as HTMLElement).style.display = 'none';
    }
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    console.log(`✅ Client company image loaded: ${img.src}`);
  };

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8 py-[20px]">Trusted by Leading Companies</h3>
        <div className="relative">
          {/* Gradient edges for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          
          {/* Optimized scrolling container */}
          <div className="flex overflow-hidden">
            <div className="animate-seamless-scroll flex will-change-transform">
              {duplicatedLogos.map((logo, index) => (
                <div 
                  key={`${logo.id}-${index}`} 
                  className="logo-container flex-shrink-0 flex items-center justify-center px-6 py-4 bg-white rounded-lg shadow-sm mx-2"
                >
                  <OptimizedImageV2
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 md:h-20 w-auto max-w-[140px] md:max-w-[180px] object-contain"
                    width={180}
                    height={80}
                    priority={index < 8}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Optimized CSS animation for better performance */}
      <style>{`
        @keyframes seamless-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .animate-seamless-scroll {
          animation: seamless-scroll 60s linear infinite;
          width: fit-content;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
          transform: translateZ(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-seamless-scroll {
            animation-duration: 120s;
          }
        }
      `}</style>
    </section>
  );
};

export default EnhancedClientCarousel;
