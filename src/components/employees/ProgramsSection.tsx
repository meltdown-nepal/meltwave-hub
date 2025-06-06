
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import OptimizedImage from '../OptimizedImage';

interface ProgramProps {
  title: string;
  description: string;
  imageUrl: string;
  benefits: string[];
}

const programs: Record<string, ProgramProps[]> = {
  fitness: [
    {
      title: "MeltFit Access",
      description: "Access to multiple fitness centers through a single membership.",
      imageUrl: "/lovable-uploads/30f61b7c-2119-402c-9a49-c5f940a79247.png",
      benefits: [
        "Multiple fitness centers",
        "Flexible scheduling",
        "No long-term contracts",
        "Track your progress"
      ]
    },
    {
      title: "Corporate Fitness Challenges",
      description: "Engaging team-based fitness competitions with rewards.",
      imageUrl: "/lovable-uploads/547fbeca-a702-4751-89c3-c305cd703c61.jpg",
      benefits: [
        "Team building",
        "Motivating rewards", 
        "Health tracking",
        "Friendly competition"
      ]
    }
  ],
  nutrition: [
    {
      title: "Personalized Nutrition Plans",
      description: "Custom nutrition guidance tailored to your personal health goals.",
      imageUrl: "/lovable-uploads/471e4a35-9cef-4248-a8c7-bd276fadf115.jpg",
      benefits: [
        "Customized meal plans",
        "Expert nutritionist guidance",
        "Regular check-ins",
        "Adaptable to dietary restrictions"
      ]
    },
    {
      title: "Workplace Healthy Eating",
      description: "Healthy food options and nutrition education in your workplace.",
      imageUrl: "/lovable-uploads/b0ae0d98-83cf-4c33-9a90-cbe1b92c5a8e.jpg",
      benefits: [
        "Better food choices at work",
        "Nutrition workshops",
        "Group cooking classes",
        "Healthy snack options"
      ]
    }
  ],
  mental: [
    {
      title: "Stress Management",
      description: "Tools and techniques to manage workplace stress effectively.",
      imageUrl: "/lovable-uploads/b4d593d4-69e8-4ab7-a1df-4d8d5371874b.jpg",
      benefits: [
        "Meditation sessions",
        "Stress-reduction workshops",
        "Mental health resources",
        "Work-life balance guidance"
      ]
    },
    {
      title: "Mental Wellness Coaching",
      description: "One-on-one sessions with professional mental wellness coaches.",
      imageUrl: "/lovable-uploads/146c33ba-fd46-45de-9faa-e6b33ca16566.jpg",
      benefits: [
        "Private coaching sessions",
        "Personalized strategies",
        "Progress tracking",
        "Ongoing support"
      ]
    }
  ]
};

const ProgramsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wellness Programs Available To You</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Explore the variety of wellness programs available through your employer's partnership with Meltdown.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.fitness.map((program, index) => (
            <Card key={`fitness-${index}`} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <OptimizedImage
                  src={program.imageUrl}
                  alt={program.title}
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="mb-4 text-gray-600">{program.description}</p>
                <ul className="space-y-2">
                  {program.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
          
          {programs.nutrition.concat(programs.mental).map((program, index) => (
            <Card key={`other-${index}`} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <OptimizedImage
                  src={program.imageUrl}
                  alt={program.title}
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="mb-4 text-gray-600">{program.description}</p>
                <ul className="space-y-2">
                  {program.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2"><path d="M20 6 9 17l-5-5"/></svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
