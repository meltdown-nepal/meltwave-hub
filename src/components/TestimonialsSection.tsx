
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
    <section className="bg-gradient-to-br from-yellow-50 to-gray-50 section-padding" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-amber-100 rounded-full text-amber-700 font-medium text-sm">TESTIMONIALS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from companies and employees who have experienced the Meltdown difference.
          </p>
        </div>

        {/* Desktop view (grid) */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0"
            >
              <CardContent className="p-8 relative">
                <div className="absolute -left-3 -top-3 text-primary opacity-20">
                  <Quote size={60} />
                </div>
                <div className="relative z-10">
                  <p className="text-lg font-medium mb-8 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                    {testimonial.videoUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2 border-amber-300 hover:bg-amber-50 text-amber-700" 
                        onClick={() => testimonial.videoUrl && handleVideoClick(testimonial.videoUrl)}
                      >
                        <Play className="h-4 w-4" />
                        Watch Video
                      </Button>
                    )}
                  </div>
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
                  <Card className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0">
                    <CardContent className="p-6 relative">
                      <div className="absolute -left-2 -top-2 text-primary opacity-20">
                        <Quote size={40} />
                      </div>
                      <div className="relative z-10">
                        <p className="text-base font-medium mb-5 italic">"{testimonial.quote}"</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-white font-bold">
                              {testimonial.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-bold">{testimonial.name}</p>
                              <p className="text-sm text-gray-600">{testimonial.title}</p>
                            </div>
                          </div>
                          {testimonial.videoUrl && (
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="flex items-center gap-2 border-amber-300 hover:bg-amber-50 text-amber-700" 
                              onClick={() => testimonial.videoUrl && handleVideoClick(testimonial.videoUrl)}
                            >
                              <Play className="h-4 w-4" />
                              Watch Video
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static transform-none mx-2 bg-white hover:bg-amber-50 border-amber-200" />
              <CarouselNext className="static transform-none mx-2 bg-white hover:bg-amber-50 border-amber-200" />
            </div>
          </Carousel>
        </div>

        {/* Video Dialog */}
        <Dialog open={!!selectedVideo} onOpenChange={() => {
          setSelectedVideo(null);
          setIsLoading(false);
        }}>
          <DialogContent className="sm:max-w-4xl p-1 sm:p-2 bg-black rounded-lg border-none">
            {isLoading && (
              <div className="flex justify-center items-center h-40 text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
              </div>
            )}
            {selectedVideo && (
              <video 
                src={selectedVideo}
                controls
                autoPlay
                className={`w-full rounded-lg ${isLoading ? 'hidden' : 'block'}`}
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
