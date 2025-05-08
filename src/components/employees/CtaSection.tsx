
import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="section-padding bg-primary/20">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Well-being?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Talk to your employer about Meltdown wellness programs or contact us directly to learn how you can participate.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/schedule-demo" className="btn-primary">Contact Us</Link>
          <Link to="/events" className="btn-outline">Explore Upcoming Events</Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
