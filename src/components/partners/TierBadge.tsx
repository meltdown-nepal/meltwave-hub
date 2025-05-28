
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Tier } from '../../pages/WellnessPartners';

interface TierBadgeProps {
  tier: Tier;
  size?: 'sm' | 'md' | 'lg';
}

const TierBadge: React.FC<TierBadgeProps> = ({ tier, size = 'md' }) => {
  const getVariantAndClass = (tier: Tier) => {
    switch (tier) {
      case 'Basic':
        return {
          variant: 'secondary' as const,
          className: 'bg-gray-100 text-gray-800 border-gray-200'
        };
      case 'Gold':
        return {
          variant: 'default' as const,
          className: 'bg-yellow-100 text-yellow-800 border-yellow-200'
        };
      case 'Platinum':
        return {
          variant: 'default' as const,
          className: 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-purple-200'
        };
    }
  };

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'sm':
        return 'text-xs px-2 py-0.5';
      case 'lg':
        return 'text-sm px-4 py-1';
      default:
        return 'text-sm px-3 py-1';
    }
  };

  const { variant, className } = getVariantAndClass(tier);
  const sizeClass = getSizeClass(size);

  return (
    <Badge 
      variant={variant} 
      className={`${className} ${sizeClass} font-semibold`}
    >
      {tier}
    </Badge>
  );
};

export default TierBadge;
