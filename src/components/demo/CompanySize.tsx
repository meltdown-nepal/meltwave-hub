
import React from "react";
import { Building, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import { DemoFormData } from "@/lib/types/demo";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<DemoFormData>;
  onNext: () => void;
}

const companySizeOptions = [
  { value: "small", label: "2–10 people", icon: Building },
  { value: "medium", label: "11-25 people", icon: Building },
  { value: "mediumLarge", label: "26–50 people", icon: Building2 },
  { value: "large", label: "51–200 people", icon: Building },
  { value: "enterprise", label: "201+ people", icon: Users },
];

export const CompanySize: React.FC<Props> = ({ form, onNext }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-6">How big is your company?</h2>
      <FormField
        control={form.control}
        name="companySize"
        render={({ field }) => (
          <div className="grid gap-4">
            {companySizeOptions.map((option) => (
              <Button
                key={option.value}
                type="button"
                variant={field.value === option.value ? "default" : "outline"}
                className="w-full justify-start gap-4 p-6"
                onClick={() => {
                  field.onChange(option.value);
                  onNext();
                }}
              >
                <option.icon className="h-5 w-5" />
                {option.label}
              </Button>
            ))}
          </div>
        )}
      />
    </div>
  );
};
