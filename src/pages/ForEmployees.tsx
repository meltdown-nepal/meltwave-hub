import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TestimonialsSection from '@/components/TestimonialsSection';

// Employee testimonials
const employeeTestimonials = [{
  videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  title: "Gym consistency was a struggle. Having multiple fitness centers to choose from made it so much easier.",
  name: "Chiring Sherpa",
  role: "Software Developer"
}, {
  videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  title: "I used to lack motivation and dread going to the same fitness center, but Meltdown completely changed that with its uplifting vibe.",
  name: "Prashant Shrestha",
  role: "Marketing Specialist"
}, {
  videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  title: "Partnering with Meltdown has helped me build a more positive mindset around fitness.",
  name: "Prashant Shrestha",
  role: "Project Manager"
}, {
  videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  title: "I used to lack motivation and dread going to the same fitness center, but Meltdown completely changed that with its uplifting vibe.",
  name: "Bibha Tandukar",
  role: "Yoga Instructor"
}];

// Partner testimonials
const partnerTestimonials = [{
  videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  title: "Growing My Business",
  name: "Rachel Torres",
  role: "Yoga Instructor"
}, {
  videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  title: "Corporate Partnerships",
  name: "Mark Johnson",
  role: "Fitness Trainer"
}, {
  videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
  title: "Virtual Training Success",
  name: "Anna Lee",
  role: "Nutritionist"
}];
const EmployeeFaqs = [{
  question: "How do I access the wellness services?",
  answer: "Simply log in to our platform using your company credentials. You'll have immediate access to all wellness services, scheduling tools, and resources."
}, {
  question: "Can I participate during work hours?",
  answer: "Most companies allow flexibility for wellness activities. Check with your HR department about your company's specific policies."
}, {
  question: "Are the services confidential?",
  answer: "Yes, all individual wellness activities and health information are completely confidential and protected by HIPAA regulations."
}];
const ForEmployees = () => {
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
                Wellness That Works For You
              </h1>
              <p className="text-lg mb-8">
                Access high-quality wellness programs designed to help you thrive both personally and professionally. Improve your health, reduce stress, and enhance your work-life balance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/schedule-demo" className="btn-primary">Get Started</Link>
                <Link to="/meltfit" className="btn-outline">Explore MeltFit</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img alt="Employee Wellness" className="rounded-lg shadow-xl max-w-full h-auto" src="/lovable-uploads/471e4a35-9cef-4248-a8c7-bd276fadf115.jpg" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How You Benefit</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our programs are designed to help you achieve balance, well-being, and success in all areas of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-heart-pulse"><path d="M19 14V6"></path><path d="M14 9h10"></path><path d="M21 17h-2.5a2 2 0 0 0-1.5.7l-1.7 2.6a2 2 0 0 1-3.3 0l-1.7-2.6a2 2 0 0 0-3.3 0l-1.7 2.6a2 2 0 0 1-3.3 0L1 17.8"></path><path d="M5 6a1 1 0 0 0-1 1v3.7a1 1 0 0 0 .4.8L9 15"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Accessibility</h3>
              <p>Visit any center any day accordingly to your timing 
            </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 0-4.96.44 2.5 2.5 0 0 0-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 0 1.32-4.24 2.5 2.5 0 0 0 1.98-3A2.5 2.5 0 0 0 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Variety</h3>
              <p>Try different activities and find what you love 
            </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-coins"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Affordability</h3>
              <p>You company subsidizes a portion of your subscription 
            </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 1 0 7.75"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Challenges</h3>
              <p>Compete with your friends and win rewards 
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Employee Wellness Programs</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Comprehensive solutions designed to support your total well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-dumbbell"><path d="m6.5 6.5 11 11"></path><path d="m21 21-1-1"></path><path d="m3 3 1 1"></path><path d="m18 22 4-4"></path><path d="m2 6 4-4"></path><path d="m3 10 7-7"></path><path d="m14 21 7-7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold">MeltFit Physical Training</h3>
              </div>
              <p className="mb-4">
                Our signature fitness program includes personalized workout plans, group fitness classes, ergonomic assessments, and nutrition guidance to help you achieve your physical health goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Personal fitness assessments</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Virtual and in-person workout options</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Nutritional guidance and meal planning</span>
                </li>
              </ul>
              <Link to="/meltfit" className="text-secondary font-bold hover:underline">
                Learn more about MeltFit →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-brain"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 0-4.96.44 2.5 2.5 0 0 0-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 0 1.32-4.24 2.5 2.5 0 0 0 1.98-3A2.5 2.5 0 0 0 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold">Mental Wellness Program</h3>
              </div>
              <p className="mb-4">
                Comprehensive mental health support including stress management workshops, mindfulness training, resilience building, and access to mental health resources.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Guided meditation sessions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Stress management techniques</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Access to mental health counseling</span>
                </li>
              </ul>
              <Link to="/events" className="text-secondary font-bold hover:underline">
                View upcoming workshops →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <h3 className="text-2xl font-bold">Work-Life Balance</h3>
              </div>
              <p className="mb-4">
                Programs designed to help you create harmony between your professional and personal life, including time management, boundary setting, and productivity strategies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Time management workshops</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Productivity and focus techniques</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Boundary-setting strategies</span>
                </li>
              </ul>
              
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
                </div>
                <h3 className="text-2xl font-bold">Professional Development</h3>
              </div>
              <p className="mb-4">
                Enhance your career growth with skill development workshops, leadership training, and career coaching to help you achieve your professional goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Leadership development</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Skill-building workshops</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFD838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-check mr-2 flex-shrink-0 mt-1"><path d="M20 6 9 17l-5-5"></path></svg>
                  <span>Career coaching and planning</span>
                </li>
              </ul>
              <Link to="/academy" className="text-secondary font-bold hover:underline">
                Explore professional development options →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness Partners Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-amber-100 rounded-full text-amber-700 font-medium text-sm">PARTNERS</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Partner Success Stories</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Learn from wellness professionals who have grown their business with us.
            </p>
          </div>

          {/* Desktop view (grid) */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partnerTestimonials.map((testimonial, index) => <Card key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0">
                <div className="p-6">
                  <h4 className="font-medium text-lg mb-3 italic">"{testimonial.title}"</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 border-amber-300 hover:bg-amber-50 text-amber-700" onClick={() => handleVideoClick(testimonial.videoSrc)}>
                      <Play className="h-4 w-4" />
                      Watch Video
                    </Button>
                  </div>
                </div>
              </Card>)}
          </div>

          {/* Mobile view (list) */}
          <div className="md:hidden space-y-6">
            {partnerTestimonials.map((testimonial, index) => <Card key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0">
                <div className="p-6">
                  <h4 className="font-medium text-lg mb-3 italic">"{testimonial.title}"</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 border-amber-300 hover:bg-amber-50 text-amber-700" onClick={() => handleVideoClick(testimonial.videoSrc)}>
                      <Play className="h-4 w-4" />
                      Watch Video
                    </Button>
                  </div>
                </div>
              </Card>)}
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-4 md:p-8 mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Partner FAQs</h3>
            <Accordion type="single" collapsible className="w-full">
              {EmployeeFaqs.map((faq, index) => <AccordionItem key={index} value={`partner-${index}`}>
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

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={employeeTestimonials} />

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Well-being?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Talk to your employer about Meltdown wellness programs or contact us directly to learn how you can participate.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/schedule-demo" className="btn-primary">Contact Us</Link>
            <Link to="/events" className="btn-outline">Explore Upcoming Events</Link>
          </div>
        </div>
      </section>
    </div>;
};
export default ForEmployees;
