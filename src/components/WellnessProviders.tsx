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
  return <div>
      <section className="bg-gradient-to-b from-primary/20 to-white py-[8px]">
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
            {/* Scrolling container with CSS animation */}
            <div className="flex overflow-hidden">
              <div className="flex will-change-transform" style={{
              animation: 'smoothScroll 40s linear infinite',
              width: 'fit-content'
            }}>
                {duplicatedLogos.map((logo, index) => <div key={`${logo.id}-${index}`} className="flex-shrink-0 mx-4 md:mx-6 h-20 flex items-center justify-center">
                    <OptimizedImageV2 src={logo.src} alt={logo.alt} className="max-h-20 w-auto object-contain" width={200} height={80} sizes="200px" />
                  </div>)}
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
              animation-duration: 80s !important;
            }
          }
        `}</style>
      </section>
    </div>;
};
export default WellnessProviders;