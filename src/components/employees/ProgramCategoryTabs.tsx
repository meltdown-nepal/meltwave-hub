
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { icons } from "lucide-react";
import OptimizedImage from "../OptimizedImage";

// Category metadata for tab navigation & icons
const categories = [
  {
    key: "fitness",
    label: "Fitness",
    icon: "Dumbbell", // lucide-react icon
    color: "bg-primary"
  },
  {
    key: "nutrition",
    label: "Nutrition",
    icon: "Salad",
    color: "bg-secondary"
  },
  {
    key: "mental",
    label: "Mental Wellness",
    icon: "Brain",
    color: "bg-amber-200"
  },
];

// Program data (imported below)
const programs: Record<
  string,
  {
    title: string;
    description: string;
    imageUrl: string;
    benefits: string[];
  }[]
> = {
  fitness: [
    {
      title: "MeltFit Access",
      description: "Access to multiple fitness centers through a single membership.",
      imageUrl: "/lovable-uploads/30f61b7c-2119-402c-9a49-c5f940a79247.png",
      benefits: [
        "Multiple fitness centers",
        "Flexible scheduling",
        "No long-term contracts",
        "Track your progress",
      ],
    },
    {
      title: "Corporate Fitness Challenges",
      description: "Engaging team-based fitness competitions with rewards.",
      imageUrl: "/lovable-uploads/547fbeca-a702-4751-89c3-c305cd703c61.jpg",
      benefits: [
        "Team building",
        "Motivating rewards",
        "Health tracking",
        "Friendly competition",
      ],
    },
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
        "Adaptable to dietary restrictions",
      ],
    },
    {
      title: "Workplace Healthy Eating",
      description: "Healthy food options and nutrition education in your workplace.",
      imageUrl: "/lovable-uploads/b0ae0d98-83cf-4c33-9a90-cbe1b92c5a8e.jpg",
      benefits: [
        "Better food choices at work",
        "Nutrition workshops",
        "Group cooking classes",
        "Healthy snack options",
      ],
    },
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
        "Work-life balance guidance",
      ],
    },
    {
      title: "Mental Wellness Coaching",
      description: "One-on-one sessions with professional mental wellness coaches.",
      imageUrl: "/lovable-uploads/146c33ba-fd46-45de-9faa-e6b33ca16566.jpg",
      benefits: [
        "Private coaching sessions",
        "Personalized strategies",
        "Progress tracking",
        "Ongoing support",
      ],
    },
  ],
};

const LucideIcon = ({ name, className }: { name: string; className?: string }) => {
  const Icon = icons[name];
  return Icon ? <Icon className={className} /> : null;
};

const ProgramCategoryTabs: React.FC = () => {
  const [active, setActive] = useState("fitness");

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex justify-center gap-3 md:gap-8 mb-8 flex-wrap">
        {categories.map((cat) => (
          <Button
            key={cat.key}
            variant={active === cat.key ? "default" : "outline"}
            className={`relative px-6 py-2 rounded-full font-semibold shadow-none group text-black transition-all duration-150 border-none
              ${active === cat.key ? "" : "bg-white hover:bg-accent"}
            `}
            onClick={() => setActive(cat.key)}
          >
            <span
              className={`mr-2 flex items-center justify-center rounded-full w-6 h-6 ${cat.color} group-hover:scale-105 transition-transform`}
            >
              <LucideIcon name={cat.icon} />
            </span>
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Animated Category Section */}
      <div className="relative flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
          {programs[active].map((program, idx) => (
            <Card
              key={program.title}
              className="overflow-hidden shadow-xl border-none transition-all hover:scale-105 hover:shadow-2xl bg-white/95"
              style={{
                animation: `fadeIn .5s ease-in both`,
                animationDelay: `${0.04 * idx + 0.1}s`,
              }}
            >
              <div className="flex flex-col gap-0 h-full">
                <div className="relative w-full h-48 bg-gray-50 mb-4 overflow-hidden">
                  {/* Use the custom image if needed */}
                  <OptimizedImage
                    src={program.imageUrl}
                    alt={program.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col flex-1 px-5 pb-5">
                  <h3 className="text-xl font-bold mb-2 gradient-text">{program.title}</h3>
                  <p className="mb-3 text-gray-700">{program.description}</p>
                  <ul className="space-y-1 mb-2 text-sm">
                    {program.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-gray-900">
                        <LucideIcon name="CheckCircle" className="text-primary mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramCategoryTabs;
