import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Testimonial = {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
  videoUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "HR Director, TechCorp",
    quote: "Since implementing Meltdown's wellness program, we've seen a 30% decrease in employee sick days.",
    image: "/lovable-uploads/8a26d6be-3e65-4d47-9d5d-3fcaa609641a.png",
    videoUrl: "/lovable-uploads/hello.mp4"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Software Engineer",
    quote: "The MeltFit training program has transformed how I approach wellness. I've never felt better.",
    image: "/lovable-uploads/8c61e61c-2c08-4a78-8212-aaef826700a5.png",
  },
  {
    id: 3,
    name: "Amara Patel",
    title: "Wellness Provider",
    quote: "Partnering with Meltdown has allowed our yoga studio to reach corporate clients we never had access to before.",
    image: "/lovable-uploads/f9bf14a9-e727-494e-80d5-a6dd6927a72d.png",
  },
  {
    id: 4,
    name: "David Rodriguez",
    title: "Fitness Trainer",
    quote: "Meltdown's platform has helped me connect with companies looking for wellness programs.",
    image: "/lovable-uploads/2b7bb71f-9aea-436e-9865-e6990877f6c0.png",
  }
];

const TestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="bg-gray-50 section-padding" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Hear from companies and employees who have experienced the Meltdown difference through video testimonials.
          </p>
        </div>

        {/* Desktop view (grid) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} testimonial`} 
                    className="w-full h-full object-cover"
                  />
                  {testimonial.videoUrl && (
                    <div 
                      className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      onClick={() => setSelectedVideo(testimonial.videoUrl!)}
                    >
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <CardContent className="p-5">
                <p className="font-medium mb-3 line-clamp-2">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile view (carousel) */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <div className="relative">
                      <div className="aspect-video bg-gray-200 relative overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.name} testimonial`} 
                          className="w-full h-full object-cover"
                        />
                        {testimonial.videoUrl && (
                          <div 
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer"
                            onClick={() => setSelectedVideo(testimonial.videoUrl!)}
                          >
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                              <Play className="h-8 w-8 text-white ml-1" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <p className="font-medium mb-3 line-clamp-2">"{testimonial.quote}"</p>
                      <div className="mt-4">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>

        {/* Video Dialog */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="sm:max-w-4xl">
            {selectedVideo && (
              <video 
                src={selectedVideo}
                controls
                autoPlay
                className="w-full"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TestimonialsSection;
