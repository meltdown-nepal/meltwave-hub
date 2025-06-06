import React from 'react';
import AnimatedElement from '../animations/AnimatedElement';
import OptimizedImage from '../OptimizedImage';

const AppShowcaseSection = () => {
  const appScreens = [{
    title: "Home Dashboard",
    description: "Track wellness activities",
    image: "/lovable-uploads/33b2e788-a176-4fa8-8124-3adda728964c.png",
    delay: 0.2
  }, {
    title: "Check-In Page",
    description: "QR code check-ins",
    image: "/lovable-uploads/081c2c6b-718f-4df8-b382-b6baede4a142.png",
    delay: 0.4
  }, {
    title: "Leaderboard",
    description: "Company rankings",
    image: "/lovable-uploads/303ad8cd-17b7-4df9-8686-f36a708f98c8.png",
    delay: 0.6
  }];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white" id="app-showcase">
      <div className="container-custom">
        <div className="text-center mb-16">
          <AnimatedElement animation="slideUp" delay={0.1}>
            <div className="inline-block mb-4 px-6 py-2 bg-primary/20 rounded-full text-primary font-medium text-sm">
              MOBILE APP
            </div>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Wellness in Your Pocket
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.3}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience seamless wellness management with our intuitive mobile app designed for modern lifestyles.
            </p>
          </AnimatedElement>
        </div>

        {/* iPhone 16 Mockups */}
        <div className="flex justify-center items-end gap-4 md:gap-8 max-w-4xl mx-auto">
          {appScreens.map((screen, index) => (
            <AnimatedElement key={index} animation="slideUp" delay={screen.delay} className="flex flex-col items-center">
              {/* iPhone 16 Frame */}
              <div className={`
                relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2
                ${index === 1 ? 'scale-110 z-10' : 'scale-100'}
                w-48 md:w-56
              `}>
                {/* iPhone 16 Screen with Dynamic Island */}
                <div className="bg-black rounded-[2.7rem] p-1 relative overflow-hidden">
                  {/* Screen Content Area - Full Height */}
                  <div className="bg-white rounded-[2.4rem] overflow-hidden aspect-[9/19.5] relative">
                    {/* Dynamic Island - Positioned on top of content */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>
                    
                    {/* App Screen Content - Starts from top */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="h-full overflow-y-auto scrollbar-hide">
                        <OptimizedImage 
                          src={screen.image} 
                          alt={screen.title} 
                          className="w-full min-h-full object-cover object-top" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
              </div>

              {/* Screen Labels */}
              <div className="text-center mt-6 space-y-1">
                <h3 className="font-bold text-gray-900 text-sm md:text-base">{screen.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{screen.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedElement animation="slideUp" delay={0.8}>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Available on iOS and Android</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
