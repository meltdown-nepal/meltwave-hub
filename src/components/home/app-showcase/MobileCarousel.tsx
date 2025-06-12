
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import AnimatedElement from '../../animations/AnimatedElement';
import PhoneFrame from './PhoneFrame';
import { AppScreen } from './AppScreenData';

interface MobileCarouselProps {
  screens: AppScreen[];
}

const MobileCarousel: React.FC<MobileCarouselProps> = React.memo(({ screens }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="mb-12">
      <Carousel
        setApi={setApi}
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
      
      {/* Active Mobile indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {screens.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === current 
                ? 'bg-primary' 
                : 'bg-gray-300'
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

MobileCarousel.displayName = 'MobileCarousel';

export default MobileCarousel;
