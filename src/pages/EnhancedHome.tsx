
import React from 'react';
import FaqSection from '../components/FaqSection';
import WellnessProviders from '../components/WellnessProviders';
import EnhancedHeroSection from '../components/home/EnhancedHeroSection';
import ModernFeaturesSection from '../components/home/ModernFeaturesSection';
import EnhancedClientCarousel from '../components/home/EnhancedClientCarousel';
import EnhancedCtaSection from '../components/home/EnhancedCtaSection';
import AppShowcaseSection from '../components/home/AppShowcaseSection';
import EnhancedTestimonialsSection from '../components/home/EnhancedTestimonialsSection';

const EnhancedHome = () => {
  // Home page testimonials
  const homeTestimonials = [
    {
      name: "Jyoti Pokharel",
      title: "Meltdown has brought a jolly spirit to our workplace, making every day feel more positive and energizing.",
      role: "HR Director, Leapfrog Technology",
      linkTo: "https://www.instagram.com/p/DFP4tBFTzbC/"
    },
    {
      name: "Bibha Tandukar",
      title: "I used to lack motivation and dread going to the same fitness center, but Meltdown completely changed that with its uplifting vibe.",
      role: "Project Manager, Young Innovation",
      linkTo: "https://www.instagram.com/p/DG-wZ4HIpLs/"
    },
    {
      name: "Pabin Karki",
      title: "Meltdown's fresh approach to the fitness market and its diverse features have reignited my motivation.",
      role: "CEO, Kaya Sports",
      linkTo: "https://www.instagram.com/p/DGa0GjtzQCn/"
    },
    {
      name: "Chiring Sherpa",
      title: "Gym consistency was a struggle. Having multiple fitness centers to choose from made it so much easier.",
      role: "Security Research Analyst, Security Pal",
      linkTo: "https://www.instagram.com/p/DIqwP8yIqr4/"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Enhanced Client Logo Carousel with reduced spacing */}
      <div className="-mt-8" id="trusted-companies-section">
        <EnhancedClientCarousel />
      </div>

      {/* Modern Features Section with reduced spacing */}
      <div className="-mt-4">
        <ModernFeaturesSection />
      </div>

      {/* App Showcase Section - NEW */}
      <div className="-mt-4">
        <AppShowcaseSection />
      </div>

      {/* Our Wellness Providers Section with reduced spacing */}
      <div className="-mt-4">
        <WellnessProviders />
      </div>

      {/* Enhanced Video Testimonials Section with reduced spacing */}
      <div className="-mt-4">
        <EnhancedTestimonialsSection 
          testimonials={homeTestimonials} 
          title="What Our Clients Say" 
          subtitle="Hear from companies and employees who have experienced the Meltdown difference." 
        />
      </div>

      {/* FAQ Section with reduced spacing */}
      <div className="-mt-4">
        <FaqSection />
      </div>

      {/* Enhanced CTA Section with reduced spacing */}
      <div className="-mt-4">
        <EnhancedCtaSection />
      </div>
    </div>
  );
};

export default EnhancedHome;
