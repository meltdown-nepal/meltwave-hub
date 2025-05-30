
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Bike, Award, Mountain, Puzzle, CalendarDays } from 'lucide-react';
import EventHeroSection from "@/components/EventHeroSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import EventGalleryImage from "@/components/EventGalleryImage";
import EventOfferCard from "@/components/EventOfferCard";
import EventTimeline from "@/components/EventTimeline";

const Events = () => {
  const { scrollToSection } = useSmoothScroll();
  
  const offerTypes = [
    {
      icon: Activity,
      title: "Bootcamps",
      description: "Strength, conditioning, and full-body workouts in open spaces."
    },
    {
      icon: Award,
      title: "Runs",
      description: "Fun runs, timed challenges, and team relay races."
    },
    {
      icon: Award,
      title: "Basketball Tournaments",
      description: "Casual games or competitive corporate tournaments."
    },
    {
      icon: Mountain,
      title: "Hiking Adventures",
      description: "Scenic group hikes, perfect for adventure lovers."
    },
    {
      icon: Puzzle,
      title: "Treasure Hunts",
      description: "Interactive, team-building experiences combining fitness and fun."
    },
    {
      icon: Bike,
      title: "Cycling Events",
      description: "Group cycling expeditions around beautiful locations."
    },
    {
      icon: CalendarDays,
      title: "Topic-Specific Events",
      description: "Tailored experiences based on wellness and active living."
    }
  ];
  
  return (
    <div>
      <EventHeroSection onSeeUpcomingClick={() => scrollToSection('upcoming')} />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Highlights from Past Events</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Relive the energy and inspiration from our wellness community gatherings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventGalleryImage src="/lovable-uploads/a57234a5-bf11-4976-b2b0-beb02e66466d.png" title="Community Fun Events" alt="Group of people doing handstand with friends watching" />
            <EventGalleryImage src="/lovable-uploads/761279cd-bc8e-49ce-897a-1b52b2f6e467.png" title="Pet Friendly Hike" alt="Group of hikers with dogs enjoying an outdoor trek" />
            <EventGalleryImage src="/lovable-uploads/c7877f89-f497-4cf4-8cb7-63d1104518c3.png" title="Community Run Event" alt="Group of people running together in a park" />
          </div>
        </div>
      </section>

      {/* Replace the old upcoming events section with the new EventTimeline */}
      <EventTimeline />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">What We Offer</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              From high-energy fitness bootcamps to relaxing hikes, we host a wide range of events for every interest and fitness level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerTypes.map(offer => <EventOfferCard key={offer.title} Icon={offer.icon} title={offer.title} description={offer.description} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Create Your Own Event</h2>
            <p className="text-lg max-w-2xl mx-auto"> Looking to organize a memorable event for your team, friends, or special occasion? Let's collaborate!</p>
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-primary">Contact Us to Host an Event</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
