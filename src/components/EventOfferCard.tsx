
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from "@/lib/utils";

interface EventOfferCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
}

const EventOfferCard = ({ title, description, Icon, className }: EventOfferCardProps) => {
  return (
    <div className={cn(
      "rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group",
      className
    )}>
      <div className="mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default EventOfferCard;
