
import React from 'react';
import { Dumbbell, Waves, Heart } from 'lucide-react';

interface ServiceIconProps {
  service: string;
  className?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ service, className = "h-3 w-3" }) => {
  const getIcon = (service: string) => {
    const lowerService = service.toLowerCase();
    
    if (lowerService.includes('gym') || lowerService.includes('fitness') || lowerService.includes('cardio')) {
      return <Dumbbell className={className} />;
    }
    
    if (lowerService.includes('swimming') || lowerService.includes('aqua')) {
      return <Waves className={className} />;
    }
    
    if (lowerService.includes('yoga') || lowerService.includes('meditation') || lowerService.includes('mental')) {
      return <Heart className={className} />;
    }
    
    // Default icon for other services
    return <div className={`${className} bg-gray-300 rounded-full`} />;
  };

  return getIcon(service);
};

export default ServiceIcon;
