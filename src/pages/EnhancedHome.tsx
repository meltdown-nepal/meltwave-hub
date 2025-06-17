
import React from 'react';
import { Helmet } from 'react-helmet-async';
import FaqSection from '../components/FaqSection';
import WellnessProviders from '../components/WellnessProviders';
import EnhancedHeroSection from '../components/home/EnhancedHeroSection';
import ModernFeaturesSection from '../components/home/ModernFeaturesSection';
import EnhancedClientCarousel from '../components/home/EnhancedClientCarousel';
import EnhancedCtaSection from '../components/home/EnhancedCtaSection';
import AppShowcaseSection from '../components/home/AppShowcaseSection';
import EnhancedTestimonialsSection from '../components/home/EnhancedTestimonialsSection';

// Updated: homeTestimonials now include images for Jyoti and Bibha
const homeTestimonials = [
  {
    name: "Jyoti Pokharel",
    title: "Meltdown has brought a jolly spirit to our workplace, making every day feel more positive and energizing.",
    role: "People Managment Senior Officer, Leapfrog Technology",
    image: "/lovable-uploads/ad4772d6-9991-455c-8eb5-7b16e5786191.png",
    linkTo: "https://www.instagram.com/p/DFP4tBFTzbC/"
  },
  {
    name: "Bibha Tandukar",
    title: "I used to lack motivation and dread going to the same fitness center, but Meltdown completely changed that with its uplifting vibe.",
    role: "Project Manager, Young Innovation",
    image: "/lovable-uploads/75c33a27-3bcf-4168-b101-b170d7ca4ac7.png",
    linkTo: "https://www.instagram.com/p/DG-wZ4HIpLs/"
  },
  {
    name: "Pabin Karki",
    title: "Meltdown's fresh approach to the fitness market and its diverse features have reignited my motivation.",
    role: "CEO, Kaya Sports",
    image: "/lovable-uploads/117df8a4-df31-4e42-acbf-7819a0f69782.png",
    linkTo: "https://www.instagram.com/p/DGa0GjtzQCn/"
  },
  {
    name: "Chiring Sherpa",
    title: "Gym consistency was a struggle. Having multiple fitness centers to choose from made it so much easier.",
    role: "Security Research Analyst, Security Pal",
    image: "/lovable-uploads/3a46bf1c-59c2-46c0-8a24-b20cfaa69949.png",
    linkTo: "https://www.instagram.com/p/DIqwP8yIqr4/"
  }
];

const EnhancedHome = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Meltdown Wellbeing - Wellness Solutions for Companies & Employees in Nepal</title>
        <meta name="description" content="Leading wellness solutions provider in Nepal. Corporate wellness programs, employee wellness services, fitness centers, and health initiatives for companies across Kathmandu and Nepal." />
        <meta name="keywords" content="wellness Nepal, corporate wellness Nepal, employee wellness, fitness centers Nepal, workplace wellness, wellness programs Kathmandu, health initiatives Nepal, corporate health Nepal" />
        <link rel="canonical" href="https://meltdownnepal.com/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Meltdown Wellbeing - Wellness Solutions for Companies & Employees in Nepal" />
        <meta property="og:description" content="Leading wellness solutions provider in Nepal. Corporate wellness programs, employee wellness services, and fitness centers for companies." />
        <meta property="og:url" content="https://meltdownnepal.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://meltdownnepal.com/lovable-uploads/a44d1192-3b50-4319-8b71-b312a47bf095.png" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meltdown Wellbeing - Wellness Solutions Nepal" />
        <meta name="twitter:description" content="Corporate wellness programs and employee wellness services in Nepal" />
        <meta name="twitter:image" content="https://meltdownnepal.com/lovable-uploads/a44d1192-3b50-4319-8b71-b312a47bf095.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Meltdown Wellbeing",
            "description": "Leading wellness solutions provider in Nepal offering corporate wellness programs and employee wellness services",
            "url": "https://meltdownnepal.com",
            "logo": "https://meltdownnepal.com/lovable-uploads/7067dee3-ca5b-449c-b05e-836f3b83b8e3.png",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Nepal",
              "addressLocality": "Kathmandu"
            },
            "sameAs": [
              "https://www.instagram.com/meltdown_wellness/"
            ]
          })}
        </script>
      </Helmet>

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
