import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import LogoCarousel from '../components/LogoCarousel';

// Trusted Companies Logos
const trustedCompanies = [
  { id: 1, src: "/lovable-uploads/leapfrog.png", alt: "Leapfrog Technology" },
  { id: 2, src: "/lovable-uploads/SecurityPal.png", alt: "Security Pal" },
  { id: 3, src: "/lovable-uploads/naamche.png", alt: "Naamche" },
  { id: 4, src: "/lovable-uploads/flextecs.png", alt: "Flextecs" },
  { id: 5, src: "/lovable-uploads/YoungInnovations.png", alt: "Young Innovations" },
  { id: 6, src: "/lovable-uploads/HimalayanJava.png", alt: "Himalayan Java" },
  { id: 7, src: "/lovable-uploads/GolchhaGroup.png", alt: "Golchha Group" },
  { id: 8, src: "/lovable-uploads/ottr.png", alt: "Ottr" },
  { id: 9, src: "/lovable-uploads/OwlDigital.png", alt: "Owl Digital" },
  { id: 10, src: "/lovable-uploads/shanker.png", alt: "Shanker" },
  { id: 11, src: "/lovable-uploads/KingsCollege.png", alt: "Kings College" },
  { id: 12, src: "/lovable-uploads/Veda.png", alt: "Veda" },
  { id: 13, src: "/lovable-uploads/CodingMountain.png", alt: "Coding Mountain" },
  { id: 14, src: "/lovable-uploads/JagadambaMotors.png", alt: "Jagadamba Motors" },
  { id: 15, src: "/lovable-uploads/KavyaSports.png", alt: "Kavya Sports" },
  { id: 16, src: "/lovable-uploads/Stalwart.png", alt: "Stalwart" },
  { id: 17, src: "/lovable-uploads/WeBajraStudio.png", alt: "We Bajra Studio" }
];

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

// Success Stories
const successStories = [
  {
    videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
    title: "Transformed Our Company Culture",
    name: "Sarah Chen",
    role: "HR Director, TechCorp"
  },
  {
    videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
    title: "Measurable Health Improvements",
    name: "Michael Rodriguez",
    role: "CEO, HealthFirst Inc"
  },
  {
    videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
    title: "Significant Cost Savings",
    name: "Emily Thompson",
    role: "CFO, Global Solutions"
  }
];

const ForCompanies = () => {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleVideoClick = (videoUrl: string) => {
    setIsLoading(true);
    setSelectedVideo(videoUrl);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Wellness Solutions for Companies
              </h1>
              <p className="text-lg mb-8">
                Create a healthier, more productive workplace with customized wellness programs that meet your company's specific needs and goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/schedule-demo" className="btn-primary">Schedule a Demo</Link>
                <Link to="/corporate-wellness" className="btn-outline">Explore Our Programs</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/a48b3904-c6dd-43cc-b3e1-398362f1feae.png" 
                alt="Corporate wellness workshop with employees learning about workplace health" 
                className="rounded-lg shadow-xl max-w-full h-auto md:max-w-md lg:max-w-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <LogoCarousel 
        logos={trustedCompanies} 
        title="Trusted by Leading Companies" 
        description="We're proud to partner with forward-thinking companies who prioritize wellness."
      />

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Invest in Employee Wellness?</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Companies that prioritize wellness see significant improvements in multiple areas of business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Increased Productivity</h3>
              <p>
                Studies show that wellness programs can increase employee productivity by up to 20%, resulting in significant ROI for your business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Improved Retention</h3>
              <p>
                Companies with wellness programs report up to 40% lower turnover rates, saving significant recruitment and training costs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-piggy-bank"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2 0-.3-.5-1-1-1"></path><path d="M2 9v1c0 1.1.9 2 2 2h1"></path><path d="M16 11h0"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reduced Healthcare Costs</h3>
              <p>
                Effective wellness programs can reduce healthcare expenses by an average of $3.27 for every $1 spent on wellness initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Meltdown Works for Your Company</h2>
            <p className="text-lg max-w-3xl mx-auto">
              A simple, effective process to implement comprehensive wellness solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
                1
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">Assessment</h3>
                <p>
                  We evaluate your company's current wellness status and identify specific needs and goals.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
                2
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">Custom Program Design</h3>
                <p>
                  Our experts create a tailored wellness program aligned with your company's culture and objectives.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
                3
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">Implementation</h3>
                <p>
                  We handle all aspects of program rollout, from provider management to employee engagement.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold w-8 h-8 rounded-full flex items-center justify-center">
                4
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3">Ongoing Support</h3>
                <p>
                  We provide continuous monitoring, reporting, and program adjustments to ensure optimal results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Testimonials */}
      <section className="bg-gradient-to-br from-yellow-50 to-gray-50 section-padding" id="testimonials">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-amber-100 rounded-full text-amber-700 font-medium text-sm">SUCCESS STORIES</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hear From Our Clients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how companies have transformed their workplace wellness with our solutions
            </p>
          </div>

          {/* Desktop view (grid) */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {successStories.map((story, index) => (
              <Card 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0"
              >
                <div className="p-6">
                  <h4 className="font-medium text-lg mb-3 italic">"{story.title}"</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-white font-bold">
                        {story.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold">{story.name}</p>
                        <p className="text-sm text-gray-600">{story.role}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 border-amber-300 hover:bg-amber-50 text-amber-700" 
                      onClick={() => handleVideoClick(story.videoSrc)}
                    >
                      <Play className="h-4 w-4" />
                      Watch Video
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Mobile view (list) */}
          <div className="md:hidden space-y-6">
            {successStories.map((story, index) => (
              <Card 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0"
              >
                <div className="p-6">
                  <h4 className="font-medium text-lg mb-3 italic">"{story.title}"</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center text-white font-bold">
                        {story.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold">{story.name}</p>
                        <p className="text-sm text-gray-600">{story.role}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 border-amber-300 hover:bg-amber-50 text-amber-700" 
                      onClick={() => handleVideoClick(story.videoSrc)}
                    >
                      <Play className="h-4 w-4" />
                      Watch Video
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Video Dialog */}
          <Dialog open={!!selectedVideo} onOpenChange={() => {
            setSelectedVideo(null);
            setIsLoading(false);
          }}>
            <DialogContent className="sm:max-w-4xl p-1 sm:p-2 bg-black rounded-lg border-none">
              {isLoading && (
                <div className="flex justify-center items-center h-40 text-white">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
                </div>
              )}
              {selectedVideo && (
                <video 
                  src={selectedVideo}
                  controls
                  autoPlay
                  className={`w-full rounded-lg ${isLoading ? 'hidden' : 'block'}`}
                  onCanPlay={() => setIsLoading(false)}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Find answers to common questions about implementing our wellness solutions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-4 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {companyFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="py-2 text-gray-700">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workplace?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our team to discuss how Meltdown can create a customized wellness solution for your company.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
            <Link to="/corporate-wellness" className="btn-outline">Explore Our Programs</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForCompanies;
