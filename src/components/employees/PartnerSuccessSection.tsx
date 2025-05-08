
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Partner testimonials
const partnerTestimonials = [
  {
    videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
    title: "Growing My Business",
    name: "Rachel Torres",
    role: "Yoga Instructor"
  }, 
  {
    videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
    title: "Corporate Partnerships",
    name: "Mark Johnson",
    role: "Fitness Trainer"
  }, 
  {
    videoSrc: "https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4",
    title: "Virtual Training Success",
    name: "Anna Lee",
    role: "Nutritionist"
  }
];

// Employee FAQs
const EmployeeFaqs = [
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

const PartnerSuccessSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVideoClick = (videoUrl: string) => {
    setIsLoading(true);
    setSelectedVideo(videoUrl);
  };

  return (
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
          {partnerTestimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0">
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
            </Card>
          ))}
        </div>

        {/* Mobile view (list) */}
        <div className="md:hidden space-y-6">
          {partnerTestimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0">
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
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-4 md:p-8 mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Partner FAQs</h3>
          <Accordion type="single" collapsible className="w-full">
            {EmployeeFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`partner-${index}`}>
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
        
        {/* Video Dialog */}
        <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
          <DialogContent className="sm:max-w-[800px]">
            {selectedVideo && (
              <video 
                controls 
                autoPlay
                className="w-full"
                onCanPlay={() => setIsLoading(false)}
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {isLoading && <div className="text-center py-10">Loading video...</div>}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PartnerSuccessSection;
