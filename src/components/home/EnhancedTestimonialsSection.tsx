
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedElement from '../animations/AnimatedElement';

type TestimonialProp = {
  name: string;
  title: string;
  role?: string;
  image?: string;
  linkTo?: string;
};

interface EnhancedTestimonialsSectionProps {
  testimonials: TestimonialProp[];
  title?: string;
  subtitle?: string;
}

const EnhancedTestimonialsSection = ({ 
  testimonials,
  title = "What Our Clients Say",
  subtitle = "Hear from companies and employees who have experienced the Meltdown difference."
}: EnhancedTestimonialsSectionProps) => {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <section className="section-padding bg-gradient-to-br from-amber-50/50 to-white" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-16">
          <AnimatedElement animation="slideUp" delay={0.1}>
            <div className="inline-block mb-4 px-6 py-2 bg-amber-100 rounded-full text-amber-700 font-medium text-sm">
              TESTIMONIALS
            </div>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{title}</h2>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.3}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </AnimatedElement>
        </div>

        <AnimatedElement animation="slideUp" delay={0.4}>
          <div className="relative max-w-6xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                    <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 h-full">
                      <CardContent className="p-8 relative h-full flex flex-col">
                        {/* Quote Icon */}
                        <div className="absolute -left-2 -top-2 text-primary/20">
                          <Quote size={48} />
                        </div>
                        
                        <div className="relative z-10 flex-1 flex flex-col">
                          {/* Testimonial Text */}
                          <blockquote className="text-lg font-medium mb-8 italic text-gray-800 flex-1">
                            "{testimonial.title}"
                          </blockquote>
                          
                          {/* User Info */}
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center space-x-4">
                              {/* User Avatar */}
                              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold text-lg shadow-md">
                                {testimonial.name?.charAt(0)}
                              </div>
                              <div>
                                <p className="font-bold text-gray-900">{testimonial.name}</p>
                                {testimonial.role && (
                                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                                )}
                              </div>
                            </div>
                            
                            {/* Watch Video Button */}
                            {testimonial.linkTo && (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex items-center gap-2 border-amber-300 hover:bg-amber-50 text-amber-700 rounded-full px-4 py-2"
                                asChild
                              >
                                <Link to={testimonial.linkTo}>
                                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z"/>
                                  </svg>
                                  Watch
                                </Link>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Custom Navigation Buttons for Desktop */}
              <div className="hidden md:block">
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white hover:bg-amber-50 border-amber-200 shadow-lg z-10"
                  onClick={scrollPrev}
                >
                  <ChevronLeft className="h-5 w-5 text-amber-700" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white hover:bg-amber-50 border-amber-200 shadow-lg z-10"
                  onClick={scrollNext}
                >
                  <ChevronRight className="h-5 w-5 text-amber-700" />
                </Button>
              </div>
            </Carousel>
            
            {/* Mobile Navigation Buttons */}
            <div className="flex justify-center gap-2 mt-8 md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full bg-white hover:bg-amber-50 border-amber-200"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-4 w-4 text-amber-700" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full bg-white hover:bg-amber-50 border-amber-200"
                onClick={scrollNext}
              >
                <ChevronRight className="h-4 w-4 text-amber-700" />
              </Button>
            </div>
          </div>
        </AnimatedElement>

        {/* Call to Action */}
        <AnimatedElement animation="slideUp" delay={0.6}>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Join thousands of satisfied clients</p>
            <Link 
              to="/schedule-demo" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Start Your Wellness Journey
            </Link>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default EnhancedTestimonialsSection;
