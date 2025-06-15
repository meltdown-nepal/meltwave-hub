
import React from 'react';
import EventHeroSection from "@/components/EventHeroSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import FeaturedEventsSection from "@/components/events/FeaturedEventsSection";
import EventGallerySection from "@/components/events/EventGallerySection";
import WhatWeOfferSection from "@/components/events/WhatWeOfferSection";
import EventsCtaSection from "@/components/events/EventsCtaSection";

const Events = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <div>
      <EventHeroSection onSeeUpcomingClick={() => scrollToSection('upcoming')} />
      <EventGallerySection />
      <FeaturedEventsSection />
      <WhatWeOfferSection />
      <EventsCtaSection />
    </div>
  );
};
export default Events;
