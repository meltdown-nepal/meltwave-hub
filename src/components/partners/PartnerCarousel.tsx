
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import PartnerCard from './PartnerCard';
import TierBadge from './TierBadge';
import { Partner, Tier } from '../../pages/WellnessPartners';

interface PartnerCarouselProps {
  tier: Tier;
  partners: Partner[];
}

const PartnerCarousel: React.FC<PartnerCarouselProps> = ({ tier, partners }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ 
        left: -320, 
        behavior: 'smooth' 
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ 
        left: 320, 
        behavior: 'smooth' 
      });
    }
  };

  if (partners.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <TierBadge tier={tier} />
          <h2 className="text-2xl font-bold">
            {tier} Partners ({partners.length})
          </h2>
        </div>
        
        {/* Navigation Buttons */}
        <div className="hidden md:flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            aria-label={`Scroll ${tier} partners left`}
            className="h-8 w-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            aria-label={`Scroll ${tier} partners right`}
            className="h-8 w-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Scrollable Cards Container */}
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div
          ref={scrollRef}
          className="flex space-x-4 pb-4"
          role="region"
          aria-label={`${tier} tier wellness partners`}
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-80 flex-none h-64"
            >
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      
      {/* Mobile scroll hint */}
      <p className="text-sm text-gray-500 mt-2 md:hidden">
        Swipe horizontally to see more {tier.toLowerCase()} partners
      </p>
    </div>
  );
};

export default PartnerCarousel;
