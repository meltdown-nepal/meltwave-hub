
import React from "react";
import EventOfferCard from "@/components/EventOfferCard";
import { Activity, Award, Mountain, Puzzle, Bike, CalendarDays } from "lucide-react";

// Single card accent style—simple neutral palette
const cardStyles =
  "bg-white border-primary/20 hover:border-primary hover:shadow-lg";

export default function WhatWeOfferSection() {
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
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            What We Offer
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            From high-energy bootcamps to relaxing hikes, we have events for every interest and fitness level.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerTypes.map((offer) => (
            <EventOfferCard
              key={offer.title}
              Icon={offer.icon}
              title={offer.title}
              description={offer.description}
              className={`transition-transform duration-300 border-2 ${cardStyles} hover:scale-105`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
