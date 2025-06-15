
import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";

export default function EventsCtaSection() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-amber-100 via-yellow-50 to-white overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-pattern-dots pointer-events-none opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-10">
          <div className="mx-auto flex justify-center items-center w-16 h-16 bg-primary/70 rounded-full shadow-lg mb-4 animate-float">
            <CalendarDays className="text-yellow-900" size={38} aria-hidden />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
            Create a Custom Event!
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Planning something special for your team or friends? We’ll help you make it active, healthy, and memorable.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row justify-center items-center">
          <Link to="/contact" className="btn-primary text-lg shadow-md px-7 py-3">
            Contact Us to Host an Event
          </Link>
        </div>
      </div>
      {/* Background pattern — you can define .bg-pattern-dots in your CSS if desired */}
      <style>{`
        .bg-pattern-dots {
          background-image: radial-gradient(#ffd838 1.5px, transparent 1.5px), radial-gradient(#fcb017 1.5px, transparent 1.5px);
          background-size: 25px 25px;
          background-position: 0 0, 12.5px 12.5px;
        }
      `}</style>
    </section>
  );
}
