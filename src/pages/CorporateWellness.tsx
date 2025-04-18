import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import VideoTestimonial from '@/components/VideoTestimonial';

const CorporateWellness = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Corporate Wellness Solutions
              </h1>
              <p className="text-lg mb-8">
                Comprehensive wellness programs tailored to your company's unique needs and goals. Boost productivity, improve morale, and reduce healthcare costs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Get Started</Link>
                <Link to="/companies" className="btn-outline">For Companies</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Corporate Wellness" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Meltdown Advantage</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our corporate wellness solutions are designed to create lasting change within your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-bar-chart-3"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Increased Productivity</h3>
              <p>
                Employees who engage in wellness programs show improved focus, energy, and overall performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-heart-pulse"><path d="M19 14V6"></path><path d="M14 9h10"></path><path d="M21 17h-2.5a2 2 0 0 0-1.5.7l-1.7 2.6a2 2 0 0 1-3.3 0l-1.7-2.6a2 2 0 0 0-3.3 0l-1.7 2.6a2 2 0 0 1-3.3 0L1 17.8"></path><path d="M5 6a1 1 0 0 0-1 1v3.7a1 1 0 0 0 .4.8L9 15"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reduced Healthcare Costs</h3>
              <p>
                Preventative wellness programs can lower healthcare expenses and reduce absenteeism.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Retention</h3>
              <p>
                Wellness programs demonstrate investment in employees, improving morale and reducing turnover.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Advantage</h3>
              <p>
                Stand out in recruitment and build a positive company culture known for valuing employee wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Companies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">For Companies</h2>
          
          <Accordion type="single" collapsible className="mb-12">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How quickly can we implement a wellness program?
              </AccordionTrigger>
              <AccordionContent>
                We can have your program up and running within 2-4 weeks, depending on your company's size and specific needs. Our team handles all aspects of implementation, from initial assessment to employee onboarding.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                What ROI can we expect from implementing a wellness program?
              </AccordionTrigger>
              <AccordionContent>
                Companies typically see a 3:1 return on investment within the first year, through reduced healthcare costs, increased productivity, and improved employee retention.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                How do you measure program success?
              </AccordionTrigger>
              <AccordionContent>
                We provide comprehensive analytics tracking key metrics like participation rates, health outcomes, employee satisfaction, and cost savings. Regular reports help you understand the program's impact.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <VideoTestimonial 
              videoSrc="video1.mp4"
              thumbnailSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              title="Transformed Our Company Culture"
              name="Sarah Chen"
              role="HR Director, TechCorp"
            />
            <VideoTestimonial 
              videoSrc="video2.mp4"
              thumbnailSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              title="Measurable Health Improvements"
              name="Michael Rodriguez"
              role="CEO, HealthFirst Inc"
            />
            <VideoTestimonial 
              videoSrc="video3.mp4"
              thumbnailSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              title="Significant Cost Savings"
              name="Emily Thompson"
              role="CFO, Global Solutions"
            />
          </div>
        </div>
      </section>

      {/* For Employees Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">For Employees</h2>
          
          <Accordion type="single" collapsible className="mb-12">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What wellness services are available to me?
              </AccordionTrigger>
              <AccordionContent>
                You have access to a wide range of services including fitness classes, nutrition coaching, mental health support, and wellness workshops. All services can be accessed both in-person and virtually.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How do I get started with the program?
              </AccordionTrigger>
              <AccordionContent>
                Simply sign up through your company's wellness portal. You'll then complete a brief wellness assessment and can immediately start booking services and accessing resources.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Can I participate in wellness activities during work hours?
              </AccordionTrigger>
              <AccordionContent>
                Many companies allow for flexible scheduling to accommodate wellness activities. Check with your HR department about your company's specific policies.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <VideoTestimonial 
              videoSrc="video4.mp4"
              thumbnailSrc="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              title="Found Work-Life Balance"
              name="David Kim"
              role="Software Engineer"
            />
            <VideoTestimonial 
              videoSrc="video5.mp4"
              thumbnailSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              title="Mental Health Support"
              name="Lisa Garcia"
              role="Project Manager"
            />
            <VideoTestimonial 
              videoSrc="video6.mp4"
              thumbnailSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              title="Physical Wellness Journey"
              name="James Wilson"
              role="Sales Director"
            />
          </div>
        </div>
      </section>

      {/* For Fitness Partners Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">For Fitness Partners</h2>
          
          <Accordion type="single" collapsible className="mb-12">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                How can I become a wellness provider?
              </AccordionTrigger>
              <AccordionContent>
                Apply through our partner portal. We'll review your qualifications, certifications, and experience. Once approved, you can start offering services to our corporate clients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                What types of services are in demand?
              </AccordionTrigger>
              <AccordionContent>
                High-demand services include fitness training, nutrition coaching, mindfulness sessions, and stress management workshops. Both virtual and in-person services are needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                How does payment and scheduling work?
              </AccordionTrigger>
              <AccordionContent>
                Our platform handles all scheduling and payments. You set your availability, and payments are processed automatically after each session. We typically pay providers bi-weekly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <VideoTestimonial 
              videoSrc="video7.mp4"
              thumbnailSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              title="Growing My Business"
              name="Rachel Torres"
              role="Yoga Instructor"
            />
            <VideoTestimonial 
              videoSrc="video8.mp4"
              thumbnailSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              title="Corporate Partnerships"
              name="Mark Johnson"
              role="Fitness Trainer"
            />
            <VideoTestimonial 
              videoSrc="video9.mp4"
              thumbnailSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              title="Virtual Training Success"
              name="Anna Lee"
              role="Nutritionist"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create a Healthier Workplace?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Our team of wellness experts is ready to help you design and implement a program that meets your company's unique needs and goals.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link to="/companies" className="btn-outline">Learn About Our Company Solutions</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateWellness;
