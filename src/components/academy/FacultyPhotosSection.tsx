
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FacultyPhotosSection = () => {
  const facultyPhotos = [
    {
      name: "Aman Mishra",
      image: "/lovable-uploads/c5b9596c-52de-49eb-9686-9c3aca5ba4dc.png",
    },
    {
      name: "Anuraag Bhetwal", 
      image: "/lovable-uploads/6aaa40fe-cbaf-409f-9975-c38114ef82a8.png",
    },
    {
      name: "Karma C. Gurung",
      image: "/lovable-uploads/1a45a541-2db0-40e7-b036-41e0e08bb794.png",
    },
    {
      name: "Sanket Sapkota",
      image: "/lovable-uploads/e2198571-4415-4768-88a3-9a31b4627a79.png", 
    },
    {
      name: "Dr. Biplov Adhikari",
      image: "/lovable-uploads/25caa255-d3d2-4965-a9fb-b47a1176a006.png",
    },
    {
      name: "Faculty Member",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Faculty
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {facultyPhotos.map((faculty, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img 
                          src={faculty.image} 
                          alt={faculty.name}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Hover Effect Ring */}
                      <div className="absolute inset-0 ring-0 group-hover:ring-4 ring-primary/20 transition-all duration-300 rounded-2xl"></div>
                    </div>

                    {/* Optional Name Label (appears on hover) */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-semibold text-center text-sm">
                        {faculty.name}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12 space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default FacultyPhotosSection;
