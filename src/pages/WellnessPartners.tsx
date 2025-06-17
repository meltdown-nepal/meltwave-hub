
import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TierBadge from '../components/partners/TierBadge';
import PartnerCard from '../components/partners/PartnerCard';
import PartnerCarousel from '../components/partners/PartnerCarousel';
import FilterDropdown from '../components/partners/FilterDropdown';
import SuggestPartnerModal from '../components/partners/SuggestPartnerModal';
import { useWellnessPartners } from '../hooks/useWellnessPartners';
export type Tier = 'Basic' | 'Gold' | 'Platinum';
export interface Partner {
  id: number;
  name: string;
  location: string;
  tier: Tier;
  services: string[];
}
const WellnessPartners = () => {
  const {
    partners: partnersData,
    loading,
    error
  } = useWellnessPartners();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<Tier | 'All'>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const uniqueLocations = Array.from(new Set(partnersData.map(p => p.location.split(',')[1]?.trim() || p.location)));
  const filteredPartners = partnersData.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) || partner.location.toLowerCase().includes(searchTerm.toLowerCase()) || partner.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTier = selectedTier === 'All' || partner.tier === selectedTier;
    const matchesLocation = selectedLocation === 'All' || partner.location.includes(selectedLocation);
    return matchesSearch && matchesTier && matchesLocation;
  });
  const groupedPartners = {
    Platinum: filteredPartners.filter(p => p.tier === 'Platinum'),
    Gold: filteredPartners.filter(p => p.tier === 'Gold'),
    Basic: filteredPartners.filter(p => p.tier === 'Basic')
  };
  if (loading) {
    return <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading wellness partners...</p>
        </div>
      </div>;
  }
  if (error) {
    return <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Search className="h-8 w-8 text-red-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Error Loading Partners</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} className="btn-primary">
            Try Again
          </Button>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-secondary/10 py-[50px]">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Partner Wellness Options & Centers
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Meltdown regularly partners with new wellness studios and centers based on demand and feedback from our partner companies. Each addition goes through a standard screening process to ensure the highest wellbeing experience. Explore the most up-to-date list of our partners below.
            </p>
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
                <Input placeholder="Search by name, location, or service..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <FilterDropdown label="Tier" value={selectedTier} options={['All', 'Platinum', 'Gold', 'Basic']} onChange={setSelectedTier} />
                <FilterDropdown label="Location" value={selectedLocation} options={['All', ...uniqueLocations]} onChange={setSelectedLocation} />
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing wellness centers
              {selectedTier !== 'All' && ` in ${selectedTier} tier`}
              {selectedLocation !== 'All' && ` in ${selectedLocation}`}
            </p>
          </div>

          {/* Partners by Tier - Now in Horizontal Carousels */}
          {(['Platinum', 'Gold', 'Basic'] as const).map(tier => <PartnerCarousel key={tier} tier={tier} partners={groupedPartners[tier]} />)}

          {/* No Results */}
          {filteredPartners.length === 0 && <div className="text-center py-12">
              <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No partners found</h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters to find wellness centers.
              </p>
            </div>}
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
            <Button className="btn-primary" onClick={() => setShowSuggestModal(true)}>
              Suggest a Partner
            </Button>
            <Button variant="outline" className="btn-outline">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Suggest Partner Modal */}
      <SuggestPartnerModal isOpen={showSuggestModal} onClose={() => setShowSuggestModal(false)} />
    </div>;
};
export default WellnessPartners;
