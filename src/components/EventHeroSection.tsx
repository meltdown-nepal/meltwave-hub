
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Dumbbell, HeartPulse, Timer } from "lucide-react";

const eventDate = new Date("2025-06-15T09:00:00"); // Next event start date/time

function getCountdown() {
  const now = new Date();
  const diff = eventDate.getTime() - now.getTime();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

const fitnessIcons = [
  { Icon: Dumbbell, className: "left-8 top-10 animate-[float1_6s_ease-in-out_infinite]" },
  { Icon: HeartPulse, className: "right-8 top-28 animate-[float2_7s_ease-in-out_infinite] hidden md:block" },
];

export default function EventHeroSection() {
  const [countdown, setCountdown] = useState(getCountdown());
  const intervalRef = useRef<number>();

  useEffect(() => {
    intervalRef.current = window.setInterval(
      () => setCountdown(getCountdown()),
      1000
    );
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section
      className="relative min-h-[440px] md:min-h-[500px] flex items-center justify-center section-padding"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80"
          alt="People running marathon event"
          className="w-full h-full object-cover brightness-100"
          draggable={false}
        />
        {/* White/pastel overlay */}
        <div className="absolute inset-0 bg-white/80 md:bg-white/60" />
      </div>

      {/* Floating fitness icons */}
      {fitnessIcons.map(({ Icon, className }, i) => (
        <Icon
          key={i}
          size={46}
          className={`absolute text-secondary opacity-70 drop-shadow-lg pointer-events-none ${className}`}
          aria-hidden
        />
      ))}

      {/* Content */}
      <div className="relative z-10 w-full text-center mx-auto max-w-3xl">
        <h1
          className="text-3xl md:text-5xl font-extrabold mb-6 animate-fade-in tracking-tight text-gray-800"
          style={{ animationDelay: "0.1s" }}
        >
          Ready for the Next Challenge?
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Join the movement! Explore upcoming wellness events, workshops and fitness initiatives designed to inspire and energize.
        </p>
        {/* Countdown */}
        <div className="flex justify-center gap-2 mb-8 items-center animate-scale-in text-black">
          <Timer className="text-secondary" aria-hidden />
          <span className="font-semibold">
            {countdown.d}d {countdown.h}h {countdown.m}m {countdown.s}s
          </span>
          <span className="text-gray-700">until next event</span>
        </div>
        {/* CTA Button */}
        <Link
          to="#upcoming"
          className="btn-primary text-lg px-8 py-3 shadow-lg animate-slide-in-right"
          style={{ animationDelay: "0.6s" }}
        >
          See Upcoming Events
        </Link>
      </div>

      {/* Subtle CSS for floating icons & animations */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }
        @keyframes float3 {
          0% { transform: translateY(0) rotate(-4deg);}
          50% { transform: translateY(-16px) rotate(3deg);}
          100% { transform: translateY(0) rotate(-4deg);}
        }
      `}</style>
    </section>
  );
}

