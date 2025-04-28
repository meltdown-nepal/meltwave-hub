
import React from "react";
import { User, Building2, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Props {
  onSelect: (type: "employee" | "company" | "provider") => void;
}

export const UserTypeSelection: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Who Are You?</h2>
        <p className="text-muted-foreground">Select your role to get started</p>
      </div>

      <Separator className="my-6" />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            type: "employee" as const,
            title: "Employee",
            description: "Looking for wellness solutions",
            icon: User,
          },
          {
            type: "company" as const,
            title: "Company",
            description: "Seeking corporate wellness",
            icon: Building2,
          },
          {
            type: "provider" as const,
            title: "Fitness Provider",
            description: "Want to join our network",
            icon: Dumbbell,
          },
        ].map((option) => (
          <Card
            key={option.type}
            className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group"
            onClick={() => onSelect(option.type)}
          >
            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <option.icon className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-xl">{option.title}</h3>
                <p className="text-sm text-muted-foreground">
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
