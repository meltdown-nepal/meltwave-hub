
import React from "react";
import { Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { DemoFormData } from "@/lib/types/demo";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<DemoFormData>;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

export const ContactInfo: React.FC<Props> = ({
  form,
  onSubmit,
  onBack,
  isSubmitting = false,
}) => {
  const handlePhoneKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter
    if (
      [8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
      (e.keyCode === 65 && e.ctrlKey === true) ||
      (e.keyCode === 67 && e.ctrlKey === true) ||
      (e.keyCode === 86 && e.ctrlKey === true) ||
      (e.keyCode === 88 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      return;
    }

    // Allow: numbers (0-9), space, hyphen, parentheses, plus sign
    const char = String.fromCharCode(e.keyCode);
    if (!/[0-9\s\-\(\)\+]/.test(char)) {
      e.preventDefault();
    }
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any non-numeric characters except spaces, hyphens, parentheses, and plus
    const value = e.target.value.replace(/[^0-9\s\-\(\)\+]/g, '');
    form.setValue('phone', value);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-2xl font-semibold">What's your name?</FormLabel>
            <FormControl>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="Full name" {...field} />
              </div>
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-2xl font-semibold">What's your work email?</FormLabel>
            <FormControl>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input className="pl-10" placeholder="work@company.com" {...field} />
              </div>
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-2xl font-semibold">What's your phone number?</FormLabel>
            <FormControl>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  className="pl-10" 
                  placeholder="Your phone number" 
                  {...field} 
                  onKeyDown={handlePhoneKeyPress}
                  onChange={handlePhoneInput}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <p className="text-sm text-gray-500">No spam. Only relevant info from our team.</p>

      <div className="flex justify-between pt-6">
        <Button type="button" variant="outline" onClick={onBack} disabled={isSubmitting}>
          Back
        </Button>
        <Button type="button" onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </div>
  );
};
