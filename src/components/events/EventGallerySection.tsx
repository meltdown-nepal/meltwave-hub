
import React, { useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import OptimizedImageV2 from "@/components/OptimizedImageV2";
import { useGalleryImagePreloader } from "@/hooks/useGalleryImagePreloader";
import { IMAGE_REGISTRY } from "@/utils/imageRegistry";

const SECTION_ID = "event-gallery";

// Simple Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function EventGallerySection() {
  // Convert image paths to objects with alt text
  const galleryImages = IMAGE_REGISTRY.eventGallery.map((src, index) => ({
    src,
    alt: `Event gallery image ${index + 1} - Community wellness activities`
  }));

  // Shuffle images only once per mount
  const shuffledImages = useMemo(() => shuffleArray(galleryImages), []);
  
  // Preload all images for smoother UX
  useGalleryImagePreloader(
    shuffledImages.map(img => ({
      src: img.src
    })),
    true // enable preloading
  );

  return (
    <section id={SECTION_ID} className="bg-white section-padding">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <h3 className="text-2xl mb-2 font-extrabold md:text-4xl">Event Gallery</h3>
          <p className="text-lg text-muted-foreground">Swipe through our recent event memories!</p>
        </div>
        <Carousel opts={{
          align: "start"
        }}>
          <CarouselContent className="pl-0 md:pl-4">
            {shuffledImages.map((img, index) => (
              <CarouselItem key={img.src} className="basis-11/12 md:basis-1/4 px-2">
                <div className="rounded-lg overflow-hidden hover-scale shadow-lg transition-all duration-300 group cursor-pointer aspect-[3/4] bg-gray-100 flex items-center justify-center">
                  <OptimizedImageV2 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    width={450} 
                    height={600}
                    priority={index < 4}
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 25vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious aria-label="Previous images" />
          <CarouselNext aria-label="Next images" />
        </Carousel>
      </div>
    </section>
  );
}
