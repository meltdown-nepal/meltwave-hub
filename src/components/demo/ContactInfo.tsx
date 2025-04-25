
import React from "react";
import { Mail, Phone, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { DemoFormData } from "@/lib/types/demo";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn<DemoFormData>;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

export const ContactInfo: React.FC<Props> = ({ form, onSubmit, onBack, isSubmitting = false }) => {
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
            <FormMessage />
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
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phoneContact"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between space-x-4">
            <FormLabel className="text-lg">Would you like us to contact you by phone?</FormLabel>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />

      {form.watch("phoneContact") && (
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="space-y-4 animate-fade-in">
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input className="pl-10" placeholder="Your phone number" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <p className="text-sm text-gray-500">No spam. Only relevant info from our team.</p>

      <div className="flex justify-between pt-6">
        <Button type="button" variant="outline" onClick={onBack} disabled={isSubmitting}>
          Back
        </Button>
        <Button 
          type="button" 
          onClick={onSubmit} 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </div>
  );
}
