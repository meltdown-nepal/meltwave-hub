
import React from 'react';
import { Link } from 'react-router-dom';
import EventHeroSection from "@/components/EventHeroSection";
import { useScrollTo } from '@/hooks/useScrollTo';
import { Button } from '@/components/ui/button';
import EventGalleryImage from '@/components/EventGalleryImage';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

// A single compact Card component for display-only purposes
function EventCard({
  title,
  address,
  date,
  description,
  note,
  showRegister = true,
}: {
  title: string;
  address?: string;
  date?: string;
  description?: string;
  note?: string;
  showRegister?: boolean;
}) {
  return (
    <div className="rounded-xl card-gradient shadow-lg p-6 flex flex-col items-start min-h-[210px] border border-gray-100 hover-scale transition-transform duration-300">
      <h3 className="text-xl font-bold mb-1 text-gray-800">{title}</h3>
      {address && (
        <div className="flex items-center text-sm mb-2 text-gray-500">
          <MapPin className="mr-2 text-primary" size={18} />
          {address}
        </div>
      )}
      {date && (
        <div className="flex items-center text-sm mb-2 text-gray-500">
          <CalendarDays className="mr-2 text-primary" size={18} />
          {date}
        </div>
      )}
      {description && (
        <p className="mb-2 text-gray-700">{description}</p>
      )}
      {note && (
        <p className="mb-4 text-xs italic text-secondary-foreground">{note}</p>
      )}
      {showRegister && (
        <Button className="mt-auto w-full" asChild>
          <Link to="/contact">Register Now</Link>
        </Button>
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
            <div className="rounded-xl card-gradient shadow-lg p-6 flex flex-col items-start min-h-[210px] border border-gray-100 hover-scale transition-transform duration-300">
              <h3 className="text-xl font-bold mb-1 text-gray-800">Weekly Wednesday Run</h3>
              <div className="flex items-center text-sm mb-2 text-gray-500">
                <MapPin className="mr-2 text-primary" size={18} />
                Narayanchaur
              </div>
              <p className="mb-2 text-gray-700">Join us to achieve a milestone of running 40,000 km in a year (Running around the world)</p>
              <p className="mb-4 text-xs italic text-secondary-foreground">This event repeats every Wednesday.</p>
              <Button className="mt-auto w-full" asChild>
                <Link to="/contact">Register Now</Link>
              </Button>
            </div>

            <div className="rounded-xl card-gradient shadow-lg p-6 flex flex-col items-start min-h-[210px] border border-gray-100 hover-scale transition-transform duration-300">
              <h3 className="text-xl font-bold mb-1 text-gray-800">Java Fun Marathon</h3>
              <div className="flex items-center text-sm mb-2 text-gray-500">
                <CalendarDays className="mr-2 text-primary" size={18} />
                10th May
              </div>
              <p className="mb-4 text-gray-700">Code hard, run harder! A unique blend of caffeine, community, and cardio. Get your java fix and join the fun run.</p>
              <Button className="mt-auto w-full" asChild>
                <Link to="/contact">Register Now</Link>
              </Button>
            </div>

            <div className="rounded-xl card-gradient shadow-lg p-6 flex flex-col items-start min-h-[210px] border border-gray-100 hover-scale transition-transform duration-300">
              <h3 className="text-xl font-bold mb-1 text-gray-800">Coming Soon</h3>
              <Button className="mt-auto w-full" asChild variant="outline">
                <Link to="/contact">Get Notified</Link>
              </Button>
            </div>
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-primary hover-scale transition-transform duration-300">Request Custom Event for Your Company</Link>
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
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
            <EventGalleryImage 
              src="https://images.unsplash.com/photo-1519389950473-47a04ca2a54e" 
              title="Tech Meetup"
              alt="People collaborating at tech meetup" 
            />
            <EventGalleryImage 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
              title="Java Workshop"
              alt="Java programming session" 
            />
            <EventGalleryImage 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
              title="Coding Marathon"
              alt="Laptop with code on screen" 
            />
          </div>
        </div>
      </section>

      {/* Host an Event Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Host an Event</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Partner with us to host your own wellness event.
            </p>
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-primary hover-scale transition-transform duration-300">Contact Us to Host an Event</Link>
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
                className="input input-bordered w-full md:w-auto md:mr-2 mb-2 md:mb-0 p-2 rounded-md border border-gray-300"
              />
              <button className="btn-primary hover-scale transition-transform duration-300">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
