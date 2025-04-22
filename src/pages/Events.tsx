import React from 'react';
import { Link } from 'react-router-dom';
import EventHeroSection from "@/components/EventHeroSection";

// A single compact Card component for display-only purposes
function EventCard({
  title,
  address,
  date,
  description,
  note,
}: {
  title: string;
  address?: string;
  date?: string;
  description?: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl card-gradient shadow-lg p-6 flex flex-col items-start min-h-[210px] border border-gray-100">
      <h3 className="text-xl font-bold mb-1 text-gray-800">{title}</h3>
      {address && (
        <div className="flex items-center text-sm mb-2 text-gray-500">
          <svg className="inline-block mr-2 text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" /></svg>
          {address}
        </div>
      )}
      {date && (
        <div className="flex items-center text-sm mb-2 text-gray-500">
          <svg className="inline-block mr-2 text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" stroke="currentColor" strokeWidth="2"></rect><line x1="16" x2="16" y1="2" y2="6" stroke="currentColor" strokeWidth="2"></line><line x1="8" x2="8" y1="2" y2="6" stroke="currentColor" strokeWidth="2"></line><line x1="3" x2="21" y1="10" y2="10" stroke="currentColor" strokeWidth="2"></line></svg>
          {date}
        </div>
      )}
      {description && (
        <p className="mb-2 text-gray-700">{description}</p>
      )}
      {note && (
        <p className="mb-1 text-xs italic text-secondary-foreground">{note}</p>
      )}
    </div>
  );
}

const Events = () => {
  return (
    <div>
      {/* HERO SECTION: replaced by new component */}
      <EventHeroSection />

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
            <EventCard
              title="Weekly Wednesday Run"
              address="Narayanchaur"
              description="Join us to achieve a milestone of running 40,000 km in a year (Running around the world)"
              note="This event repeats every Wednesday."
            />
            <EventCard
              title="Java Fun Marathon"
              date="10th May"
              description="Code hard, run harder! A unique blend of caffeine, community, and cardio. Get your java fix and join the fun run."
            />
            <EventCard
              title="Coming Soon"
            />
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-primary">Request Custom Event for Your Company</Link>
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      {/* ... keep existing code (Community Initiatives, Past Events Gallery, Host an Event Section, Newsletter Section) the same ... */}
    </div>
  );
};

export default Events;
