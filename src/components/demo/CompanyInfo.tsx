
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { DemoFormData } from "../ScheduleDemoFlow";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Building, Briefcase } from "lucide-react";

interface CompanyInfoProps {
  form: UseFormReturn<DemoFormData>;
}

const CompanyInfo = ({ form }: CompanyInfoProps) => {
  return (
    <Form {...form}>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tell us about your company</h2>
          <p className="text-gray-600 mb-6">Help us understand your business better</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="Enter your company name" 
                      {...field} 
                      className="pl-10 transition-all focus:ring-2 focus:ring-primary/30"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Building className="h-4 w-4" />
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
            name="companyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="e.g., Technology, Healthcare, etc." 
                      {...field} 
                      className="pl-10 transition-all focus:ring-2 focus:ring-primary/30"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Briefcase className="h-4 w-4" />
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
          transition={{ delay: 0.3 }}
        >
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Role</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      placeholder="What's your role at the company?" 
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
      </motion.div>
    </Form>
  );
};

export default CompanyInfo;
