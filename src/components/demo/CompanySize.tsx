
import React from "react";
import { Building, Building2, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import { DemoFormData } from "@/lib/types/demo";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<DemoFormData>;
  onNext: () => void;
}

const companySizeOptions = [
  { value: "under5", label: "< 5 people", icon: Building },
  { value: "5to10", label: "5-10 people", icon: Building },
  { value: "10to25", label: "10-25 people", icon: Building },
  { value: "25to50", label: "25-50 people", icon: Building2 },
  { value: "50to75", label: "50-75 people", icon: Building2 },
  { value: "75to100", label: "75-100 people", icon: Building2 },
  { value: "100to200", label: "100-200 people", icon: Users },
  { value: "200to500", label: "200-500 people", icon: Users },
  { value: "500plus", label: "500+ people", icon: Users },
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
                className={`
                  w-full justify-between gap-4 p-6
                  transition-all duration-200
                  hover:scale-[1.02] hover:shadow-md
                  ${field.value === option.value ? 'ring-2 ring-primary ring-offset-2' : ''}
                `}
                onClick={() => {
                  field.onChange(option.value);
                  onNext();
                }}
              >
                <div className="flex items-center gap-4">
                  <option.icon className="h-5 w-5" />
                  {option.label}
                </div>
                {field.value === option.value && (
                  <Check className="h-5 w-5 text-primary animate-scale-in" />
                )}
              </Button>
            ))}
          </div>
        )}
      />
    </div>
  );
};
