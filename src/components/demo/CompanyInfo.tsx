
import React from "react";
import { Building, User, Briefcase, Banknote, Users, Hospital, Book, ShoppingCart, Factory, Antenna, CircleDot } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { DemoFormData } from "@/lib/types/demo";
import { UseFormReturn } from "react-hook-form";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface Props {
  form: UseFormReturn<DemoFormData>;
  onNext: () => void;
  onBack: () => void;
}

const industries = [
  { value: "tech", label: "Technology", icon: Briefcase },
  { value: "finance", label: "Finance/Banking", icon: Banknote },
  { value: "ngo", label: "NGO/INGO", icon: Users },
  { value: "consulting", label: "Consulting", icon: Briefcase },
  { value: "hospitality", label: "Hospitality", icon: Hospital },
  { value: "education", label: "Education", icon: Book },
  { value: "ecommerce", label: "E-commerce", icon: ShoppingCart },
  { value: "retail", label: "Retail", icon: ShoppingCart },
  { value: "manufacturing", label: "Manufacturing", icon: Factory },
  { value: "internet", label: "Internet/Telecommunication", icon: Antenna },
  { value: "other", label: "Others", icon: CircleDot },
];

export const CompanyInfo: React.FC<Props> = ({ form, onNext, onBack }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <FormField
        control={form.control}
        name="companyName"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-2xl font-semibold">What's your company called?</FormLabel>
            <FormControl>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="Company name" {...field} />
              </div>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="companyType"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-2xl font-semibold">What industry are you in?</FormLabel>
            <FormControl>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg">
                  {industries.map((industry) => (
                    <SelectItem key={industry.value} value={industry.value} className="hover:bg-gray-100">
                      <div className="flex items-center">
                        <industry.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                        {industry.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="role"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-2xl font-semibold">And what's your role?</FormLabel>
            <FormControl>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="Your role" {...field} />
              </div>
            </FormControl>
          </FormItem>
        )}
      />

      <div className="flex justify-between pt-6">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="button" onClick={onNext}>
          Next
        </Button>
      </div>
    </div>
  );
};
