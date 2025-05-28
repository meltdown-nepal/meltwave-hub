
import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TierBadge from '../components/partners/TierBadge';
import PartnerCard from '../components/partners/PartnerCard';
import FilterDropdown from '../components/partners/FilterDropdown';

export type Tier = 'Basic' | 'Gold' | 'Platinum';

export interface Partner {
  id: number;
  name: string;
  location: string;
  tier: Tier;
  services: string[];
}

const partnersData: Partner[] = [
  {
    id: 1,
    name: "FitZone Kathmandu",
    location: "Durbarmarg, Kathmandu",
    tier: "Basic",
    services: ["Gym", "Cardio", "Group Fitness"]
  },
  {
    id: 2,
    name: "Aqua Wellness Center",
    location: "Patan, Lalitpur",
    tier: "Gold",
    services: ["Swimming", "Yoga", "Gym", "Nutrition Counseling"]
  },
  {
    id: 3,
    name: "Elite Wellness Hub",
    location: "Thamel, Kathmandu",
    tier: "Platinum",
    services: ["Personal Training", "Mental Health", "Physiotherapy", "Spa", "Swimming", "Yoga"]
  },
  {
    id: 4,
    name: "Valley Fitness",
    location: "Bhaktapur",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 5,
    name: "Mindful Movement Studio",
    location: "Jhamsikhel, Lalitpur",
    tier: "Gold",
    services: ["Yoga", "Pilates", "Meditation", "Group Fitness"]
  },
  {
    id: 6,
    name: "Premium Health Complex",
    location: "Baneshwor, Kathmandu",
    tier: "Platinum",
    services: ["Personal Training", "Swimming", "Mental Health", "Nutrition Counseling", "Spa", "Physiotherapy"]
  }
];

const WellnessPartners = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<Tier | 'All'>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');

  const uniqueLocations = Array.from(new Set(partnersData.map(p => p.location.split(',')[1]?.trim() || p.location)));

  const filteredPartners = partnersData.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTier = selectedTier === 'All' || partner.tier === selectedTier;
    const matchesLocation = selectedLocation === 'All' || partner.location.includes(selectedLocation);

    return matchesSearch && matchesTier && matchesLocation;
  });

  const groupedPartners = {
    Platinum: filteredPartners.filter(p => p.tier === 'Platinum'),
    Gold: filteredPartners.filter(p => p.tier === 'Gold'),
    Basic: filteredPartners.filter(p => p.tier === 'Basic')
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Partner Wellness Options & Centers
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Discover our carefully curated network of wellness partners. Each center is selected through 
              our quality-first screening process, ensuring you have access to the best facilities and services 
              based on member demand and excellence standards.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="btn-primary">
                View Full Partner List
              </Button>
              <Button variant="outline" className="btn-outline">
                Enable App Notifications
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by name, location, or service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <FilterDropdown
                  label="Tier"
                  value={selectedTier}
                  options={['All', 'Platinum', 'Gold', 'Basic']}
                  onChange={setSelectedTier}
                />
                <FilterDropdown
                  label="Location"
                  value={selectedLocation}
                  options={['All', ...uniqueLocations]}
                  onChange={setSelectedLocation}
                />
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredPartners.length} wellness {filteredPartners.length === 1 ? 'center' : 'centers'}
              {selectedTier !== 'All' && ` in ${selectedTier} tier`}
              {selectedLocation !== 'All' && ` in ${selectedLocation}`}
            </p>
          </div>

          {/* Partners by Tier */}
          {(['Platinum', 'Gold', 'Basic'] as const).map(tier => {
            const tieredPartners = groupedPartners[tier];
            
            if (tieredPartners.length === 0) return null;

            return (
              <div key={tier} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <TierBadge tier={tier} />
                  <h2 className="text-2xl font-bold">
                    {tier} Partners ({tieredPartners.length})
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tieredPartners.map(partner => (
                    <PartnerCard key={partner.id} partner={partner} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* No Results */}
          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No partners found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters to find wellness centers.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We're constantly expanding our network. Suggest a wellness center or enable notifications 
            to be the first to know about new partnerships.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="btn-primary">
              Suggest a Partner
            </Button>
            <Button variant="outline" className="btn-outline">
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessPartners;
