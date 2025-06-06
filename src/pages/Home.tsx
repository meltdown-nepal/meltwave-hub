
import React from 'react';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import WellnessProviders from '../components/WellnessProviders';
import OptimizedImage from '../components/OptimizedImage';

const Home = () => {
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
      title: "I used to lack motivation and dread going to the same fitness centers, but Meltdown completely changed that with its uplifting vibe.",
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
      {/* Simple Hero Section with Photo */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                Wellness Solutions for Everyone
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0">
                We create innovative solutions that empower people to lead an active lifestyle and connect through wellness.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="/schedule-demo" className="btn-primary text-lg px-8 py-3">
                  Get Started
                </a>
                <a href="/corporate-wellness" className="btn-outline text-lg px-8 py-3">
                  Learn More
                </a>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <OptimizedImage
                  src="/lovable-uploads/45fa564f-44ef-4ee3-aee3-880fc3569707.png"
                  alt="Wellness at work"
                  className="w-full h-auto"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Wellness Providers Section */}
      <WellnessProviders />

      {/* Video Testimonials Section */}
      <TestimonialsSection 
        testimonials={homeTestimonials} 
        title="What Our Clients Say" 
        subtitle="Hear from companies and employees who have experienced the Meltdown difference." 
      />

      {/* FAQ Section */}
      <FaqSection />

      {/* Simple CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Ready to Transform Your Workplace?
          </h2>
          <p className="text-xl mb-8 text-black/80 max-w-2xl mx-auto">
            Join thousands of companies who are creating healthier, happier workplaces with Meltdown.
          </p>
          <a href="/schedule-demo" className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-all duration-300">
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
