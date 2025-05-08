
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type TestimonialProp = {
  videoSrc?: string;
  title: string;
  name: string;
  role?: string;
  image?: string;
  linkTo?: string;
};

interface TestimonialsSectionProps {
  testimonials: TestimonialProp[];
  title?: string;
  subtitle?: string;
}

const defaultTestimonials = [{
  id: 1,
  name: "Jyoti Pokharel",
  title: "Meltdown has brought a jolly spirit to our workplace, making every day feel more positive and energizing.",
  role: "",
  image: "/lovable-uploads/8a26d6be-3e65-4d47-9d5d-3fcaa609641a.png",
  linkTo: "https://www.instagram.com/p/DFP4tBFTzbC/"
}, {
  id: 2,
  name: "Bibha Tandukar",
  title: "I used to lack motivation and dread going to the same fitness center, but Meltdown completely changed that with its uplifting vibe.",
  role: "Project Manager,Young Innovation",
  image: "/lovable-uploads/8c61e61c-2c08-4a78-8212-aaef826700a5.png",
  linkTo: "https://www.instagram.com/p/DG-wZ4HIpLs/"
}, {
  id: 3,
  name: "Pabin Karki",
  title: "Meltdown's fresh approach to the fitness market and its diverse features have reignited my motivation.",
  role: "CEO, Kaya Sports",
  image: "/lovable-uploads/f9bf14a9-e727-494e-80d5-a6dd6927a72d.png",
  videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  linkTo: "https://www.instagram.com/p/DGa0GjtzQCn/"
}, {
  id: 4,
  name: "Jagadamba Team",
  title: "Meltdown's workshops have transformed my daily routine and made me significantly more active.",
  role: "Jagadamba Motors",
  image: "/lovable-uploads/2b7bb71f-9aea-436e-9865-e6990877f6c0.png",
  videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  linkTo: "/events"
}];

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
  title = "What Our Clients Say",
  subtitle = "Hear from companies and employees who have experienced the Meltdown difference."
}: TestimonialsSectionProps) => {
  return <section className="bg-gradient-to-br from-yellow-50 to-gray-50 section-padding" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-amber-100 rounded-full text-amber-700 font-medium text-sm">TESTIMONIALS</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Desktop view (grid) */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => <Card key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0">
              <CardContent className="p-8 relative">
                <div className="absolute -left-3 -top-3 text-primary opacity-20">
                  <Quote size={60} />
                </div>
                <div className="relative z-10">
                  <p className="text-lg font-medium mb-8 italic">"{testimonial.title}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-white font-bold">
                        {testimonial.name?.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    {testimonial.linkTo && (
                      <Button variant="outline" size="sm" className="flex items-center gap-2 border-amber-300 hover:bg-amber-50 text-amber-700" asChild>
                        <Link to={testimonial.linkTo}>
                          <Play className="h-4 w-4" />
                          Watch Video
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Mobile view (carousel) */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => <CarouselItem key={index}>
                  <Card className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0">
                    <CardContent className="p-6 relative">
                      <div className="absolute -left-2 -top-2 text-primary opacity-20">
                        <Quote size={40} />
                      </div>
                      <div className="relative z-10">
                        <p className="text-base font-medium mb-5 italic">"{testimonial.title}"</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-white font-bold">
                              {testimonial.name?.charAt(0)}
                            </div>
                            <div>
                              <p className="font-bold">{testimonial.name}</p>
                              <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                          </div>
                          {testimonial.linkTo && (
                            <Button variant="outline" size="sm" className="flex items-center gap-2 border-amber-300 hover:bg-amber-50 text-amber-700" asChild>
                              <Link to={testimonial.linkTo || "/"}>
                                <Play className="h-4 w-4" />
                                Watch Video
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static transform-none mx-2 bg-white hover:bg-amber-50 border-amber-200" />
              <CarouselNext className="static transform-none mx-2 bg-white hover:bg-amber-50 border-amber-200" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>;
};

export default TestimonialsSection;
