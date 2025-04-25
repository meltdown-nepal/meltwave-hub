
import React from 'react';
import { motion } from 'framer-motion';
import { UseFormReturn } from 'react-hook-form';
import { DemoFormData } from '@/pages/ScheduleDemoFlow';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { User, Mail, Phone } from 'lucide-react';

interface ContactInfoProps {
  form: UseFormReturn<DemoFormData>;
}

const ContactInfo = ({ form }: ContactInfoProps) => {
  const phoneContact = form.watch('phoneContact');

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Almost there!</h2>
        <p className="text-gray-600">How can we reach you?</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="fullName" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Full Name
          </Label>
          <Input
            id="fullName"
            placeholder="Enter your full name"
            {...form.register('fullName')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Work Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your work email"
            {...form.register('email')}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="phoneContact" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Would you prefer a phone call?
            </Label>
            <Switch
              id="phoneContact"
              checked={phoneContact}
              onCheckedChange={(checked) => form.setValue('phoneContact', checked)}
            />
          </div>

          {phoneContact && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                placeholder="Enter your phone number"
                {...form.register('phone')}
              />
            </motion.div>
          )}
        </div>

        <p className="text-sm text-gray-500 mt-4">
          No spam. Only relevant info from our team.
        </p>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
