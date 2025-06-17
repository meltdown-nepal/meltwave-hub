import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Package, ArrowRight, CheckCircle, Users, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LogoCarousel from '../components/LogoCarousel';
import VideoTestimonial from '../components/VideoTestimonial';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import CompanySuccessStoriesSection from "../components/companies/CompanySuccessStoriesSection";

// Trusted Companies Logos
const trustedCompanies = [{
  id: 1,
  src: "/lovable-uploads/leapfrog.png",
  alt: "Leapfrog Technology"
}, {
  id: 2,
  src: "/lovable-uploads/SecurityPal.png",
  alt: "Security Pal"
}, {
  id: 3,
  src: "/lovable-uploads/naamche.png",
  alt: "Naamche"
}, {
  id: 4,
  src: "/lovable-uploads/flextecs.png",
  alt: "Flextecs"
}, {
  id: 5,
  src: "/lovable-uploads/YoungInnovations.png",
  alt: "Young Innovations"
}, {
  id: 6,
  src: "/lovable-uploads/HimalayanJava.png",
  alt: "Himalayan Java"
}, {
  id: 7,
  src: "/lovable-uploads/GolchhaGroup.png",
  alt: "Golchha Group"
}, {
  id: 8,
  src: "/lovable-uploads/ottr.png",
  alt: "Ottr"
}, {
  id: 9,
  src: "/lovable-uploads/OwlDigital.png",
  alt: "Owl Digital"
}, {
  id: 10,
  src: "/lovable-uploads/shanker.png",
  alt: "Shanker"
}, {
  id: 11,
  src: "/lovable-uploads/KingsCollege.png",
  alt: "Kings College"
}, {
  id: 12,
  src: "/lovable-uploads/Veda.png",
  alt: "Veda"
}, {
  id: 13,
  src: "/lovable-uploads/CodingMountain.png",
  alt: "Coding Mountain"
}, {
  id: 14,
  src: "/lovable-uploads/JagadambaMotors.png",
  alt: "Jagadamba Motors"
}, {
  id: 15,
  src: "/lovable-uploads/KavyaSports.png",
  alt: "Kavya Sports"
}, {
  id: 16,
  src: "/lovable-uploads/Stalwart.png",
  alt: "Stalwart"
}, {
  id: 17,
  src: "/lovable-uploads/WeBajraStudio.png",
  alt: "We Bajra Studio"
}, {
  id: 18,
  src: "/lovable-uploads/e3eb0025-e6fd-41c8-8f07-efb1d04c635b.png",
  alt: "CloudFactory"
}];

// FAQ Data
const companyFaqs = [{
  question: "How quickly can we implement a wellness program?",
  answer: "We can have your program up and running within 1 week, depending on your company's size and specific needs. Our team handles all aspects of implementation, from initial assessment to employee onboarding."
}, {
  question: "What ROI can we expect?",
  answer: "Companies typically see a 3:1 return on investment within the first year through reduced healthcare costs, increased productivity, and improved employee retention."
}, {
  question: "How do you measure program success?",
  answer: "We provide comprehensive analytics tracking key metrics like participation rates, health outcomes, employee satisfaction, and cost savings. Regular reports help you understand the program's impact."
}];

// Success Stories
const successStories = [{
  title: "Meltdown has brought a jolly spirit to our workplace, making every day feel more positive and energizing.",
  name: "Jyoti Pokharel",
  role: "HR Director, LeapFrog Technology",
  linkTo: "https://www.instagram.com/p/DFP4tBFTzbC/"
}, {
  title: "I used to lack motivation and dread going to the same fitness center, but Meltdown completely changed that with its uplifting vibe.",
  name: "Bibha Tandukar",
  role: "Project Manager,Young Innovation",
  linkTo: "https://www.instagram.com/p/DG-wZ4HIpLs/"
}, {
  title: "Meltdown's fresh approach to the fitness market and its diverse features have reignited my motivation.",
  name: "Pabin Karki",
  role: "CEO,Kaya Sports",
  linkTo: "https://www.instagram.com/p/DGa0GjtzQCn/"
}];
const ForCompanies = () => {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    scrollToSection
  } = useSmoothScroll();
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
                Wellness Solutions for Companies
              </h1>
              <p className="text-lg mb-8">
                Create a healthier, more productive workplace with customized wellness programs that meet your company's specific needs and goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/schedule-demo" className="btn-primary">Schedule a Demo</Link>
                <button onClick={() => scrollToSection('testimonials')} className="btn-outline">
                  Hear From Our Clients
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img alt="Corporate wellness workshop with employees learning about workplace health" className="rounded-lg shadow-xl max-w-full h-auto md:max-w-md lg:max-w-lg object-cover" src="/lovable-uploads/86d05d1c-7428-462e-bf36-6ed0b24be2d1.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <LogoCarousel logos={trustedCompanies} title="Trusted by Leading Companies" description="We're proud to partner with forward-thinking companies who prioritize wellness." />

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

      {/* How It Works Section - Updated to match image */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-amber-600 bg-yellow-100 rounded-none">
              HOW IT WORKS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Steps to Healthier Employees</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get your team started with comprehensive wellness in just a few easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left side - Steps */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Investment</h3>
                  <p className="text-gray-600">
                    Make an annual investment per employee (minimum 5 employees). This unlocks access to our comprehensive wellness platform for your entire team.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Custom App Setup</h3>
                  <p className="text-gray-600">
                    We create a personalized Meltdown app for your company. Employees can explore services, track progress, and join wellness challenges.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Employee Choice</h3>
                  <p className="text-gray-600">Team members choose from Basic, Gold, or Platinum packages - all heavily subsidized thanks to your investment.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Track & Measure</h3>
                  <p className="text-gray-600">
                    Get real-time insights through your HR dashboard with participation data, engagement reports, and wellness trends across departments.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Package Options Card */}
            <div className="bg-white rounded-lg p-6 shadow-xl px-4 relative">
              {/* View Details Button */}
              <Link to="/meltdown-pricing" className="absolute right-5 top-5">
                <Button variant="outline" className="!px-4 py-1 text-sm">Details</Button>
              </Link>
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center">
                  <Package className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-6">Package Options</h3>
              
              <div className="space-y-4">
                <div className="flex flex-col items-start p-3 bg-gray-50 rounded-lg py-[15px]">
                  <span className="font-medium text-base">Basic</span>
                  <span className="text-gray-600 text-sm mt-1">Gym Cardio & Group Fitness</span>
                </div>
                
                <div className="flex flex-col items-start p-3 bg-amber-50 rounded-lg border border-amber-200 py-[15px]">
                  <span className="font-medium text-base">Gold</span>
                  <span className="text-gray-600 text-sm mt-1">+ Golfing, Yoga, Rock Climbing, Boxing, Dance Classes</span>
                </div>
                
                <div className="flex flex-col items-start p-3 bg-blue-50 rounded-lg border border-blue-200 py-[15px]">
                  <span className="font-medium text-base">Platinum</span>
                  <span className="text-gray-600 text-sm mt-1">+ Swimming, Mental Health and many more</span>
                </div>
              </div>
              
              
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/schedule-demo" className="btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories & Testimonials - redesigned */}
      <CompanySuccessStoriesSection />

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Find answers to common questions about implementing our wellness solutions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg  p-4 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {companyFaqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
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
    </div>;
};
export default ForCompanies;