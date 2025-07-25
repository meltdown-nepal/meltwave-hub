
import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialsSection from '../components/TestimonialsSection';
import AppScreenShowcase from '../components/corporate/AppScreenShowcase';

const roles = [{
  label: "For Companies",
  description: "Implement tailored wellness programs that boost productivity, retention, and wellbeing for your teams. Our expert-guided platform makes it simple to launch effective wellness initiatives that fit your organizational goals.",
  href: "/companies",
  img: "/lovable-uploads/21b19f4f-f68a-4680-99f6-e75cdcb4e715.png" // updated image with corporate wellness workshop
}, {
  label: "For Employees",
  description: "Access a wide range of wellness services and resources—anytime, anywhere. Participate in fun wellness challenges, track your progress, and discover activities to improve your work-life balance.",
  href: "/employees",
  img: "/lovable-uploads/b4863552-29ab-4f82-a691-89315c7a3124.png" // swapped with fitness partners image
}, {
  label: "Wellness Providers",
  description: "Grow your wellness business by connecting with leading employers and health-focused teams. Let us help you deliver your expertise where it's needed most—virtually or in-person.",
  href: "/providers",
  img: "/lovable-uploads/30f61b7c-2119-402c-9a49-c5f940a79247.png" // swapped with employees image
}];

const corporateTestimonials = [
  {
    name: "Jyoti Pokharel",
    title: "Meltdown has brought a jolly spirit to our workplace, making every day feel more positive and energizing.",
    role: "HR Director, Leapfrog Technology",
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
  }
];

const CorporateWellness = () => {
  // Define testimonials for this page
  return <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Corporate Wellness Solutions
              </h1>
              <p className="text-lg mb-8 text-left">
                We have developed a wellbeing system for companies to build an active work culture by providing their employees access to multiple wellness services under one membership and gamifying the entire experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link to="/companies" className="btn-outline">
                  For Companies
                </Link>
              </div>
            </div>
            <AppScreenShowcase />
          </div>
        </div>
      </section>

      {/* Roles/Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
            <p className="text-lg max-w-2xl mx-auto">Our corporate wellbeing system is designed for companies that want to build an active community and engage their employees through health focused initiatives
          </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map(role => <div key={role.label} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
                <img src={role.img} alt={role.label} className="mb-6 rounded-md w-full h-40 object-cover" />
                <h3 className="text-xl font-bold mb-3">{role.label}</h3>
                <p className="mb-6 text-center">{role.description}</p>
                <Link to={role.href} className="btn-outline mt-auto" aria-label={`Read more about ${role.label}`}>
                  Learn More
                </Link>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={corporateTestimonials} title="Corporate Success Stories" subtitle="Hear from companies who have transformed their workplace wellness with our solutions." />

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workplace?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join leading organizations using Meltdown to improve wellbeing, performance, and retention.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Get Started</Link>
            <Link to="/companies" className="btn-outline">For Companies</Link>
          </div>
        </div>
      </section>
    </div>;
};

export default CorporateWellness;
