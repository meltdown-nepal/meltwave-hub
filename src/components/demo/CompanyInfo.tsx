
import React from 'react';
import { motion } from 'framer-motion';
import { UseFormReturn } from 'react-hook-form';
import { DemoFormData } from '@/pages/ScheduleDemoFlow';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Building, Briefcase, User } from 'lucide-react';

interface CompanyInfoProps {
  form: UseFormReturn<DemoFormData>;
}

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Retail',
  'Services',
  'Other'
];

const CompanyInfo = ({ form }: CompanyInfoProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Tell us about your company</h2>
        <p className="text-gray-600">Just a few more details to help us understand your business</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="companyName" className="flex items-center gap-2">
            <Building className="w-4 h-4" />
            What's your company called?
          </Label>
          <Input
            id="companyName"
            placeholder="Enter your company name"
            {...form.register('companyName')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyType" className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            What industry are you in?
          </Label>
          <Input
            id="companyType"
            list="industries"
            placeholder="Select or type your industry"
            {...form.register('companyType')}
          />
          <datalist id="industries">
            {industries.map((industry) => (
              <option key={industry} value={industry} />
            ))}
          </datalist>
        </div>

        <div className="space-y-2">
          <Label htmlFor="role" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            And what's your role?
          </Label>
          <Input
            id="role"
            placeholder="Enter your role"
            {...form.register('role')}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CompanyInfo;
