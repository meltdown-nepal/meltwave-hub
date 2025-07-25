import React from "react";
import { Link } from "react-router-dom";
import { Award, CalendarDays, Coffee, MapPin, Target, Users, TreePine, Clock, Flag, Mountain, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

// Java Run Venture Card
function JavaRunVentureCard() {
  const {
    scrollToSection
  } = useSmoothScroll();
  return <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-primary shadow-lg p-6 flex flex-col items-start min-h-[300px] relative overflow-hidden">
      <div className="absolute top-0 right-0 text-amber-100 opacity-50">
        <Coffee size={120} />
      </div>
      <div className="relative z-10 w-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">☕</span>
          <h3 className="text-xl font-bold text-gray-800">Java Run Venture</h3>
        </div>
        <p className="text-gray-700 font-medium mb-4 flex items-center gap-1">
          Run, Coffee, Repeat! <span>🏃‍♂️☕</span>
        </p>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-gray-700">
            <CalendarDays size={16} className="text-primary" />
            <span className="font-medium">10th May</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Target size={16} className="text-primary" />
            <span className="font-medium">7km thrilling run with fitness challenges</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Coffee size={16} className="text-primary" />
            <span className="font-medium">Stop at every Himalayan Java location!</span>
          </div>
        </div>
        <div className="bg-primary/15 rounded-lg p-3 mb-4 border border-primary/30">
          <div className="flex items-center gap-2 text-gray-800 font-semibold">
            <Award size={16} />
            <span>Collect fun goodies at every station!</span>
          </div>
        </div>
        <Button className="mt-auto bg-primary hover:bg-primary/90 text-black font-semibold w-full" type="button" onClick={() => scrollToSection('event-gallery')}>
          View Gallery
        </Button>
      </div>
    </div>;
}

// Weekly Wednesday Run Card
function WeeklyWednesdayRunCard() {
  return <div className="rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-secondary shadow-lg p-6 flex flex-col items-start min-h-[300px] relative overflow-hidden">
      <div className="absolute top-0 right-0 text-orange-100 opacity-50">
        <Target size={120} />
      </div>
      <div className="relative z-10 w-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🏃‍♂️</span>
          <h3 className="text-xl font-bold text-gray-800">Around the world with Meltdown Run Club</h3>
        </div>
        <p className="text-gray-700 font-medium mb-4 flex items-center gap-1">
          Running around the world, one step at a time! <span>🌍💪</span>
        </p>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin size={16} className="text-secondary" />
            <span className="font-medium">Narayanchaur</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Clock size={16} className="text-secondary" />
            <span className="font-medium">Every Wednesday</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Users size={16} className="text-secondary" />
            <span className="font-medium">Join our community challenge! </span>
          </div>
        </div>
        <div className="bg-secondary/10 rounded-lg p-3 mb-4 border border-secondary/20">
          <div className="flex items-center gap-2 text-gray-800 font-semibold">
            <Target size={16} />
            <span>Goal: 40,000 km in a year!</span>
          </div>
        </div>
        <Button className="mt-auto bg-secondary hover:bg-primary text-black font-semibold w-full" asChild>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfC2UpIB4F5RbDFSgZNGwt1DQDEaxgSEuoj3RibEyiN3DD5yA/viewform" target="_blank" rel="noopener noreferrer">🎯 Join the Challenge</a>
        </Button>
      </div>
    </div>;
}

// Kathmandu Marathon 2025 Card
function KathmanduMarathonCard() {
  return <div className="rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-primary shadow-lg p-6 flex flex-col items-start min-h-[300px] relative overflow-hidden">
      {/* Prayer flags decoration */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 opacity-70"></div>
      <div className="absolute top-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 opacity-60"></div>
      
      {/* Mountain silhouette */}
      <div className="absolute top-0 right-0 text-amber-100 opacity-30">
        <Mountain size={120} />
      </div>
      
      <div className="relative z-10 w-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🏃‍♂️</span>
          <h3 className="text-xl font-bold text-gray-800">Kathmandu Marathon 2025</h3>
          <span className="text-lg">🇳🇵</span>
        </div>
        <p className="text-gray-700 font-bold mb-4 flex items-center gap-1 text-amber-700">
          Run for Unity. Run for Nepal. <span>🔥</span>
        </p>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin size={16} className="text-primary" />
            <span className="font-medium">Dasharath Rangasala
, Kathmandu</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <CalendarDays size={16} className="text-primary" />
            <span className="font-medium">November 1, 2025 (Saturday) | From 5 AM</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Users size={16} className="text-primary" />
            <span className="font-medium">Open to all — runners, dreamers & changemakers!</span>
          </div>
        </div>
        <div className="bg-primary/15 rounded-lg p-3 mb-4 border border-primary/30">
          <div className="flex items-center gap-2 text-gray-800 font-semibold text-sm">
            <span className="text-amber-600">🎟️</span>
            <span>Use Code: <strong className="text-amber-700">17KM-MD-10</strong> for special offer!</span>
          </div>
        </div>
        <Button className="mt-auto bg-primary hover:bg-primary/90 text-black font-semibold w-full" asChild>
          <a href="https://kathmandumarathon.com.np/member-login" target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </Button>
      </div>
    </div>;
}

// The main events feature cards grid
export default function FeaturedEventsSection() {
  return <section id="upcoming" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Events  </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover and join our latest community-centered wellness events.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <JavaRunVentureCard />
          <WeeklyWednesdayRunCard />
          <KathmanduMarathonCard />
        </div>
        <div className="text-center">
          <Link to="/contact" className="btn-primary">Request Custom Event for Your Company</Link>
        </div>
      </div>
    </section>;
}