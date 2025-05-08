
import React from 'react';
import Hero from '../components/Hero';
import SectionHeader from '../components/SectionHeader';
import PricingCard from '../components/PricingCard';
import VideoTestimonial from '../components/VideoTestimonial';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    title: "Incredible transformation!",
    name: "Priya Sharma",
    role: "Yoga Instructor",
    videoSrc: "https://example.com/video1.mp4",
    thumbnailSrc: "/path-to-thumbnail1.jpg"
  },
  {
    id: 2,
    title: "Best fitness decision ever!",
    name: "Amit Patel",
    role: "Marathon Runner",
    videoSrc: "https://example.com/video2.mp4",
    thumbnailSrc: "/path-to-thumbnail2.jpg"
  },
  {
    id: 3,
    title: "Achieved my fitness goals!",
    name: "Sneha Reddy",
    role: "CrossFit Enthusiast",
    videoSrc: "https://example.com/video3.mp4",
    thumbnailSrc: "/path-to-thumbnail3.jpg"
  }
];

const MeltFit = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Unlock Your Fitness Potential"
        subtitle="Achieve your health goals with our personalized fitness programs."
        imageSrc="/lovable-uploads/69648a4e-e34a-4a5d-a893-997a44a5c942.png"
        buttonText="Get Started Now"
        linkTo="/contact"
      />

      {/* Pricing Section */}
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <SectionHeader
            title="Flexible Pricing Plans"
            description="Choose the plan that fits your lifestyle and fitness goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="Basic"
              price="19.99"
              features={["Access to basic workouts", "Limited support"]}
              buttonText="Choose Basic"
              linkTo="/contact"
            />
            <PricingCard
              title="Pro"
              price="39.99"
              features={["Access to all workouts", "Priority support", "Personalized fitness plan"]}
              buttonText="Choose Pro"
              linkTo="/contact"
            />
            <PricingCard
              title="Premium"
              price="59.99"
              features={["Everything in Pro", "One-on-one coaching", "Exclusive content"]}
              buttonText="Choose Premium"
              linkTo="/contact"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Success Stories"
            description="See how MeltFit has helped others achieve their fitness goals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <VideoTestimonial key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Partner Gyms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partner Gyms</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Work out at any of our premium partner locations across the city with your MeltFit membership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Banu's Total Fitness */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/467af599-4651-4a08-9945-98c9c1aa3519.png" 
                alt="Banu's Total Fitness" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Banu's Total Fitness</h3>
                <p className="text-gray-600 mb-4">Premium equipment and personalized training in a motivating environment.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Full Access</span>
                  <a 
                    href="https://www.google.com/maps/place/Banu's+Total+Fitness/@27.7116617,85.322952,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb190f34770a11:0xf08d1474a9fa25ee!8m2!3d27.711657!4d85.3255269!16s%2Fg%2F1thl3v8p?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline flex items-center text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/></svg>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Fitness First */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/4999a54a-752e-4999-bb91-9a2dd6a85596.png" 
                alt="Fitness First" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Fitness First</h3>
                <p className="text-gray-600 mb-4">State-of-the-art facilities with a wide range of classes and personal training options.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Full Access</span>
                  <a 
                    href="https://www.google.com/maps/place/Fitness+First/@27.7173453,85.3174783,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb190d976c8867:0xca6f9c418919949a!8m2!3d27.7173406!4d85.3200532!16s%2Fg%2F11c2ny7q0g?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline flex items-center text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/></svg>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* The Gym Kathmandu */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/467af599-4651-4a08-9945-98c9c1aa3519.png" 
                alt="The Gym Kathmandu" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">The Gym Kathmandu</h3>
                <p className="text-gray-600 mb-4">A comprehensive fitness center offering group classes, personal training, and a supportive community.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Full Access</span>
                  <a 
                    href="https://www.google.com/maps/place/The+Gym+Kathmandu/@27.7183523,85.3143983,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb190e54084bbd:0x9342979b46a9ca1a!8m2!3d27.7183476!4d85.3169732!16s%2Fg%2F11h0q68s5w?entry=ttu&g_ep=EgoyMDI1MDUwNS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline flex items-center text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/></svg>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Life?</h2>
          <p className="text-lg mb-12">Join MeltFit today and start your journey to a healthier, happier you.</p>
          <a href="/contact" className="btn-secondary">Sign Up Now</a>
        </div>
      </section>
    </div>
  );
};

export default MeltFit;
