import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import ClientLogoCarousel from '../components/ClientLogoCarousel';
import WellnessProviders from '../components/WellnessProviders';
const Home = () => {
  // Home page testimonials
  const homeTestimonials = [{
    name: "Jyoti Pokharel",
    title: "Meltdown has brought a jolly spirit to our workplace, making every day feel more positive and energizing.",
    role: "HR Director, Leapfrog Technology",
    linkTo: "https://www.instagram.com/p/DFP4tBFTzbC/"
  }, {
    name: "Bibha Tandukar",
    title: "I used to lack motivation and dread going to the same fitness center, but Meltdown completely changed that with its uplifting vibe.",
    role: "Project Manager, Young Innovation",
    linkTo: "https://www.instagram.com/p/DG-wZ4HIpLs/"
  }, {
    name: "Pabin Karki",
    title: "Meltdown's fresh approach to the fitness market and its diverse features have reignited my motivation.",
    role: "CEO, Kaya Sports",
    linkTo: "https://www.instagram.com/p/DGa0GjtzQCn/"
  }, {
    name: "Chiring Sherpa",
    title: "Gym consistency was a struggle. Having multiple fitness centers to choose from made it so much easier.",
    role: "Security Research Analyst, Security Pal",
    linkTo: "https://www.instagram.com/p/DIqwP8yIqr4/"
  }];
  return <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Wellness Solutions for Everyone
              </h1>
              <p className="text-lg mb-8 text-left">We create innovative solutions that empower people to lead an active lifestyle and connect through wellness 
            </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/schedule-demo" className="btn-primary">Get Started</Link>
                <Link to="/corporate-wellness" className="btn-outline">Learn More</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img alt="Wellness at work" className="rounded-lg shadow-xl max-w-full h-auto" src="/lovable-uploads/45fa564f-44ef-4ee3-aee3-880fc3569707.png" />
            </div>
          </div>
        </div>
      </section>
       {/* Inline Client Logo Carousel */}
       <ClientLogoCarousel />



      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Meltdown Works</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our comprehensive platform connects companies with top wellness providers to create effective programs for employees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-building"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">For Companies</h3>
              <p className="mb-4">
                Implement effective wellness programs that boost productivity, reduce turnover, and create a positive workplace culture.
              </p>
              <Link to="/companies" className="text-secondary font-bold hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">For Employees</h3>
              <p className="mb-4">
                Access high-quality wellness programs that help you stay healthy, reduce stress, and improve your work-life balance.
              </p>
              <Link to="/employees" className="text-secondary font-bold hover:underline">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">For Providers</h3>
              <p className="mb-4">
                Grow your wellness business by connecting with companies seeking your specific expertise and services.
              </p>
              <Link to="/providers" className="text-secondary font-bold hover:underline">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Wellness Providers Section */}
      <WellnessProviders />

      {/* Video Testimonials Section */}
      <TestimonialsSection testimonials={homeTestimonials} title="What Our Clients Say" subtitle="Hear from companies and employees who have experienced the Meltdown difference." />

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workplace?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join thousands of companies, employees, and providers who are creating healthier, happier workplaces with Meltdown.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/schedule-demo" className="btn-primary">Get Started</Link>
            <Link to="/corporate-wellness" className="btn-outline">Learn More</Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;