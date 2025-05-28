
import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import TierBadge from './TierBadge';
import ServiceIcon from './ServiceIcon';
import { Partner } from '../../pages/WellnessPartners';

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  const isPlatinum = partner.tier === 'Platinum';

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 rounded-xl bg-white transform hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {partner.name}
            </h3>
            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{partner.location}</span>
            </div>
          </div>
          <TierBadge tier={partner.tier} size="sm" />
        </div>

        {/* Services */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Services Available:</h4>
          <div className="flex flex-wrap gap-2">
            {partner.services.map((service, index) => (
              <div 
                key={index}
                className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full text-xs"
              >
                <ServiceIcon service={service} />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Features for Platinum */}
        {isPlatinum && partner.services.some(s => ['Mental Health', 'Physiotherapy', 'Personal Training'].includes(s)) && (
          <div className="p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
            <p className="text-xs text-purple-700 font-medium">
              ✨ Premium services include specialized wellness programs
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PartnerCard;
