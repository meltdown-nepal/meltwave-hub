
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  buttonText: string;
  linkTo: string;
}

const Hero = ({ title, subtitle, imageSrc, buttonText, linkTo }: HeroProps) => {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageSrc} 
          alt={title}
          className="object-cover w-full h-full opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl">
          {subtitle}
        </p>
        <Link to={linkTo} className="btn-primary text-lg px-8 py-3">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
