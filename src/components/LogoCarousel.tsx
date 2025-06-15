import React from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from './OptimizedImage';

interface Logo {
  id: number;
  src: string;
  alt: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  title: string;
  description?: string;
  showViewAllButton?: boolean;
  viewAllLink?: string;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ 
  logos, 
  title, 
  description, 
  showViewAllButton = false,
  viewAllLink = "/wellness-partners"
}) => {
  // Optimize carousel - only show first set + buffer for smooth animation
  const visibleLogos = logos.slice(0, Math.min(logos.length, 12));
  const duplicatedLogos = [...visibleLogos, ...visibleLogos];
  
  return (
    <section className="py-12 bg-yellow-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="text-center flex-1">
            <h2 className="text-2xl font-bold mb-3">{title}</h2>
            {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
          </div>
          {showViewAllButton && (
            <div className="flex-shrink-0 ml-4">
              <Link 
                to={viewAllLink}
                className="bg-primary hover:bg-primary/90 text-black font-medium px-6 py-2 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                View All
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-arrow-right">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          )}
        </div>
        
        <div className="relative">
          {/* Optimized infinite scroll container */}
          <div className="flex animate-scroll will-change-transform">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 bg-white p-4 rounded-xl shadow-sm flex items-center justify-center h-24 w-40 mx-2"
              >
                <OptimizedImage
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 w-auto max-w-full object-contain"
                  width={120}
                  height={48}
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optimized CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
