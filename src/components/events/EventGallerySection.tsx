import React, { useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import OptimizedImage from "@/components/OptimizedImage";

const GALLERY_IMAGES = [
  {
    src: "/lovable-uploads/16e392a3-04e0-4afa-bbb8-eaa8106a7921.png",
    alt: "Group of runners in front of Bikers Cafe",
  },
  {
    src: "/lovable-uploads/29ca3ed5-dbd0-459c-b2aa-4c6dfe147b31.png",
    alt: "Java Run Venture 2025 team photo",
  },
  {
    src: "/lovable-uploads/8f150027-05f4-49c2-88d6-be3a51dd5516.png",
    alt: "Happy runners with mugs - community event",
  },
  {
    src: "/lovable-uploads/77b1b30c-adbf-4791-b5d8-a5b01c5148ae.png",
    alt: "Runners on the road smiling",
  },
  {
    src: "/lovable-uploads/3e239558-9215-4fed-8fa9-829ba807d03a.png",
    alt: "Large group event photo outside building",
  },
  {
    src: "/lovable-uploads/9d63cc3b-f3f0-4caf-91b3-ac03864e65b9.png",
    alt: "Participants holding up time cards",
  },
  {
    src: "/lovable-uploads/85497cd9-96a2-4d76-8e8b-ea8d9141289d.png",
    alt: "Two men and one woman running and smiling",
  },
  {
    src: "/lovable-uploads/881bc0ab-6a86-4ea3-8844-3d9ba26a499d.png",
    alt: "Group hiking with friendly dogs in forest",
  },
  {
    src: "/lovable-uploads/6fcc2b3e-7d56-49ac-8ac9-5acf5e02a272.png",
    alt: "Friends and dogs in a pine forest hike",
  },

  {
    src: "/lovable-uploads/36a51c8f-0e5f-4ffd-a4a3-36a65581da75.png",
    alt: "Winning team of HikeVenture holding prize cheque outdoors",
  },
  {
    src: "/lovable-uploads/99eba442-8cbe-4268-9a96-c8425840c696.png",
    alt: "Group exercise and warmup in an urban park setting",
  },
  {
    src: "/lovable-uploads/39174078-db03-4dd7-b925-87ea281aad10.png",
    alt: "Large group photo at a traditional pavilion after group run",
  },
  {
    src: "/lovable-uploads/ebf6202c-c49e-4c31-8ee7-1f50a0a5af9b.png",
    alt: "Smiling women athletes group at stadium with blue sky",
  },
  {
    src: "/lovable-uploads/1a1bfbc7-ce57-4f8c-a711-36e49a80401a.png",
    alt: "Participants holding up time cards with fun captions at event",
  },
];

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
  // Shuffle images only once per mount
  const shuffledImages = useMemo(() => shuffleArray(GALLERY_IMAGES), []);

  return (
    <section id={SECTION_ID} className="bg-white section-padding">
      <div className="container-custom">
        <div className="mb-8 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">Event Gallery</h3>
          <p className="text-lg text-muted-foreground">Swipe through our recent event memories!</p>
        </div>
        <Carousel opts={{ align: "start" }}>
          <CarouselContent className="pl-0 md:pl-4">
            {shuffledImages.map((img) => (
              <CarouselItem
                key={img.src}
                className="basis-11/12 md:basis-1/4 px-2"
              >
                <div className="rounded-lg overflow-hidden hover-scale shadow-lg transition-all duration-300 group cursor-pointer aspect-[3/4] bg-gray-100 flex items-center justify-center">
                  <OptimizedImage
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={450}
                    height={600}
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
