import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Star, Quote, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Testimonial type definition
type TestimonialProp = {
  name: string;
  title: string;
  role?: string;
  image?: string;
  linkTo?: string;
};

// Centralized photo URLs for known testimonials
const testimonialImages: { [key: string]: string } = {
  "Jyoti Pokharel": "/lovable-uploads/ad4772d6-9991-455c-8eb5-7b16e5786191.png",
  "Bibha Tandukar": "/lovable-uploads/75c33a27-3bcf-4168-b101-b170d7ca4ac7.png",
  "Pabin Karki": "/lovable-uploads/117df8a4-df31-4e42-acbf-7819a0f69782.png",
  "Chiring Sherpa": "/lovable-uploads/3a46bf1c-59c2-46c0-8a24-b20cfaa69949.png",
};
const placeholderImg = "/lovable-uploads/8a26d6be-3e65-4d47-9d5d-3fcaa609641a.png";

interface TestimonialsSectionProps {
  testimonials: TestimonialProp[];
  title?: string;
  subtitle?: string;
}

// Default testimonials, matching avatar/photo and styling with enhanced look
const defaultTestimonials: TestimonialProp[] = [
  {
    name: "Jyoti Pokharel",
    title: "Meltdown has brought a jolly spirit to our workplace, making every day feel more positive and energizing.",
    role: "People Managment Senior Officer, Leapfrog Technology",
    image: testimonialImages["Jyoti Pokharel"],
    linkTo: "https://www.instagram.com/p/DFP4tBFTzbC/",
  },
  {
    name: "Bibha Tandukar",
    title: "I used to lack motivation and dread going to the same fitness center, but Meltdown completely changed that with its uplifting vibe.",
    role: "Project Manager, Young Innovation",
    image: testimonialImages["Bibha Tandukar"],
    linkTo: "https://www.instagram.com/p/DG-wZ4HIpLs/"
  },
  {
    name: "Pabin Karki",
    title: "Meltdown's fresh approach to the fitness market and its diverse features have reignited my motivation.",
    role: "CEO, Kaya Sports",
    image: testimonialImages["Pabin Karki"],
    linkTo: "https://www.instagram.com/p/DGa0GjtzQCn/"
  },
  {
    name: "Chiring Sherpa",
    title: "Gym consistency was a struggle. Having multiple fitness centers to choose from made it so much easier.",
    role: "Security Research Analyst, Security Pal",
    image: testimonialImages["Chiring Sherpa"],
    linkTo: "https://www.instagram.com/p/DIqwP8yIqr4/"
  }
];

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
  title = "What Our Clients Say",
  subtitle = "Hear from companies and employees who have experienced the Meltdown difference."
}: TestimonialsSectionProps) => {
  // For dot indicators on mobile carousel
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    }
  }, [api]);

  const scrollToSlide = (idx: number) => api?.scrollTo(idx);

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-yellow-50 via-white to-amber-50/40 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-amber-100 rounded-full text-amber-700 font-medium text-sm">
            <Star className="w-4 h-4 fill-current" />
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        {/* Desktop: Grid with rich cards */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border-0 h-full transform hover:-translate-y-1 relative overflow-visible">
              <CardContent className="p-8 lg:p-10 relative h-full flex flex-col min-h-[300px]">
                {/* Decorative gradients */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-lg group-hover:scale-150 transition-transform duration-500"></div>
                {/* Quote */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-black" />
                  </div>
                </div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                {/* Testimonial Text */}
                <blockquote className="text-base md:text-lg font-medium mb-6 text-gray-800 flex-1 leading-relaxed relative">
                  "{testimonial.title}"
                </blockquote>
                {/* Avatar and Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    {/* Avatar */}
                    <div className="relative">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-10 w-10 rounded-full object-cover shadow-lg border-2 border-primary bg-white"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold text-lg shadow-lg">
                          {testimonial.name?.charAt(0)}
                        </div>
                      )}
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-gray-900 text-sm truncate">{testimonial.name}</p>
                      {testimonial.role && (
                        <p className="text-xs text-gray-600 leading-tight mt-0.5">{testimonial.role}</p>
                      )}
                    </div>
                  </div>
                  {/* Watch Button */}
                  {testimonial.linkTo && (
                    <Button variant="outline" size="sm" className="flex items-center gap-1.5 border-2 border-primary/20 hover:border-primary hover:bg-primary/10 text-gray-700 hover:text-black rounded-full px-3 py-1.5 text-xs font-medium group/btn transition-all duration-300" asChild>
                      <Link to={testimonial.linkTo} target="_blank" rel="noopener noreferrer">
                        <div className="w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300">
                          <Play className="w-2.5 h-2.5 text-black fill-current ml-0.5" />
                        </div>
                        <span>Watch</span>
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Mobile: Carousel */}
        <div className="md:hidden w-full">
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx} className="pl-2">
                  <Card className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border-0 h-full transform hover:-translate-y-1 relative overflow-visible">
                    <CardContent className="p-6 relative h-full flex flex-col min-h-[280px]">
                      {/* Gradients */}
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-md"></div>
                      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-md"></div>
                      {/* Quote */}
                      <div className="mb-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
                          <Quote className="w-5 h-5 text-black" />
                        </div>
                      </div>
                      {/* Stars */}
                      <div className="flex items-center gap-1 mb-1">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                      </div>
                      {/* Text */}
                      <blockquote className="text-base font-medium mb-4 text-gray-800 flex-1 leading-relaxed relative">
                        "{testimonial.title}"
                      </blockquote>
                      {/* Details */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                          {testimonial.image ? (
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="h-9 w-9 rounded-full object-cover shadow-lg border-2 border-primary bg-white"
                            />
                          ) : (
                            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold text-lg shadow-lg">
                              {testimonial.name?.charAt(0)}
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-gray-900 text-sm truncate">{testimonial.name}</p>
                            {testimonial.role && (
                              <p className="text-xs text-gray-600 leading-tight mt-0.5">{testimonial.role}</p>
                            )}
                          </div>
                        </div>
                        {testimonial.linkTo && (
                          <Button variant="outline" size="sm" className="flex items-center gap-1.5 border-2 border-primary/20 hover:border-primary hover:bg-primary/10 text-gray-700 hover:text-black rounded-full px-3 py-1 text-xs font-medium group/btn transition-all duration-300 ml-1" asChild>
                            <Link to={testimonial.linkTo} target="_blank" rel="noopener noreferrer">
                              <div className="w-5 h-5 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center group-hover/btn:scale-110 transition-transform duration-300">
                                <Play className="w-2.5 h-2.5 text-black fill-current ml-0.5" />
                              </div>
                              <span>Watch</span>
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Fancy dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    current === idx
                      ? 'bg-gradient-to-r from-primary to-secondary scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-5">
              <CarouselPrevious className="static transform-none mx-2 bg-white hover:bg-amber-50 border-amber-200" />
              <CarouselNext className="static transform-none mx-2 bg-white hover:bg-amber-50 border-amber-200" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
