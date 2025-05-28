
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CorporateFaqsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const corporateFaqs = [
  {
    question: "What is Meltdown's corporate wellness platform?",
    answer: "Meltdown's corporate wellness platform is a comprehensive solution designed to help companies build an active work culture by providing employees access to multiple wellness services under one membership, while gamifying the entire experience to boost engagement and participation."
  },
  {
    question: "How does Meltdown benefit companies?",
    answer: "Meltdown helps companies by increasing employee productivity, reducing healthcare costs, improving employee retention, boosting morale, and creating a positive workplace culture. Our platform provides measurable ROI through detailed analytics and engagement metrics."
  },
  {
    question: "What types of wellness services are included?",
    answer: "Our platform includes fitness classes, nutrition coaching, mental health resources, mindfulness sessions, yoga, pilates, strength training, wellness challenges, health screenings, and access to certified wellness professionals."
  },
  {
    question: "How does the gamification aspect work?",
    answer: "We use points, badges, leaderboards, team challenges, and achievement tracking to make wellness engaging. Employees earn rewards for participating in activities, completing challenges, and reaching personal health goals."
  },
  {
    question: "Can the platform be customized for our company?",
    answer: "Yes, absolutely. We work with each company to tailor the wellness program to their specific needs, company culture, budget, and employee preferences. This includes custom branding, specific wellness focus areas, and integration with existing benefits."
  },
  {
    question: "What is the implementation process?",
    answer: "Implementation typically takes 2-4 weeks and includes: initial consultation, platform customization, employee onboarding materials, training sessions, and ongoing support. We handle the technical setup while you focus on employee communication."
  },
  {
    question: "How do you measure success and ROI?",
    answer: "We provide comprehensive analytics including participation rates, engagement metrics, health outcome improvements, employee satisfaction scores, and healthcare cost savings. Regular reports help track progress toward your wellness goals."
  },
  {
    question: "What support do you provide?",
    answer: "We offer dedicated account management, technical support, employee helpdesk, regular check-ins, platform updates, and ongoing optimization recommendations to ensure your program's success."
  },
  {
    question: "Is there a minimum company size requirement?",
    answer: "We work with companies of all sizes, from startups with 10 employees to large enterprises with thousands. Our platform scales to meet your needs and budget requirements."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing is customized based on company size, selected services, and program duration. We offer flexible pricing models including per-employee monthly rates and annual packages. Contact us for a personalized quote."
  }
];

const CorporateFaqsModal: React.FC<CorporateFaqsModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Corporate FAQs
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-gray-600 text-center mb-6">
            Find answers to frequently asked questions about our corporate wellness solutions.
          </p>
          
          <Accordion type="single" collapsible className="w-full">
            {corporateFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium hover:no-underline">
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
      </DialogContent>
    </Dialog>
  );
};

export default CorporateFaqsModal;
