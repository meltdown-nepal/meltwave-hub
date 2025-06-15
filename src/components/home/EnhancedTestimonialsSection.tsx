import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Quote, Star, Play, ArrowRight } from "lucide-react";
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
  const [current, setCurrent] = useState(0);
  React.useEffect(() => {
    if (!api) return;
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", handleSelect);
    return () => api.off("select", handleSelect);
  }, [api]);
  const scrollToSlide = (index: number) => {
    api?.scrollTo(index);
  };
  return <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <AnimatedElement animation="slideUp" delay={0.1}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-amber-100 rounded-full text-amber-700 font-medium text-sm">
              <Star className="w-4 h-4 fill-current" />
              CLIENT TESTIMONIALS
            </div>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              {title}
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.3}>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </AnimatedElement>
        </div>

        {/* Testimonials Carousel */}
        <AnimatedElement animation="slideUp" delay={0.4}>
          <div className="relative">
            <Carousel setApi={setApi} opts={{
            align: "start",
            loop: true
          }} className="w-full">
              <CarouselContent className="-ml-6">
                {testimonials.map((testimonial, index) => <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/2">
                    <Card className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 h-full transform hover:-translate-y-2">
                      <CardContent className="p-8 md:p-10 relative h-full flex flex-col min-h-[400px]">
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-lg group-hover:scale-150 transition-transform duration-500"></div>
                        
                        {/* Quote Icon */}
                        <div className="relative z-10 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                            <Quote className="w-8 h-8 text-black" />
                          </div>
                        </div>
                        
                        <div className="relative z-10 flex-1 flex flex-col">
                          {/* Star Rating */}
                          <div className="flex items-center gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                          </div>

                          {/* Testimonial Text */}
                          <blockquote className="text-lg md:text-xl font-medium mb-8 text-gray-800 flex-1 leading-relaxed relative">
                            "{testimonial.title}"
                          </blockquote>
                          
                          {/* User Info & CTA */}
                          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                            <div className="flex items-center space-x-4 flex-1 min-w-0">
                              {/* User Avatar */}
                              <div className="relative">
                                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold text-xl shadow-lg">
                                  {testimonial.name?.charAt(0)}
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="font-bold text-gray-900 text-base truncate">{testimonial.name}</p>
                                {testimonial.role && <p className="text-sm text-gray-600 leading-tight mt-1">{testimonial.role}</p>}
                              </div>
                            </div>
                            
                            {/* Watch Video Button */}
                            {testimonial.linkTo && <Button variant="outline" size="sm" className="flex items-center gap-2 border-2 border-primary/20 hover:border-primary hover:bg-primary/10 text-gray-700 hover:text-black rounded-full px-4 py-2 text-sm font-medium group/btn transition-all duration-300" asChild>
                                <Link to={testimonial.linkTo} target="_blank" rel="noopener noreferrer">
                                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300">
                                    <Play className="w-3 h-3 text-black fill-current ml-0.5" />
                                  </div>
                                  <span>Watch</span>
                                </Link>
                              </Button>}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>)}
              </CarouselContent>
            </Carousel>
            
            {/* Custom Dot Indicators */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, index) => <button key={index} onClick={() => scrollToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-gradient-to-r from-primary to-secondary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
            </div>
          </div>
        </AnimatedElement>

        {/* Bottom CTA Section */}
        <AnimatedElement animation="slideUp" delay={0.6}>
          <div className="text-center mt-20">
            
          </div>
        </AnimatedElement>
      </div>
    </section>;
};
export default EnhancedTestimonialsSection;