import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Bike, Award, Mountain, Puzzle, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EventHeroSection from "@/components/EventHeroSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import EventGalleryImage from "@/components/EventGalleryImage";
import EventOfferCard from "@/components/EventOfferCard";

function EventCard({
  title,
  address,
  date,
  description,
  note,
  registrationLink,
  isExternalLink
}: {
  title: string;
  address?: string;
  date?: string;
  description?: string;
  note?: string;
  registrationLink?: string;
  isExternalLink?: boolean;
}) {
  return <div className="rounded-xl card-gradient shadow-lg p-6 flex flex-col items-start min-h-[210px] border border-gray-100">
      <h3 className="text-xl font-bold mb-1 text-gray-800">{title}</h3>
      {address && <div className="flex items-center text-sm mb-2 text-gray-500">
          <svg className="inline-block mr-2 text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
          </svg>
          {address}
        </div>}
      {date && <div className="flex items-center text-sm mb-2 text-gray-500">
          <svg className="inline-block mr-2 text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" stroke="currentColor" strokeWidth="2"></rect>
            <line x1="16" x2="16" y1="2" y2="6" stroke="currentColor" strokeWidth="2"></line>
            <line x1="8" x2="8" y1="2" y2="6" stroke="currentColor" strokeWidth="2"></line>
            <line x1="3" x2="21" y1="10" y2="10" stroke="currentColor" strokeWidth="2"></line>
          </svg>
          {date}
        </div>}
      {description && <p className="mb-2 text-gray-700">{description}</p>}
      {note && <p className="mb-4 text-xs italic text-secondary-foreground">{note}</p>}
      {registrationLink && (
        isExternalLink ? (
          <Button variant="default" className="mt-auto bg-primary hover:bg-primary/90 text-white font-semibold">
            <a href={registrationLink} target="_blank" rel="noopener noreferrer" className="mx-0">Register Now</a>
          </Button>
        ) : (
          <Button variant="default" className="mt-auto bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
            <Link to={registrationLink} className="mx-0">Register Now</Link>
          </Button>
        )
      )}
    </div>;
}

const Events = () => {
  const {
    scrollToSection
  } = useSmoothScroll();
  
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
  
  return <div>
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

      <section id="upcoming" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Discover and join our latest community-centered wellness events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <EventCard 
              title="Java Fun Marathon" 
              date="10th May" 
              description="A thrilling 7km run with unique fitness challenges at each Himalayan Java stop! Enjoy coffee, community, and exercise all in one event." 
              registrationLink="#"
            />
            <EventCard title="Weekly Wednesday Run" address="Narayanchaur" description="Join us to achieve a milestone of running 40,000 km in a year (Running around the world)" note="This event repeats every Wednesday." registrationLink="/contact?event=weekly-run" />
            <EventCard title="Coming Soon" />
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-primary">Request Custom Event for Your Company</Link>
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Create Your Own Event
          </h2>
            <p className="text-lg max-w-2xl mx-auto"> Looking to organize a memorable event for your team, friends, or special occasion? Let's collaborate!</p>
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-primary">Contact Us to Host an Event</Link>
          </div>
        </div>
      </section>
    </div>;
};

export default Events;
