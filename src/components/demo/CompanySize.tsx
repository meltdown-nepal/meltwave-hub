
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Building2, Buildings, LandPlot } from 'lucide-react';

type CompanySizeOption = 'solo' | 'small' | 'medium' | 'large' | 'enterprise';

interface CompanySizeProps {
  value?: CompanySizeOption;
  onChange: (value: CompanySizeOption) => void;
}

const sizeOptions = [
  {
    value: 'solo',
    label: 'Just me',
    icon: Building,
    description: 'Solo entrepreneur or freelancer',
  },
  {
    value: 'small',
    label: '2-10 people',
    icon: Users,
    description: 'Small team or startup',
  },
  {
    value: 'medium',
    label: '11-50 people',
    icon: Building2,
    description: 'Growing company',
  },
  {
    value: 'large',
    label: '51-200 people',
    icon: Buildings,
    description: 'Established business',
  },
  {
    value: 'enterprise',
    label: '201+ people',
    icon: LandPlot,
    description: 'Large enterprise',
  },
];

const CompanySize = ({ value, onChange }: CompanySizeProps) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">How big is your company?</h2>
        <p className="text-gray-600">This helps us understand your needs better</p>
      </div>

      <div className="grid gap-4">
        {sizeOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = value === option.value;

          return (
            <motion.button
              key={option.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(option.value as CompanySizeOption)}
              className={`flex items-center p-4 rounded-lg border-2 transition-colors ${
                isSelected
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="mr-4">
                <Icon className={`w-6 h-6 ${isSelected ? 'text-primary' : 'text-gray-500'}`} />
              </div>
              <div className="text-left">
                <div className="font-medium">{option.label}</div>
                <div className="text-sm text-gray-500">{option.description}</div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default CompanySize;
