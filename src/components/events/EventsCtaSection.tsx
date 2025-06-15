
import React from "react";
import { Link } from "react-router-dom";

export default function EventsCtaSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Create Your Own Event</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Looking to organize a memorable event for your team, friends, or special occasion? Let's collaborate!
          </p>
        </div>
        <div className="text-center">
          <Link to="/contact" className="btn-primary">Contact Us to Host an Event</Link>
        </div>
      </div>
    </section>
  );
}
