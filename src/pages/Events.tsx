import React from 'react';
import { Link } from 'react-router-dom';
import EventHeroSection from "@/components/EventHeroSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import EventGalleryImage from "@/components/EventGalleryImage";

// A single compact Card component for display-only purposes
function EventCard({
  title,
  address,
  date,
  description,
  note
}: {
  title: string;
  address?: string;
  date?: string;
  description?: string;
  note?: string;
}) {
  return <div className="rounded-xl card-gradient shadow-lg p-6 flex flex-col items-start min-h-[210px] border border-gray-100">
      <h3 className="text-xl font-bold mb-1 text-gray-800">{title}</h3>
      {address && <div className="flex items-center text-sm mb-2 text-gray-500">
          <svg className="inline-block mr-2 text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" /></svg>
          {address}
        </div>}
      {date && <div className="flex items-center text-sm mb-2 text-gray-500">
          <svg className="inline-block mr-2 text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" stroke="currentColor" strokeWidth="2"></rect><line x1="16" x2="16" y1="2" y2="6" stroke="currentColor" strokeWidth="2"></line><line x1="8" x2="8" y1="2" y2="6" stroke="currentColor" strokeWidth="2"></line><line x1="3" x2="21" y1="10" y2="10" stroke="currentColor" strokeWidth="2"></line></svg>
          {date}
        </div>}
      {description && <p className="mb-2 text-gray-700">{description}</p>}
      {note && <p className="mb-1 text-xs italic text-secondary-foreground">{note}</p>}
    </div>;
}
const Events = () => {
  const {
    scrollToSection
  } = useSmoothScroll();
  return <div>
      {/* Hero Section: pass scrollToSection to EventHeroSection */}
      <EventHeroSection onSeeUpcomingClick={() => scrollToSection('upcoming')} />

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Highlights from Past Events</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-600">
              Relive the energy and inspiration from our wellness community gatherings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventGalleryImage src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80" title="Community Running Event" alt="Group of people running together at sunrise" />
            <EventGalleryImage src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80" title="Meditation by the Lake" alt="Peaceful lake surrounded by trees" />
            <EventGalleryImage src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80" title="Wellness Workshop" alt="People participating in a wellness workshop" />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="upcoming" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Upcoming Events</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Discover and join our latest community-centered wellness events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <EventCard title="Weekly Wednesday Run" address="Narayanchaur" description="Join us to achieve a milestone of running 40,000 km in a year (Running around the world)" note="This event repeats every Wednesday." />
            <EventCard title="Java Fun Marathon" date="10th May" description="Code hard, run harder! A unique blend of caffeine, community, and cardio. Get your java fix and join the fun run." />
            <EventCard title="Coming Soon" />
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-primary">Request Custom Event for Your Company</Link>
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Community Initiatives</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Explore our ongoing projects and how you can contribute to community wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard title="Clean-Up Drives" description="Join our monthly clean-up drives to keep our community spaces clean and green." />
            <EventCard title="Wellness Workshops" description="Attend our free wellness workshops covering topics like nutrition, mental health, and fitness." />
            <EventCard title="Support Groups" description="Connect with others in our support groups for various health and wellness needs." />
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      

      {/* Host an Event Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Host an Event</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Interested in hosting a wellness event with us? Let's collaborate!
            </p>
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-primary">Contact Us to Host an Event</Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      
    </div>;
};
export default Events;