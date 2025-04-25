
import React from "react";
import { Building, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { DemoFormData } from "@/lib/types/demo";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<DemoFormData>;
  onNext: () => void;
  onBack: () => void;
}

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
              <Input placeholder="e.g. Technology, Healthcare, etc." {...field} />
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
