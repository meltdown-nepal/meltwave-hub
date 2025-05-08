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
  return;
};
export default PartnerSuccessSection;