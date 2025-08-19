
import React from 'react';
import OptimizedImageV2 from './OptimizedImageV2';
import { IMAGE_REGISTRY } from '../utils/imageRegistry';

// Convert registry to array format for carousel
const clientLogos = Object.entries(IMAGE_REGISTRY.companies).map(([key, src], index) => ({
  id: index + 1,
  src,
  alt: `${key.charAt(0).toUpperCase() + key.slice(1)} Logo`
}));

const ClientLogoCarousel = () => {
  // Optimize by limiting visible logos
  const visibleLogos = clientLogos.slice(0, 20);
  const duplicatedLogos = [...visibleLogos, ...visibleLogos];

  return (
    <section className="py-8 bg-yellow-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Trusted By Companies</h3>
        <div className="relative">
          {/* Gradient edges for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-yellow-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-yellow-50 to-transparent pointer-events-none" />
          
          {/* Optimized scrolling container */}
          <div className="flex overflow-hidden">
            <div className="animate-seamless-scroll flex will-change-transform">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-6 py-4"
                >
                  <OptimizedImageV2
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 md:h-20 w-auto max-w-[140px] md:max-w-[180px] object-contain"
                    width={180}
                    height={80}
                    sizes="180px"
                    priority={index < 6}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS animation for seamless scrolling */}
      <style>{`
        @keyframes seamless-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .animate-seamless-scroll {
          animation: seamless-scroll 45s linear infinite;
          width: fit-content;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        .animate-seamless-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-seamless-scroll {
            animation-duration: 90s;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogoCarousel;
