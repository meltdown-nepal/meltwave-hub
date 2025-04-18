import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import VideoTestimonial from '@/components/VideoTestimonial';

// FAQ Data
const employeeFaqs = [{
  question: "How do I access the wellness services?",
  answer: "Simply log in to our platform using your company credentials. You'll have immediate access to all wellness services, scheduling tools, and resources."
}, {
  question: "Can I participate during work hours?",
  answer: "Most companies allow flexibility for wellness activities. Check with your HR department about your company's specific policies."
}, {
  question: "Are the services confidential?",
  answer: "Yes, all individual wellness activities and health information are completely confidential and protected by HIPAA regulations."
}];
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
const ForProviders = () => {
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
                <Link to="/contact" className="btn-primary">Apply to Join</Link>
                <Link to="/academy" className="btn-outline">Explore Our Academy</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Wellness Provider" className="rounded-lg shadow-xl max-w-full h-auto" />
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
              <p>
                Our platform handles bookings, payments, and administrative tasks so you can focus on your services.
              </p>
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
              <p>
                Increase your client base and revenue while building a reputation in the corporate wellness sector.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Provider Types */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Can Join?</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We welcome a wide range of wellness professionals to our provider network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 border-b border-primary pb-2">Physical Wellness</h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Fitness Trainers</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Yoga Instructors</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Pilates Teachers</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Nutritionists</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Physical Therapists</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 border-b border-primary pb-2">Mental Wellness</h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Meditation Teachers</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Stress Management Coaches</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Mindfulness Instructors</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Mental Health Counselors</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Life Coaches</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 border-b border-primary pb-2">Specialized Wellness</h3>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Ergonomic Specialists</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Sleep Consultants</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Financial Wellness Advisors</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Team Building Facilitators</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Health Educators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Section */}
      

      {/* Fitness Partners Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Success Stories</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Learn from wellness professionals who have grown their business with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <VideoTestimonial videoSrc="partner-video1.mp4" thumbnailSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" title="Growing My Business" name="Rachel Torres" role="Yoga Instructor" />
            <VideoTestimonial videoSrc="partner-video2.mp4" thumbnailSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" title="Corporate Partnerships" name="Mark Johnson" role="Fitness Trainer" />
            <VideoTestimonial videoSrc="partner-video3.mp4" thumbnailSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c" title="Virtual Training Success" name="Anna Lee" role="Nutritionist" />
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-4 md:p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Partner FAQs</h3>
            <Accordion type="single" collapsible className="w-full">
              {partnerFaqs.map((faq, index) => <AccordionItem key={index} value={`partner-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="py-2 text-gray-700">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Wellness Business?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join our network of wellness providers and start connecting with corporate clients seeking your expertise.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Apply to Join</Link>
            <Link to="/academy" className="btn-outline">Explore Our Academy</Link>
          </div>
        </div>
      </section>
    </div>;
};
export default ForProviders;