
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { DemoFormData } from "../ScheduleDemo";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface CompanyInfoProps {
  form: UseFormReturn<DemoFormData>;
}

const companyTypes = [
  "Software / SaaS", 
  "Finance / Banking",
  "Healthcare",
  "Education",
  "E-commerce",
  "Manufacturing",
  "Logistics",
  "Marketing / Advertising",
  "Consulting",
  "Non-profit",
  "Media / Entertainment",
  "Other"
];

const CompanyInfo = ({ form }: CompanyInfoProps) => {
  return (
    <Form {...form}>
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Tell us about your company</h2>
          <p className="text-gray-600 mb-6">This helps us customize your demo experience</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What's your company name?</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter company name" 
                    {...field} 
                    className="transition-all focus:ring-2 focus:ring-primary/30 border-gray-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FormField
            control={form.control}
            name="companyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What does your company do?</FormLabel>
                <FormControl>
                  <select 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                    {...field}
                  >
                    <option value="">Select industry or type</option>
                    {companyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>And what's your role there?</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="E.g., Marketing Manager, CEO, IT Director" 
                    {...field} 
                    className="transition-all focus:ring-2 focus:ring-primary/30 border-gray-300"
                  />
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
