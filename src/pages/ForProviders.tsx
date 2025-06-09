import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import VideoTestimonial from '@/components/VideoTestimonial';
import LogoCarousel from '@/components/LogoCarousel';

// Wellness provider logos
const wellnessLogos = [{
  id: 1,
  src: "/lovable-uploads/397c4685-d91a-452b-b4fa-51c0f4236ee7.png",
  alt: "Athlete Land"
}, {
  id: 2,
  src: "/lovable-uploads/1b36a7dd-923f-4af1-8b78-0c422d5f576c.png",
  alt: "AWA Club"
}, {
  id: 3,
  src: "/lovable-uploads/14a3b627-4a42-469a-a6a5-d6f54dbb06ad.png",
  alt: "Bajra Sports Centre"
}, {
  id: 4,
  src: "/lovable-uploads/201cad4a-1cf7-49c2-961f-5e1c1760e01f.png",
  alt: "Bands Fitness"
}, {
  id: 5,
  src: "/lovable-uploads/cf919e11-e768-4da0-8356-f14df6a3e4f0.png",
  alt: "Blackstar Fitness"
}, {
  id: 6,
  src: "/lovable-uploads/bdc58112-4650-4b00-9673-ff29a29f2db5.png",
  alt: "Beauty & The Beast Fitness Station"
}, {
  id: 7,
  src: "/lovable-uploads/8acbd348-e2ba-45d5-9056-60b939d71eae.png",
  alt: "Bob's Gym"
}, {
  id: 8,
  src: "/lovable-uploads/06891232-b111-41e1-aa37-b381970e4df0.png",
  alt: "E Dev Gym"
}, {
  id: 9,
  src: "/lovable-uploads/719006e5-d062-44b4-99ba-8fbd518b54e7.png",
  alt: "Ekarana Muay Thai"
}, {
  id: 10,
  src: "/lovable-uploads/13b7cac1-6f5d-49af-a91d-95098751d3ee.png",
  alt: "Happy Minds"
}, {
  id: 11,
  src: "/lovable-uploads/ff546b12-05d6-4589-88bc-6dccce67bf1c.png",
  alt: "Regal Fitness"
}, {
  id: 12,
  src: "/lovable-uploads/5c9d285f-e605-40e0-9db4-01d516e2b888.png",
  alt: "Riddhi Pilates Studios"
}, {
  id: 13,
  src: "/lovable-uploads/53894216-71b2-4325-ab38-8344563caa74.png",
  alt: "Super Fitness"
}, {
  id: 14,
  src: "/lovable-uploads/d7f9a37a-1fe9-488e-b4e3-cbcef131cafe.png",
  alt: "Tapout Fitness"
}, {
  id: 15,
  src: "/lovable-uploads/98c39ae5-f842-422f-89a8-b8b626e945ad.png",
  alt: "Three Lions Fitness Center"
}, {
  id: 16,
  src: "/lovable-uploads/20d63b1f-921f-4e7c-b6a6-e9e511c135e0.png",
  alt: "Tranquility Spa"
}];

// FAQ Data

const partnerFaqs = [{
  question: "How do I become a wellness provider?",
  answer: "Submit your application through our partner portal. We'll review your qualifications and certifications, and guide you through the onboarding process."
}, {
  question: "What types of services are in demand?",
  answer: "High-demand services include fitness training, nutrition coaching, mindfulness sessions, and stress management workshops. Both virtual and in-person services are needed."
}, {
  question: "How does payment work?",
  answer: "We handle all payment processing. You'll receive bi-weekly payments for services rendered, with detailed reporting and analytics."
}];
const providerTestimonials = [{
  videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  title: "Grew my client base by 40%",
  name: "Rachel Lee",
  role: "Yoga Instructor"
}, {
  videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  title: "Connected me with corporate clients",
  name: "Marcus Wilson",
  role: "Fitness Trainer"
}, {
  videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  title: "Simplified my business operations",
  name: "Elena Rodriguez",
  role: "Nutritionist"
}];
const ForProviders = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleVideoClick = (videoUrl: string) => {
    setIsLoading(true);
    setSelectedVideo(videoUrl);
  };
  return <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Grow Your Wellness Business
              </h1>
              <p className="text-lg mb-8">
                Join our network of wellness providers and connect with corporate clients seeking your expertise. Expand your reach and grow your business without the hassle of sales and marketing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/schedule-demo" className="btn-primary">Apply to Join</Link>
                <Link to="/academy" className="btn-outline">Explore Our Academy</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img alt="Wellness Provider" className="rounded-lg shadow-xl max-w-full h-auto" src="/lovable-uploads/wellnessprovider.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits for Wellness Providers</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Meltdown connects you with corporate clients while handling the business aspects, allowing you to focus on what you do best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Access to Corporate Clients</h3>
              <p>
                Connect with companies looking for your specific wellness services without expensive marketing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Streamlined Scheduling</h3>
              <p>Our platform handles payments, and administrative tasks so you can focus on your services.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-certificate"><path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path><path d="M9 5V3"></path><path d="M15 5V3"></path><path d="M12 12h.01"></path><path d="M9 15h6"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Development</h3>
              <p>
                Access training and certification through our Academy to enhance your skills and credibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-bar-chart"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Business Growth</h3>
              <p>Improve retention of clients with our challenges and rewards
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Network Section */}
      <LogoCarousel 
        logos={wellnessLogos} 
        title="Our Wellness Network" 
        description="These amazing gyms, studios, and wellness centers help power the Meltdown experience."
        showViewAllButton={true}
        viewAllLink="/wellness-partners"
      />

      {/* How It Works */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works for Providers</h2>
            <p className="text-lg max-w-3xl mx-auto">
              A simple process to join our network and start growing your wellness business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
                1
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3 text-center">Apply</h3>
                <p>
                  Submit your application with details about your wellness services, credentials, and experience. Our team will review your application and contact you for the next steps.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
                2
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3 text-center">Onboard</h3>
                <p>
                  Complete our onboarding process, including profile setup, service definition, and training on our platform. You'll also have access to our Academy for additional certification.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
                3
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3 text-center">Connect</h3>
                <p>
                  Start receiving bookings from corporate clients whose needs match your services. Deliver your wellness programs with our full administrative and marketing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Facilities Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Wellness Facilities Can Join?</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We welcome diverse wellness spaces and facilities to join our provider network and host corporate wellness programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 border-b border-primary pb-2">Physical Wellness Facilities</h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Fitness Centers & Gyms</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Yoga Studios</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Pilates Studios</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Sports & Recreation Centers</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Martial Arts Studios</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 border-b border-primary pb-2">Mental Wellness Centers</h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Counseling Centers</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Meditation Centers</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Mindfulness Studios</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Mental Health Clinics</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Therapy & Coaching Centers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 border-b border-primary pb-2">Specialized Wellness Venues</h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Spas & Wellness Resorts</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Nutrition & Wellness Clinics</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Physical Therapy Centers</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Corporate Wellness Facilities</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Community Recreation Centers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner FAQs Section */}
      <section className="section-padding">
        <div className="container-custom">
          

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-4 md:p-8 transform transition-all duration-500 hover:shadow-md opacity-0 animate-fade-in" style={{
          animationDelay: "400ms",
          animationFillMode: "forwards"
        }}>
            <h3 className="text-2xl font-bold mb-6 text-center">Partner FAQs</h3>
            <Accordion type="single" collapsible className="w-full">
              {partnerFaqs.map((faq, index) => <AccordionItem key={index} value={`partner-${index}`} className="overflow-hidden transition-all duration-300">
                  <AccordionTrigger className="text-left font-medium text-lg hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="animate-accordion-down">
                    <p className="py-2 text-gray-700">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Wellness Business?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join our network of wellness providers and start connecting with corporate clients seeking your expertise.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/schedule-demo" className="btn-primary">Apply to Join</Link>
            <Link to="/academy" className="btn-outline">Explore Our Academy</Link>
          </div>
        </div>
      </section>
    </div>;
};
export default ForProviders;
