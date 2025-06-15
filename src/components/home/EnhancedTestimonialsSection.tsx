
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
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-amber-50/50 to-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="relative max-w-6xl mx-auto px-4 pb-8">
            <Carousel 
              setApi={setApi} 
              opts={{
                align: "start",
                loop: true
              }} 
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2 flex">
                    <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 w-full min-h-[280px] md:min-h-[320px]">
                      <CardContent className="p-6 md:p-8 relative h-full flex flex-col min-h-[240px] md:min-h-[280px]">
                        {/* Quote Icon */}
                        <div className="absolute -left-1 -top-1 text-primary/20 z-0">
                          <Quote size={40} />
                        </div>
                        
                        <div className="relative z-10 flex-1 flex flex-col h-full">
                          {/* Testimonial Text */}
                          <blockquote className="text-base md:text-lg font-medium mb-4 md:mb-4 italic text-gray-800 flex-1 leading-relaxed">
                            "{testimonial.title}"
                          </blockquote>
                          
                          {/* User Info */}
                          <div className="flex items-center justify-between mt-auto pt-2">
                            <div className="flex items-center space-x-3 md:space-x-4 flex-1 min-w-0">
                              {/* User Avatar */}
                              <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold text-lg shadow-md flex-shrink-0">
                                {testimonial.name?.charAt(0)}
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="font-bold text-gray-900 text-sm md:text-base truncate">{testimonial.name}</p>
                                {testimonial.role && (
                                  <p className="text-xs md:text-sm text-gray-600 leading-tight">{testimonial.role}</p>
                                )}
                              </div>
                            </div>
                            
                            {/* Watch Video Button */}
                            {testimonial.linkTo && (
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex items-center gap-2 border-amber-300 hover:bg-amber-50 text-amber-700 rounded-full px-3 py-2 text-xs md:text-sm flex-shrink-0 ml-2" 
                                asChild
                              >
                                <Link to={testimonial.linkTo} target="_blank" rel="noopener noreferrer">
                                  <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                  <span className="hidden sm:inline">Watch</span>
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
                  className="absolute -left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white hover:bg-amber-50 border-amber-200 shadow-lg z-10" 
                  onClick={scrollPrev}
                >
                  <ChevronLeft className="h-5 w-5 text-amber-700" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute -right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white hover:bg-amber-50 border-amber-200 shadow-lg z-10" 
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
