
import React from 'react';
import OptimizedImage from './OptimizedImage';

const clientLogos = [
  { id: 1, src: "/lovable-uploads/Veda.png", alt: "Veda Logo" },
  { id: 2, src: "/lovable-uploads/Karobar.png", alt: "Karobar Logo" },
  { id: 3, src: "/lovable-uploads/naamche.png", alt: "Naamche Logo" },
  { id: 4, src: "/lovable-uploads/SecurityPal.png", alt: "SecurityPal Logo" },
  { id: 5, src: "/lovable-uploads/HimalayanJava.png", alt: "Himalayan Java Logo" },
  { id: 6, src: "/lovable-uploads/flextecs.png", alt: "FlexTecs Logo" },
  { id: 7, src: "/lovable-uploads/GolchhaGroup.png", alt: "Golchha Group Logo" },
  { id: 8, src: "/lovable-uploads/YoungInnovations.png", alt: "Young Innovations Logo" },
  { id: 9, src: "/lovable-uploads/leapfrog.png", alt: "Leapfrog Logo" },
  { id: 10, src: "/lovable-uploads/shanker.png", alt: "Shanker Logo" },
  { id: 11, src: "/lovable-uploads/KingsCollege.png", alt: "Kings College Logo" },
  { id: 12, src: "/lovable-uploads/ottr.png", alt: "Ottr Logo" }
];

const ClientLogoCarousel = () => {
  // Optimize by limiting visible logos
  const visibleLogos = clientLogos.slice(0, 12);
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
                  <OptimizedImage
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 md:h-20 w-auto max-w-[140px] md:max-w-[180px] object-contain"
                    width={180}
                    height={80}
                    lazy={index > 6}
                    sizes="180px"
                    quality="medium"
                    responsive={false}
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
