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
  // Basic Tier Partners
  {
    id: 1,
    name: "Bajra Sports Center",
    location: "Kalopul",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 2,
    name: "Beauty and The Beast Fitness Station",
    location: "New Baneshwor",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 3,
    name: "Belegend Shapes Fitness And Gym",
    location: "Khushibu",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 4,
    name: "Black Star Gym",
    location: "Boudha Road Nayabasti",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 5,
    name: "Fitness Area",
    location: "Kirtipur",
    tier: "Basic",
    services: ["Gym", "Cardio", "Group Classes"]
  },
  {
    id: 6,
    name: "Gurkhali Fitness and Gym center",
    location: "New road",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 7,
    name: "Gym Go Fitness",
    location: "Madhyepur Thimi",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 8,
    name: "Gymcha Fitness",
    location: "Ram Mandir, Bhaktapur",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 9,
    name: "Kumari Fitness Center",
    location: "Kanibhal, Patan",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 10,
    name: "Lifegoal Fitness",
    location: "Bohoratar",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 11,
    name: "Numa Fitness",
    location: "Dhapakhel Road",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 12,
    name: "Power Planet Fitness",
    location: "Dhalko, Kathmandu",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 13,
    name: "Proton Gym",
    location: "Ekantakuna, Lalitpur",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 14,
    name: "Revive Fitness Nepal",
    location: "Mid Baneshwor",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 15,
    name: "RJ Gym Fitness",
    location: "Babarmahal, Kathmandu",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 16,
    name: "Super Fitness",
    location: "Samakhushi",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 17,
    name: "Madhyapur VR Fitness",
    location: "Lokanthali, Bhaktapur",
    tier: "Basic",
    services: ["Gym", "Cardio"]
  },
  {
    id: 18,
    name: "De Gym",
    location: "Tokha, Dhapasi",
    tier: "Basic",
    services: ["Gym", "Cardio", "Zumba", "Group Classes"]
  },
  // Gold Tier Partners
  {
    id: 19,
    name: "7 Iron Golf",
    location: "Shree Durbar Tol, Pulchowk",
    tier: "Gold",
    services: ["Indoor Golf", "Simulated Golf"]
  },
  {
    id: 20,
    name: "Avya Club",
    location: "Gharipatan, Pokhara",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 21,
    name: "Athlete Land",
    location: "Balkumari, Lalitpur",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 22,
    name: "Boxmandu (Lazimpat)",
    location: "Lazimpat, Kathmandu",
    tier: "Gold",
    services: ["Boxing", "Kick Boxing", "Group Classes"]
  },
  {
    id: 23,
    name: "Boxmandu (Bouddha)",
    location: "Bouddha, Kathmandu",
    tier: "Gold",
    services: ["Boxing", "Kick Boxing", "Group Classes"]
  },
  {
    id: 24,
    name: "Regal Fitness Center",
    location: "Kamalpokhari",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 25,
    name: "Regal Fitness Center",
    location: "Teku",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 26,
    name: "Bajra Nanita's Fitness",
    location: "Bhaisepati",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 27,
    name: "Banus Total Fitness",
    location: "Kamal Pokhari",
    tier: "Gold",
    services: ["Gym", "Cardio", "Sauna", "Group Classes", "Yoga"]
  },
  {
    id: 28,
    name: "Bob's Gym Lakecity",
    location: "Ammat St, Pokhara",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 29,
    name: "Cage Total Fitness",
    location: "Gwarko",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 30,
    name: "CGG Sports Hub",
    location: "Ikhadole",
    tier: "Gold",
    services: ["Boxing", "Group Classes"]
  },
  {
    id: 31,
    name: "City Health Studio",
    location: "Dhumbarahi",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 32,
    name: "DG Boxing",
    location: "Boudha",
    tier: "Gold",
    services: ["Boxing"]
  },
  {
    id: 33,
    name: "Divine Physical Fitness Center",
    location: "Nayabazar",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 34,
    name: "Epic Fitness",
    location: "Dallu, Lakhatirtga marg",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 35,
    name: "Fitzen Studio",
    location: "Khaldhara Dhalku",
    tier: "Gold",
    services: ["Kickboxing", "Group Classes"]
  },
  {
    id: 36,
    name: "Gymkhana Muay Thai",
    location: "Maharajgunj",
    tier: "Gold",
    services: ["Gym", "Cardio", "Muay Thai", "Sauna"]
  },
  {
    id: 37,
    name: "Hardik Fitness Club",
    location: "Pulchowk, Lalitpur",
    tier: "Gold",
    services: ["Gym", "Cardio", "Yoga", "Group Classes", "Sauna"]
  },
  {
    id: 38,
    name: "Healthy Heart Fitness Center",
    location: "Thulo Barang",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 39,
    name: "Impulse Academy of Performing Arts",
    location: "Pulchowk",
    tier: "Gold",
    services: ["Dance", "Fitness Classes", "Group Classes"]
  },
  {
    id: 40,
    name: "Kalanki Gym Center",
    location: "Kalanki",
    tier: "Gold",
    services: ["Gym", "Cardio", "Kickboxing", "Group Classes"]
  },
  {
    id: 41,
    name: "Kathmandu Sport Climbing Center",
    location: "Paknajol",
    tier: "Gold",
    services: ["Rock Climbing", "Bouldering"]
  },
  {
    id: 42,
    name: "Manjushree Fitness",
    location: "Boudha",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 43,
    name: "Moksha Fitness Studio",
    location: "Lazimpat",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 44,
    name: "Nayabazar Divine Fitness",
    location: "Nayabazar",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 45,
    name: "Nepal Fitness Mantra",
    location: "Kirtan Chowk",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 46,
    name: "ROC Fitness Club",
    location: "Tinkune",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 47,
    name: "Rush Fitness and Cafe Studio",
    location: "Bansbari",
    tier: "Gold",
    services: ["Gym", "Cardio", "Yoga"]
  },
  {
    id: 48,
    name: "Tahachal Physical Fitness Center",
    location: "Tahachal",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 49,
    name: "Tapout Fitness",
    location: "Bishalnagar, Maharajgunj",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 50,
    name: "The Pump - Chabahil",
    location: "Chabahil",
    tier: "Gold",
    services: ["Gym", "Cardio", "Yoga"]
  },
  {
    id: 51,
    name: "The Pump - Jhamsikhel",
    location: "Jhamsikhel",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 52,
    name: "The Vibe Boxing Club",
    location: "Nayabazar",
    tier: "Gold",
    services: ["Boxing"]
  },
  {
    id: 53,
    name: "Three Lions Fitness Center",
    location: "Samakhushi",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 54,
    name: "Titan Gym and Fitness",
    location: "Kumaripati",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 55,
    name: "Total Physical Fitness Center",
    location: "Baneshwor",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 56,
    name: "Ultimate Lifting Club",
    location: "Tinkune",
    tier: "Gold",
    services: ["Gym", "Cardio"]
  },
  {
    id: 57,
    name: "Yogalets N Dance Studio",
    location: "Kumaripati, Lalitpur",
    tier: "Gold",
    services: ["Dance", "Yoga"]
  },
  // Platinum Tier Partners
  {
    id: 58,
    name: "Banu's Physiotherapy",
    location: "Kamalpokhari",
    tier: "Platinum",
    services: ["Sports Rehab", "Physiotherapy Classes"]
  },
  {
    id: 59,
    name: "Dhanyantari Sports Hub (Swimming)",
    location: "Kalopul",
    tier: "Platinum",
    services: ["Swimming"]
  },
  {
    id: 60,
    name: "Happy Minds",
    location: "Jhamsikhel",
    tier: "Platinum",
    services: ["Mental Health Counselling"]
  },
  {
    id: 61,
    name: "Hardik Fitness (Swimming Saturdays)",
    location: "Pulchowk, Lalitpur",
    tier: "Platinum",
    services: ["Swimming (Saturdays)"]
  },
  {
    id: 62,
    name: "Kalanki Gym Center (Swimming)",
    location: "Makalu Petrol Pump",
    tier: "Platinum",
    services: ["Swimming"]
  },
  {
    id: 63,
    name: "Tahachal Physical Fitness (Swimming)",
    location: "Tahachal",
    tier: "Platinum",
    services: ["Swimming"]
  },
  {
    id: 64,
    name: "Tranquility Spa",
    location: "10 Locations (Ktm, Pkr)",
    tier: "Platinum",
    services: ["Steam", "Sauna"]
  },
  {
    id: 65,
    name: "Riddhi Pilates - Sanepa",
    location: "Sanepa",
    tier: "Platinum",
    services: ["Pilates Classes"]
  },
  {
    id: 66,
    name: "Riddhi Pilates - Baluwatar",
    location: "Baluwatar",
    tier: "Platinum",
    services: ["Pilates Classes"]
  },
  {
    id: 67,
    name: "Riddhi Pilates - Gyaneshwor",
    location: "Gyaneshwor",
    tier: "Platinum",
    services: ["Pilates Classes"]
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
              Meltdown regularly partners with new wellness studios and centers based on demand and feedback from our partner companies. Each addition goes through a standard screening process to ensure the highest wellbeing experience. Explore the most up-to-date list of our partners below or turn on app notifications to stay in the loop.
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
