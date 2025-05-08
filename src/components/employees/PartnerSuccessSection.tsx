
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

// Employee FAQs
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

const PartnerSuccessSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleVideoClick = (videoUrl: string) => {
    setIsLoading(true);
    setSelectedVideo(videoUrl);
  };
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Success Stories</h2>
          <p className="text-lg max-w-3xl mx-auto">
            See how wellness providers are growing their business through our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partnerTestimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{testimonial.title}</h3>
                <p className="mb-4">{testimonial.name}</p>
                <p className="text-gray-600 mb-6">{testimonial.role}</p>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => handleVideoClick(testimonial.videoSrc || "")}
                >
                  <Play className="h-4 w-4" /> Watch Video
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            {EmployeeFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Video Dialog */}
        <Dialog open={!!selectedVideo} onOpenChange={() => {
          setSelectedVideo(null);
          setIsLoading(false);
        }}>
          <DialogContent className="sm:max-w-4xl p-1 bg-black rounded-lg">
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
                className={`w-full rounded ${isLoading ? 'hidden' : 'block'}`}
                onCanPlay={() => setIsLoading(false)}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PartnerSuccessSection;
