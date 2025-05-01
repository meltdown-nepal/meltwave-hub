
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Play, Quote } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
    videoUrl: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4"
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
  const [isLoading, setIsLoading] = useState(false);

  const handleVideoClick = (videoUrl: string) => {
    setIsLoading(true);
    setSelectedVideo(videoUrl);
  };

  return (
    <section className="bg-gray-50 section-padding" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Hear from companies and employees who have experienced the Meltdown difference.
          </p>
        </div>

        {/* Desktop view (grid) */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-primary/20" />
                </div>
                <p className="text-lg font-medium mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                  {testimonial.videoUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2" 
                      onClick={() => testimonial.videoUrl && handleVideoClick(testimonial.videoUrl)}
                    >
                      <Play className="h-4 w-4" />
                      Watch Video
                    </Button>
                  )}
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
                <CarouselItem key={testimonial.id}>
                  <Card className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-primary/20" />
                      </div>
                      <p className="text-base font-medium mb-5">"{testimonial.quote}"</p>
                      <div className="flex flex-col gap-3">
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.title}</p>
                        </div>
                        {testimonial.videoUrl && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex items-center gap-2 w-full justify-center" 
                            onClick={() => testimonial.videoUrl && handleVideoClick(testimonial.videoUrl)}
                          >
                            <Play className="h-4 w-4" />
                            Watch Video
                          </Button>
                        )}
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
        <Dialog open={!!selectedVideo} onOpenChange={() => {
          setSelectedVideo(null);
          setIsLoading(false);
        }}>
          <DialogContent className="sm:max-w-4xl">
            {isLoading && <div className="flex justify-center items-center h-40">Loading video...</div>}
            {selectedVideo && (
              <video 
                src={selectedVideo}
                controls
                autoPlay
                className={`w-full ${isLoading ? 'hidden' : 'block'}`}
                onCanPlay={() => setIsLoading(false)}
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
