import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, Package, ArrowRight, CheckCircle, Users, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import LogoCarousel from '../components/LogoCarousel';
import VideoTestimonial from '../components/VideoTestimonial';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

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

      {/* How It Works - Redesigned for Better Engagement */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-100/30 to-orange-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container-custom relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full text-blue-700 font-semibold text-sm uppercase tracking-wide bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 shadow-lg">
              <Zap className="w-4 h-4" />
              How It Works
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Transform Your Workplace
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                In 4 Simple Steps
              </span>
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
              From investment to implementation, we'll guide you through creating a comprehensive wellness program that your employees will love
            </p>
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-20">
            {/* Left side - Interactive Steps */}
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  icon: Users,
                  title: "Make Your Investment",
                  description: "Invest annually per employee (minimum 5 employees) to unlock our comprehensive wellness ecosystem for your entire team.",
                  highlight: "Starting from just $200/employee/year",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  number: "02",
                  icon: Zap,
                  title: "Custom App Creation",
                  description: "We build a personalized Meltdown app branded for your company, complete with wellness tracking and team challenges.",
                  highlight: "Ready in 1-2 weeks",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  number: "03",
                  icon: Package,
                  title: "Employee Package Selection",
                  description: "Your team chooses from Basic, Gold, or Platinum packages—all subsidized at 40-50% below market rates.",
                  highlight: "Maximum flexibility, minimum cost",
                  color: "from-amber-500 to-orange-500"
                },
                {
                  number: "04",
                  icon: BarChart3,
                  title: "Track Success & ROI",
                  description: "Monitor engagement, health outcomes, and cost savings through your dedicated HR dashboard with real-time analytics.",
                  highlight: "Measure what matters",
                  color: "from-green-500 to-emerald-600"
                }
              ].map((step, index) => (
                <div key={index} className="group relative">
                  <div className="flex gap-6 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    {/* Step Number & Icon */}
                    <div className="flex-shrink-0 relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className="text-white w-8 h-8" strokeWidth={2.5} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200/50">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-medium text-gray-700">{step.highlight}</span>
                      </div>
                    </div>
                    
                    {/* Arrow connector (hidden on last item) */}
                    {index < 3 && (
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden">
                        <ArrowRight className="w-6 h-6 text-gray-300 rotate-90" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right side - Interactive Visual */}
            <div className="lg:pl-12">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <Package className="text-white w-10 h-10" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Wellness Packages</h3>
                      <p className="text-gray-600">Choose what fits your lifestyle</p>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { name: "Basic", features: "Gym & Group Fitness", price: "40% Off", color: "border-gray-200 bg-gray-50" },
                        { name: "Gold", features: "+ Golf, Yoga, Rock Climbing", price: "45% Off", color: "border-amber-200 bg-amber-50" },
                        { name: "Platinum", features: "+ Swimming, Mental Health, Pilates", price: "50% Off", color: "border-blue-200 bg-blue-50" }
                      ].map((pkg, index) => (
                        <div key={index} className={`p-4 rounded-xl border-2 ${pkg.color} transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}>
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-bold text-gray-900">{pkg.name}</h4>
                              <p className="text-sm text-gray-600">{pkg.features}</p>
                            </div>
                            <div className="text-right">
                              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                                {pkg.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                          <p className="text-lg font-bold text-green-800">Significant Savings</p>
                        </div>
                        <p className="text-sm text-green-700">All packages heavily subsidized by your company's investment</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">Join hundreds of companies already transforming their workplace wellness</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/schedule-demo" className="btn-primary inline-flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Get Custom Quote
                </Link>
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
            {successStories.map((story, index) => <VideoTestimonial key={index} title={story.title} name={story.name} role={story.role} linkTo={story.linkTo} />)}
          </div>

          {/* Mobile view (list) */}
          <div className="md:hidden space-y-6">
            {successStories.map((story, index) => <VideoTestimonial key={index} title={story.title} name={story.name} role={story.role} linkTo={story.linkTo} />)}
          </div>
          
          {/* Video Dialog */}
          <Dialog open={!!selectedVideo} onOpenChange={() => {
          setSelectedVideo(null);
          setIsLoading(false);
        }}>
            <DialogContent className="sm:max-w-4xl p-1 sm:p-2 bg-black rounded-lg border-none">
              {isLoading && <div className="flex justify-center items-center h-40 text-white">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
                </div>}
              {selectedVideo && <video src={selectedVideo} controls autoPlay className={`w-full rounded-lg ${isLoading ? 'hidden' : 'block'}`} onCanPlay={() => setIsLoading(false)}>
                  Your browser does not support the video tag.
                </video>}
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
