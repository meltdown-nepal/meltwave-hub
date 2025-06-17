
import React, { useState, useEffect } from 'react';
import { appScreens } from '@/components/home/app-showcase/AppScreenData';
import { ScrollArea } from '@/components/ui/scroll-area';
import OptimizedImage from '../OptimizedImage';
import { useIsMobile } from '@/hooks/use-mobile';

const AppScreenShowcase: React.FC = () => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isMobile = useIsMobile();

  // Debug logging
  useEffect(() => {
    console.log('🖼️ Corporate AppScreenShowcase mounted');
    console.log('📱 Available screens:', appScreens.length);
    console.log('📱 Current screen:', appScreens[currentScreenIndex]);
  }, []);

  useEffect(() => {
    console.log('🔄 Corporate screen changed to:', appScreens[currentScreenIndex]);
  }, [currentScreenIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentScreenIndex(prevIndex => (prevIndex + 1) % appScreens.length);
        setIsTransitioning(false);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, [appScreens.length]);

  const currentScreen = appScreens[currentScreenIndex];

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center">
        {/* iPhone Frame - Fixed */}
        <div className={`
          relative bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-1.5 sm:p-2 transition-all duration-500 transform hover:-translate-y-2
          ${isMobile ? 'w-80 mx-auto' : 'w-40 sm:w-52 md:w-64 lg:w-72'}
          shadow-2xl shadow-gray-400/20 hover:shadow-gray-400/40 hover:shadow-3xl
        `}>
          {/* iPhone Screen with Dynamic Island */}
          <div className="bg-black rounded-[1.7rem] sm:rounded-[2.7rem] p-0.5 sm:p-1 relative overflow-hidden">
            {/* Screen Content Area */}
            <div className="bg-white rounded-[1.4rem] sm:rounded-[2.4rem] overflow-hidden aspect-[9/19.5] relative">
              {/* Dynamic Island */}
              <div className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-28 h-4 sm:h-5 md:h-6 lg:h-7 bg-black rounded-full z-30"></div>
              
              {/* App Screen Content - Only this transitions */}
              <div className="h-full w-full">
                <div className={`transition-opacity duration-250 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                  {currentScreen.hasLongContent ? (
                    <ScrollArea className="h-full w-full">
                      <div className="relative">
                        <OptimizedImage 
                          src={currentScreen.image} 
                          alt={currentScreen.title} 
                          className="w-full h-auto object-cover object-top min-h-full" 
                          priority={currentScreenIndex === 0} 
                          width={currentScreen.width} 
                          height={currentScreen.height} 
                        />
                        {/* Scroll indicator for long content */}
                        <div className="absolute bottom-2 right-2 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white/80 pointer-events-none">
                          Scroll ↕
                        </div>
                      </div>
                    </ScrollArea>
                  ) : (
                    <OptimizedImage 
                      src={currentScreen.image} 
                      alt={currentScreen.title} 
                      className="w-full h-full object-cover object-top" 
                      priority={currentScreenIndex === 0} 
                      width={currentScreen.width} 
                      height={currentScreen.height} 
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-28 md:w-32 lg:w-36 h-0.5 sm:h-1 bg-gray-600 rounded-full"></div>
        </div>

        {/* Screen Labels - Also transitions */}
        <div className={`text-center mt-3 sm:mt-4 md:mt-6 space-y-1 px-1 transition-opacity duration-250 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg">
            {currentScreen.title}
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600">
            {currentScreen.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppScreenShowcase;
