import React from 'react';
import { Link } from 'react-router-dom';
import EventHeroSection from "@/components/EventHeroSection";
import { useScrollTo } from '@/hooks/useScrollTo';
import { Button } from '@/components/ui/button';

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
  const { scrollToSection } = useScrollTo();

  return (
    <div>
      {/* HERO SECTION */}
      <EventHeroSection onSeeUpcoming={() => scrollToSection('upcoming')} />

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
            <div className="rounded-xl card-gradient shadow-lg p-6 flex flex-col items-start min-h-[210px] border border-gray-100">
              <h3 className="text-xl font-bold mb-1 text-gray-800">Weekly Wednesday Run</h3>
              <div className="flex items-center text-sm mb-2 text-gray-500">
                <svg className="inline-block mr-2 text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" /></svg>
                Narayanchaur
              </div>
              <p className="mb-2 text-gray-700">Join us to achieve a milestone of running 40,000 km in a year (Running around the world)</p>
              <p className="mb-4 text-xs italic text-secondary-foreground">This event repeats every Wednesday.</p>
              <Button className="mt-auto w-full" asChild>
                <Link to="/contact">Register Now</Link>
              </Button>
            </div>

            <div className="rounded-xl card-gradient shadow-lg p-6 flex flex-col items-start min-h-[210px] border border-gray-100">
              <h3 className="text-xl font-bold mb-1 text-gray-800">Java Fun Marathon</h3>
              <div className="flex items-center text-sm mb-2 text-gray-500">
                <svg className="inline-block mr-2 text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" stroke="currentColor" strokeWidth="2"></rect><line x1="16" x2="16" y1="2" y2="6" stroke="currentColor" strokeWidth="2"></line><line x1="8" x2="8" y1="2" y2="6" stroke="currentColor" strokeWidth="2"></line><line x1="3" x2="21" y1="10" y2="10" stroke="currentColor" strokeWidth="2"></line></svg>
                10th May
              </div>
              <p className="mb-4 text-gray-700">Code hard, run harder! A unique blend of caffeine, community, and cardio. Get your java fix and join the fun run.</p>
              <Button className="mt-auto w-full" asChild>
                <Link to="/contact">Register Now</Link>
              </Button>
            </div>

            <div className="rounded-xl card-gradient shadow-lg p-6 flex flex-col items-start min-h-[210px] border border-gray-100">
              <h3 className="text-xl font-bold mb-1 text-gray-800">Coming Soon</h3>
              <Button className="mt-auto w-full" asChild variant="outline">
                <Link to="/contact">Get Notified</Link>
              </Button>
            </div>
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-primary">Request Custom Event for Your Company</Link>
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Community Initiatives</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Engage with our community through various wellness initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EventCard
              title="Free Yoga Sessions"
              address="Community Park"
              date="Every Saturday"
              description="Join us for free yoga sessions in the park. All levels welcome!"
            />
            <EventCard
              title="Nutrition Workshops"
              date="15th June"
              description="Learn about healthy eating habits and improve your nutrition knowledge."
            />
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Past Events Gallery</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Relive the moments from our past wellness events.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Replace with actual image gallery */}
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="text-gray-500">Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Host an Event Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Host an Event</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Partner with us to host your own wellness event.
            </p>
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-primary">Contact Us to Host an Event</Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Stay updated with our latest events and wellness tips.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full md:w-auto md:mr-2 mb-2 md:mb-0"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
