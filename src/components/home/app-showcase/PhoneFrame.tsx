
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import OptimizedImage from '../../OptimizedImage';
import { useIsMobile } from '@/hooks/use-mobile';
import { AppScreen } from './AppScreenData';

interface PhoneFrameProps {
  screen: AppScreen;
  index: number;
}

const PhoneFrame: React.FC<PhoneFrameProps> = React.memo(({ screen, index }) => {
  const isMobile = useIsMobile();
  
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
                  <div className="relative">
                    <OptimizedImage 
                      src={screen.image} 
                      alt={screen.title} 
                      className="w-full h-auto object-cover object-top min-h-full" 
                      priority={index === 0} 
                      width={screen.width} 
                      height={screen.height} 
                      lazy={false}
                    />
                    {/* Scroll indicator for long content */}
                    <div className="absolute bottom-2 right-2 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white/80 pointer-events-none">
                      Scroll ↕
                    </div>
                  </div>
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
        {screen.hasLongContent && (
          <p className="text-xs text-gray-500 italic">
            Scrollable content
          </p>
        )}
      </div>
    </div>
  );
});

PhoneFrame.displayName = 'PhoneFrame';

export default PhoneFrame;
