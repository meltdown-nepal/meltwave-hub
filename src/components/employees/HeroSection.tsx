import React from 'react';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Wellness For You</h1>
            <p className="text-lg mb-8">
              Access high-quality wellness programs designed to help you thrive both personally and professionally. Improve your health, reduce stress, and enhance your work-life balance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/schedule-demo" className="btn-primary">Get Started</Link>
              <Link to="/meltfit" className="btn-outline">Explore MeltFit</Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img alt="Employee Wellness" className="rounded-lg shadow-xl max-w-full h-auto" src="/lovable-uploads/6e5c0497-d07d-442c-acf4-9d7cfebe1cf9.png" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;