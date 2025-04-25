
import React from "react";
import { motion } from "framer-motion";
import { Users, User, Briefcase } from "lucide-react";

type CompanySizeOption = "solo" | "small" | "medium" | "large" | "enterprise";

interface CompanySizeProps {
  value?: CompanySizeOption;
  onChange: (value: CompanySizeOption) => void;
}

const CompanySize = ({ value, onChange }: CompanySizeProps) => {
  const sizeOptions = [
    {
      id: "solo",
      label: "Just me",
      icon: <User className="h-6 w-6" />,
      description: "Solo entrepreneur or freelancer",
    },
    {
      id: "small",
      label: "2–10 people",
      icon: <Users className="h-6 w-6" />,
      description: "Small team or startup",
    },
    {
      id: "medium",
      label: "11–50 people",
      icon: <Users className="h-6 w-6" />,
      description: "Growing business",
    },
    {
      id: "large",
      label: "51–200 people",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Mid-sized company",
    },
    {
      id: "enterprise",
      label: "201+ people",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Large enterprise",
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">How big is your company?</h2>
      <p className="text-gray-600 mb-8">We'll tailor your demo based on your team size</p>
      
      <motion.div 
        className="space-y-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {sizeOptions.map((option) => (
          <motion.div
            key={option.id}
            variants={item}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onChange(option.id as CompanySizeOption)}
            className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
              value === option.id
                ? "border-primary bg-primary/10"
                : "border-gray-200 hover:border-primary/50"
            }`}
          >
            <div className={`p-3 rounded-full mr-4 ${
              value === option.id ? "bg-primary/20" : "bg-gray-100"
            }`}>
              {option.icon}
            </div>
            <div>
              <h3 className="font-medium">{option.label}</h3>
              <p className="text-sm text-gray-500">{option.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CompanySize;
