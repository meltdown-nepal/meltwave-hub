
import React from 'react';
import AnimatedElement from '../animations/AnimatedElement';
import OptimizedImage from '../OptimizedImage';
import { useIsMobile } from '@/hooks/use-mobile';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const AppShowcaseSection = () => {
  const isMobile = useIsMobile();
  
  const appScreens = [{
    title: "Home Dashboard",
    description: "Track wellness activities",
    image: "/lovable-uploads/cb77fb1c-31c1-4d8b-a847-ec0e19c72cc3.png",
    delay: 0.2,
    width: 390,
    height: 844,
    hasLongContent: true
  }, {
    title: "QR Check-In",
    description: "Seamless venue check-ins",
    image: "/lovable-uploads/ae12e042-70fd-4d39-84e7-1d419fc5a18d.png",
    delay: 0.4,
    width: 390,
    height: 844,
    hasLongContent: false
  }, {
    title: "Leaderboard",
    description: "Company rankings",
    image: "/lovable-uploads/1afeb7f0-633e-4f9d-8c6a-7c3ce21c9c97.png",
    delay: 0.6,
    width: 390,
    height: 844,
    hasLongContent: true
  }, {
    title: "Profile Dashboard",
    description: "Track your CO₂ savings & impact",
    image: "/lovable-uploads/6bfb027a-b127-4050-97d6-30abfb2b2565.png",
    delay: 0.8,
    width: 390,
    height: 844,
    hasLongContent: true
  }];

  const renderPhoneScreen = (screen: typeof appScreens[0], index: number) => {
    console.log(`Rendering phone screen: ${screen.title} with image: ${screen.image}`);
    
    return (
      <div className="flex flex-col items-center">
        {/* iPhone Frame */}
        <div className={`
          relative bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-1.5 sm:p-2 transition-all duration-500 transform hover:-translate-y-2
          ${isMobile ? 'w-64 mx-auto' : 'w-32 sm:w-40 md:w-48 lg:w-52'}
          shadow-2xl shadow-gray-400/20 hover:shadow-gray-400/40 hover:shadow-3xl
        `}>
          {/* iPhone Screen with Dynamic Island */}
          <div className="bg-black rounded-[1.7rem] sm:rounded-[2.7rem] p-0.5 sm:p-1 relative overflow-hidden">
            {/* Screen Content Area */}
            <div className="bg-white rounded-[1.4rem] sm:rounded-[2.4rem] overflow-hidden aspect-[9/19.5] relative">
              {/* Dynamic Island */}
              <div className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-4 sm:h-5 md:h-6 bg-black rounded-full z-30"></div>
              
              {/* App Screen Content */}
              <div className="h-full w-full">
                {screen.hasLongContent ? (
                  <ScrollArea className="h-full w-full">
                    <OptimizedImage 
                      src={screen.image} 
                      alt={screen.title} 
                      className="w-full h-auto object-cover object-top min-h-full" 
                      priority={index === 0} 
                      width={screen.width} 
                      height={screen.height} 
                      lazy={false}
                    />
                  </ScrollArea>
                ) : (
                  <OptimizedImage 
                    src={screen.image} 
                    alt={screen.title} 
                    className="w-full h-full object-cover object-top" 
                    priority={index === 0} 
                    width={screen.width} 
                    height={screen.height} 
                    lazy={false}
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-28 md:w-32 h-0.5 sm:h-1 bg-gray-600 rounded-full"></div>
        </div>

        {/* Screen Labels */}
        <div className="text-center mt-3 sm:mt-4 md:mt-6 space-y-1 px-1">
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
            {screen.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            {screen.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white py-[60px]" id="app-showcase">
      <div className="container-custom">
        <AnimatedElement animation="slideUp" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MOBILE APP
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Wellness in Your Pocket
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience seamless wellness management with our intuitive mobile app designed for modern lifestyles and environmental consciousness.
            </p>
          </div>
        </AnimatedElement>

        {/* Mobile App Screens - Mobile Carousel vs Desktop Grid */}
        {isMobile ? (
          <div className="mb-12">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {appScreens.map((screen, index) => (
                  <CarouselItem key={screen.title} className="pl-2 md:pl-4 basis-full">
                    <AnimatedElement animation="slideUp" delay={screen.delay}>
                      {renderPhoneScreen(screen, index)}
                    </AnimatedElement>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            
            {/* Mobile indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {appScreens.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300"
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {appScreens.map((screen, index) => (
              <AnimatedElement key={screen.title} animation="slideUp" delay={screen.delay}>
                {renderPhoneScreen(screen, index)}
              </AnimatedElement>
            ))}
          </div>
        )}

        {/* App Store Buttons */}
        <AnimatedElement>
          <div className="text-center">
            <p className="text-gray-600 mb-6">Available on iOS and Android</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://apps.apple.com/np/app/meltdown-nepal/id6445954625" 
                className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.corewalkers.meltdown&hl=en" 
                className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
