
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building2, Users, HandHeart, Dumbbell, Play } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
  icon: React.ComponentType<{ className?: string }>;
};

const faqs: FaqItem[] = [
  {
    question: "How does Meltdown benefit companies?",
    answer: "Meltdown helps companies implement effective wellness programs that boost productivity, reduce turnover, and create a positive workplace culture. Our comprehensive platform connects businesses with top wellness providers to create tailored programs for employees.",
    icon: Building2
  },
  {
    question: "What services do you offer for employees?",
    answer: "Employees gain access to high-quality wellness programs including fitness classes, nutrition coaching, mindfulness sessions, and mental health resources. Our platform makes it easy to participate and track progress, helping you stay healthy, reduce stress, and improve work-life balance.",
    icon: Users
  },
  {
    question: "How can wellness providers partner with Meltdown?",
    answer: "Wellness providers can join our platform to connect with companies seeking specific expertise and services. This helps you grow your business by accessing corporate clients you might not reach otherwise. Our platform handles scheduling, payments, and client management, letting you focus on delivering exceptional services.",
    icon: HandHeart
  },
  {
    question: "What makes MeltFit training programs different?",
    answer: "MeltFit training programs are designed by industry experts and personalized to individual needs and goals. Our programs combine physical fitness, nutrition guidance, and mental wellbeing approaches for comprehensive wellness that fits into busy schedules.",
    icon: Dumbbell
  },
  {
    question: "How do I get started with Meltdown?",
    answer: "Getting started is easy! Simply contact us through the form on our website, and one of our wellness consultants will reach out to discuss your specific needs and guide you through the onboarding process. Whether you're a company, employee, or provider, we'll help you find the perfect solution.",
    icon: Play
  }
];

const FaqSection = () => {
  return (
    <section className="section-padding" id="faq">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Find answers to common questions about our wellness platform and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-4 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-yellow-600" />
                      </div>
                      <span className="flex-1">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="ml-11">
                      <p className="py-2 text-gray-700">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
