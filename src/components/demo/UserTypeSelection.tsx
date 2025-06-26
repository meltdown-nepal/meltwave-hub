
import React from "react";
import { User, Building2, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

interface Props {
  onSelect: (type: "employee" | "company" | "provider") => void;
}

export const UserTypeSelection: React.FC<Props> = ({ onSelect }) => {
  const navigate = useNavigate();
  
  // Handle employee selection with new flow
  const handleEmployeeSelect = () => {
    navigate("/company-eligibility-check");
  };
  
  // Handle wellness provider selection separately
  const handleProviderSelect = () => {
    navigate("/wellness-onboarding");
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight">Who Are You?</h2>
        <p className="text-muted-foreground">Select your role to get started</p>
      </div>

      <Separator className="my-6" />

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            type: "company" as const,
            title: "Company",
            description: "Seeking corporate wellness",
            icon: Building2,
            color: "bg-secondary/20 text-secondary",
            onClick: () => onSelect("company"),
          },
          {
            type: "employee" as const,
            title: "Employee",
            description: "Looking for wellness solutions",
            icon: User,
            color: "bg-primary/10 text-primary",
            onClick: handleEmployeeSelect,
          },
          {
            type: "provider" as const,
            title: "Wellness Provider",
            description: "Want to join our network",
            icon: Heart,
            color: "bg-primary/20 text-primary",
            onClick: handleProviderSelect,
          },
        ].map((option) => (
          <Card
            key={option.type}
            className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group border-2 border-transparent hover:border-primary"
            onClick={option.onClick}
          >
            <div className="p-8 flex flex-col items-center text-center space-y-6">
              <div className={`p-4 rounded-full ${option.color} transition-colors duration-300 group-hover:bg-primary/30`}>
                <option.icon className="w-10 h-10" />
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-2xl">{option.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
