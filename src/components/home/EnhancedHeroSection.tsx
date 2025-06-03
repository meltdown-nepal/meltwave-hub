
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedElement from '../animations/AnimatedElement';
import OptimizedImage from '../OptimizedImage';

const EnhancedHeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "/lovable-uploads/45fa564f-44ef-4ee3-aee3-880fc3569707.png",
    "/lovable-uploads/146c33ba-fd46-45de-9faa-e6b33ca16566.jpg",
    "/lovable-uploads/b4d593d4-69e8-4ab7-a1df-4d8d5371874b.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container-custom min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content Side */}
          <div className="space-y-8">
            <AnimatedElement animation="slideUp" delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Transforming Workplace Wellness</span>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.4}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  Wellness
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Solutions
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                  for Everyone
                </span>
              </h1>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.6}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We create innovative solutions that empower people to lead an active lifestyle and connect through wellness. Transform your workplace culture today.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="slideUp" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/schedule-demo" 
                  className="group bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  to="/corporate-wellness" 
                  className="group border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Learn More
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </AnimatedElement>

            {/* Updated Stats */}
            <AnimatedElement animation="slideUp" delay={1.0}>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 font-inter">40+</div>
                  <div className="text-sm text-gray-600 font-inter">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 font-inter">70+</div>
                  <div className="text-sm text-gray-600 font-inter">Wellness Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 font-inter">800+</div>
                  <div className="text-sm text-gray-600 font-inter">Happy Employees</div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Image Side with Slideshow */}
          <div className="relative">
            <AnimatedElement animation="scaleIn" delay={0.5}>
              <div className="relative">
                {/* Main image with slideshow */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-transform duration-700">
                  {backgroundImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <OptimizedImage
                        src={image}
                        alt={`Wellness at work ${index + 1}`}
                        className="w-full h-auto"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                  {/* Ensure first image is loaded for sizing */}
                  <OptimizedImage
                    src={backgroundImages[0]}
                    alt="Wellness at work"
                    className="w-full h-auto opacity-0"
                    priority={true}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Slideshow indicator dots */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {backgroundImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-primary scale-125' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <AnimatedElement animation="fadeIn" delay={1.5}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </AnimatedElement>
    </section>
  );
};

export default EnhancedHeroSection;
