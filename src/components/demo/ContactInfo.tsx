
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { DemoFormData } from "../ScheduleDemo";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";
import { Mail, Phone, Check, User } from "lucide-react";

interface ContactInfoProps {
  form: UseFormReturn<DemoFormData>;
}

const ContactInfo = ({ form }: ContactInfoProps) => {
  const phoneContact = form.watch("phoneContact");

  return (
    <Form {...form}>
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <h2 className="text-2xl font-semibold mb-2">Almost there!</h2>
          <p className="text-gray-600 mb-6">We need a few contact details to schedule your demo</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="Enter your full name" 
                      {...field} 
                      className="pl-10 transition-all focus:ring-2 focus:ring-primary/30"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <User className="h-4 w-4" />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Email</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type="email"
                      placeholder="you@yourcompany.com" 
                      {...field} 
                      className="pl-10 transition-all focus:ring-2 focus:ring-primary/30"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Mail className="h-4 w-4" />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <Check className="h-3 w-3 text-green-500" /> 
                  We'll never spam. Used only for demo scheduling.
                </p>
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <FormField
            control={form.control}
            name="phoneContact"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between space-y-0 rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Phone Contact</FormLabel>
                  <p className="text-sm text-muted-foreground">
                    Would you prefer we contact you by phone?
                  </p>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </motion.div>

        {phoneContact && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        type="tel"
                        placeholder="Enter your phone number" 
                        {...field} 
                        className="pl-10 transition-all focus:ring-2 focus:ring-primary/30"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Phone className="h-4 w-4" />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </motion.div>
        )}

        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex gap-2 items-center">
            <div className="p-2 bg-green-100 rounded-full">
              <Check className="h-4 w-4 text-green-600" />
            </div>
            <p className="text-sm text-gray-600">Your information is secure and will only be used to contact you about your demo request.</p>
          </div>
        </div>
      </motion.div>
    </Form>
  );
};

export default ContactInfo;
