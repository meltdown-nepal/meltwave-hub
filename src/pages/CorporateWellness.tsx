
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import VideoTestimonial from '@/components/VideoTestimonial';

// FAQ Data
const companyFaqs = [
  {
    question: "How quickly can we implement a wellness program?",
    answer: "We can have your program up and running within 2-4 weeks, depending on your company's size and specific needs. Our team handles all aspects of implementation, from initial assessment to employee onboarding."
  },
  {
    question: "What ROI can we expect?",
    answer: "Companies typically see a 3:1 return on investment within the first year through reduced healthcare costs, increased productivity, and improved employee retention."
  },
  {
    question: "How do you measure program success?",
    answer: "We provide comprehensive analytics tracking key metrics like participation rates, health outcomes, employee satisfaction, and cost savings. Regular reports help you understand the program's impact."
  }
];

const employeeFaqs = [
  {
    question: "How do I access the wellness services?",
    answer: "Simply log in to our platform using your company credentials. You'll have immediate access to all wellness services, scheduling tools, and resources."
  },
  {
    question: "Can I participate during work hours?",
    answer: "Most companies allow flexibility for wellness activities. Check with your HR department about your company's specific policies."
  },
  {
    question: "Are the services confidential?",
    answer: "Yes, all individual wellness activities and health information are completely confidential and protected by HIPAA regulations."
  }
];

const partnerFaqs = [
  {
    question: "How do I become a wellness provider?",
    answer: "Submit your application through our partner portal. We'll review your qualifications and certifications, and guide you through the onboarding process."
  },
  {
    question: "What types of services are in demand?",
    answer: "High-demand services include fitness training, nutrition coaching, mindfulness sessions, and stress management workshops. Both virtual and in-person services are needed."
  },
  {
    question: "How does payment work?",
    answer: "We handle all payment processing. You'll receive bi-weekly payments for services rendered, with detailed reporting and analytics."
  }
];

const CorporateWellness = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Corporate Wellness Solutions
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-8">
            Comprehensive wellness programs tailored to your company's unique needs and goals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom pb-16">
        <Accordion type="single" collapsible className="space-y-6">
          {/* For Companies Section */}
          <AccordionItem value="companies" className="bg-white rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-2xl font-semibold">For Companies</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              {/* Companies FAQ */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible>
                  {companyFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`company-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Companies Success Stories */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </AccordionContent>
          </AccordionItem>

          {/* For Employees Section */}
          <AccordionItem value="employees" className="bg-white rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-2xl font-semibold">For Employees</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              {/* Employees FAQ */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible>
                  {employeeFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`employee-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Employees Success Stories */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </AccordionContent>
          </AccordionItem>

          {/* For Fitness Partners Section */}
          <AccordionItem value="partners" className="bg-white rounded-lg shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-2xl font-semibold">For Fitness Partners</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              {/* Partners FAQ */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible>
                  {partnerFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`partner-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Partners Success Stories */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Success Stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default CorporateWellness;
