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
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Wellness Network</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These amazing gyms, studios, and wellness centers help power the Meltdown experience.
            </p>
          </div>

          <div className="relative">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling container with CSS animation */}
            <div className="flex overflow-hidden">
              <div 
                className="flex will-change-transform"
                style={{
                  animation: 'seamlessScroll 45s linear infinite',
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
              animation-duration: 90s !important;
            }
          }
        `}</style>
      </section>
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Join Our Provider Network</h2>
              <p className="mb-6">
                Partner with Meltdown to grow your business and connect with new clients passionate about wellness.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Increase your visibility and client base</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Access our corporate wellness programs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Streamline operations with our management tools</span>
                </li>
              </ul>
              <a href="/providers" className="btn-primary">Become a Provider</a>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Provider Benefits</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-bold">Enhanced Visibility</h4>
                  <p className="text-sm">Reach thousands of potential clients through our platform.</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-bold">Corporate Partnerships</h4>
                  <p className="text-sm">Connect with our corporate clients for recurring business.</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-bold">Simple Onboarding</h4>
                  <p className="text-sm">Join our network in just a few simple steps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessProviders;
