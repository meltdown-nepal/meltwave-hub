
import React from "react";
import EventOfferCard from "@/components/EventOfferCard";
import { Activity, Award, Mountain, Puzzle, Bike, CalendarDays } from "lucide-react";

// Card accent colors
const cardColors = [
  "from-orange-100 to-yellow-50 border-primary",
  "from-yellow-100 to-amber-50 border-secondary",
  "from-lime-50 to-green-100 border-green-400",
  "from-cyan-50 to-blue-100 border-blue-300",
  "from-pink-50 to-rose-100 border-pink-300",
  "from-purple-50 to-fuchsia-100 border-fuchsia-300",
  "from-amber-50 to-yellow-100 border-amber-400"
];

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
    <section className="section-padding bg-gradient-to-r from-white via-yellow-50 to-amber-50/70">
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
          {offerTypes.map((offer, i) => (
            <EventOfferCard
              key={offer.title}
              Icon={offer.icon}
              title={offer.title}
              description={offer.description}
              className={`bg-gradient-to-br ${cardColors[i % cardColors.length]} hover:scale-105 hover:shadow-xl transition-transform border-2`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
