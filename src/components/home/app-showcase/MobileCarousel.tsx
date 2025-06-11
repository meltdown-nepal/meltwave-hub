
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import AnimatedElement from '../../animations/AnimatedElement';
import PhoneFrame from './PhoneFrame';
import { AppScreen } from './AppScreenData';

interface MobileCarouselProps {
  screens: AppScreen[];
}

const MobileCarousel: React.FC<MobileCarouselProps> = ({ screens }) => {
  return (
    <div className="mb-12">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {screens.map((screen, index) => (
            <CarouselItem key={screen.title} className="pl-2 md:pl-4 basis-full">
              <AnimatedElement animation="slideUp" delay={screen.delay}>
                <PhoneFrame screen={screen} index={index} />
              </AnimatedElement>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
      
      {/* Mobile indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {screens.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300"
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;
