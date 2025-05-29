
import React from 'react';

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
  // Duplicate logos to create seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];
  
  return (
    <section className="py-12 bg-yellow-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </div>
        
        <div className="relative">
          {/* Infinite scroll container */}
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-32 w-48 mx-3"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 w-auto max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
