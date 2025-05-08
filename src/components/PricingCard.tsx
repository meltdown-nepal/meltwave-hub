
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  linkTo: string;
}

const PricingCard = ({ title, price, features, buttonText, linkTo }: PricingCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6 border-b">
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-500 ml-1">/month</span>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check size={18} className="text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link 
          to={linkTo} 
          className="block w-full py-2 px-4 bg-primary text-white text-center rounded-md hover:bg-primary/90 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </Card>
  );
};

export default PricingCard;
