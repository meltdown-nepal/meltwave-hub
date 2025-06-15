
import React from 'react';

const clientLogos = [{
  id: 1,
  src: "/lovable-uploads/Veda.png",
  alt: "Veda Logo"
}, {
  id: 2,
  src: "/lovable-uploads/Karobar.png",
  alt: "Karobar Logo"
}, {
  id: 3,
  src: "/lovable-uploads/naamche.png",
  alt: "Naamche Logo"
}, {
  id: 4,
  src: "/lovable-uploads/SecurityPal.png",
  alt: "SecurityPal Logo"
}, {
  id: 5,
  src: "/lovable-uploads/HimalayanJava.png",
  alt: "Himalayan Java Logo"
}, {
  id: 6,
  src: "/lovable-uploads/flextecs.png",
  alt: "FlexTecs Logo"
}, {
  id: 7,
  src: "/lovable-uploads/GolchhaGroup.png",
  alt: "Golchha Group Logo"
}, {
  id: 8,
  src: "/lovable-uploads/YoungInnovations.png",
  alt: "Young Innovations Logo"
}, {
  id: 9,
  src: "/lovable-uploads/leapfrog.png",
  alt: "Leapfrog Logo"
}, {
  id: 10,
  src: "/lovable-uploads/shanker.png",
  alt: "Shanker Logo"
}, {
  id: 11,
  src: "/lovable-uploads/KingsCollege.png",
  alt: "Kings College Logo"
}, {
  id: 12,
  src: "/lovable-uploads/ottr.png",
  alt: "Ottr Logo"
}, {
  id: 13,
  src: "/lovable-uploads/CodingMountain.png",
  alt: "Coding Mountain Logo"
}, {
  id: 14,
  src: "/lovable-uploads/JagadambaMotors.png",
  alt: "Jagadamba Motors Logo"
}, {
  id: 15,
  src: "/lovable-uploads/OwlDigital.png",
  alt: "Owl Digital Logo"
}, {
  id: 16,
  src: "/lovable-uploads/KavyaSports.png",
  alt: "Kavya Sports Logo"
}, {
  id: 17,
  src: "/lovable-uploads/Stalwart.png",
  alt: "Stalwart Logo"
}, {
  id: 18,
  src: "/lovable-uploads/e3eb0025-e6fd-41c8-8f07-efb1d04c635b.png",
  alt: "CloudFactory Logo"
}];

const EnhancedClientCarousel = () => {
  // Optimize by limiting visible logos for better performance
  const visibleLogos = clientLogos.slice(0, 12);
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
    img.style.opacity = '1';
  };

  return (
    <section className="py-8 bg-gradient-to-br from-primary/10 via-white to-secondary/10 overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8 py-[20px]">Trusted by Leading Companies</h3>
        <div className="relative">
          {/* Gradient edges for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white/60 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white/60 to-transparent pointer-events-none" />
          
          {/* Optimized scrolling container */}
          <div className="flex overflow-hidden">
            <div className="animate-seamless-scroll flex will-change-transform">
              {duplicatedLogos.map((logo, index) => (
                <div 
                  key={`${logo.id}-${index}`} 
                  className="logo-container flex-shrink-0 flex items-center justify-center px-6 py-4"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 md:h-20 w-auto max-w-[140px] md:max-w-[180px] object-contain transition-all duration-300 opacity-0"
                    width={180}
                    height={80}
                    loading={index > 8 ? 'lazy' : 'eager'}
                    decoding="async"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{ 
                      filter: 'brightness(0.9)',
                      transition: 'opacity 0.3s ease, filter 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'brightness(1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'brightness(0.9)';
                    }}
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
          animation: seamless-scroll 45s linear infinite;
          width: fit-content;
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
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

export default EnhancedClientCarousel;
