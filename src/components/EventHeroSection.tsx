
import React from 'react';

interface EventHeroSectionProps {
  onSeeUpcoming?: () => void;
}

const EventHeroSection: React.FC<EventHeroSectionProps> = ({ onSeeUpcoming }) => {
  return (
    <section className="bg-gradient-to-b from-primary/20 to-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Community Wellness Events
            </h1>
            <p className="text-lg mb-8">
              Join our community-centered wellness events designed to promote health, connection, and overall well-being.
            </p>
            <button
              onClick={onSeeUpcoming}
              className="btn-primary hover-scale transition-transform duration-300"
              aria-label="See upcoming events"
            >
              See Upcoming Events
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47a04ca2a54e"
              alt="Community Event"
              className="rounded-lg shadow-xl max-w-full h-auto hover-scale transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHeroSection;
