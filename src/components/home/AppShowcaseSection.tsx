import React from 'react';
import AnimatedElement from '../animations/AnimatedElement';
import OptimizedImage from '../OptimizedImage';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from '@/hooks/use-mobile';
const AppShowcaseSection = () => {
  const isMobile = useIsMobile();
  const appScreens = [{
    title: "QR Check-In",
    description: "Seamless venue check-ins",
    image: "/lovable-uploads/21d6ca4c-f8c6-4f3f-8c3c-c89e33b30336.png",
    delay: 0.2,
    width: 390,
    height: 844
  }, {
    title: "Home Dashboard",
    description: "Track wellness activities",
    image: "/lovable-uploads/6cf5f012-a60b-418a-ba5b-663fb433031e.png",
    delay: 0.4,
    width: 390,
    height: 844
  }, {
    title: "Leaderboard",
    description: "Company rankings",
    image: "/lovable-uploads/d5b9dd6b-642a-4e42-88c7-ea8e6d21c8bc.png",
    delay: 0.6,
    width: 390,
    height: 844
  }, {
    title: "Profile Dashboard",
    description: "Track your CO₂ savings & impact",
    image: "/lovable-uploads/c291677f-694d-4b7d-9563-e8a6c0af5e61.png",
    delay: 0.8,
    width: 390,
    height: 844
  }];
  const renderPhoneScreen = (screen: typeof appScreens[0], index: number) => <div className="flex flex-col items-center flex-shrink-0">
      {/* iPhone Frame */}
      <div className={`
        relative bg-gray-900 rounded-[2rem] sm:rounded-[3rem] p-1.5 sm:p-2 transition-all duration-500 transform hover:-translate-y-2
        ${isMobile ? 'w-56 mx-auto' : 'w-32 sm:w-40 md:w-48 lg:w-56'}
        shadow-2xl shadow-yellow-400/20 hover:shadow-yellow-400/40 hover:shadow-3xl
      `}>
        {/* iPhone Screen with Dynamic Island */}
        <div className="bg-black rounded-[1.7rem] sm:rounded-[2.7rem] p-0.5 sm:p-1 relative overflow-hidden">
          {/* Screen Content Area - Full Height with Scroll, starting from top */}
          <div className="bg-black rounded-[1.4rem] sm:rounded-[2.4rem] overflow-hidden aspect-[9/19.5] relative">
            {/* Dynamic Island - Positioned on top of content */}
            <div className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 h-4 sm:h-5 md:h-6 bg-black rounded-full z-30"></div>
            
            {/* App Screen Content - Scrollable from top */}
            <ScrollArea className="h-full w-full">
              <div className="h-full">
                <OptimizedImage src={screen.image} alt={screen.title} className="w-full h-auto object-cover object-top min-h-full" priority={index === 0} width={screen.width} height={screen.height} />
              </div>
            </ScrollArea>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-28 md:w-32 h-0.5 sm:h-1 bg-gray-600 rounded-full"></div>
      </div>

      {/* Screen Labels */}
      <div className="text-center mt-3 sm:mt-4 md:mt-6 space-y-1 px-1">
        <h3 className="font-semibold text-gray-900">
          {screen.title}
        </h3>
        <p className="text-sm text-gray-600">
          {screen.description}
        </p>
      </div>
    </div>;
  return <section className="section-padding bg-gradient-to-br from-gray-50 to-white" id="app-showcase">
      
    </section>;
};
export default AppShowcaseSection;