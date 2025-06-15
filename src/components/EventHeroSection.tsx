import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Dumbbell, HeartPulse, Timer } from "lucide-react";
import HeroImage from "./HeroImage";

// Utility function to get the date and time of the next Wednesday at 9:00 AM
function getNextWednesday9am() {
  const now = new Date();
  const nextWednesday = new Date(now);
  // 0: Sunday, 1: Monday, ..., 3: Wednesday
  const currentDay = now.getDay();
  const daysUntilWednesday = (3 - currentDay + 7) % 7 || 7;
  nextWednesday.setDate(now.getDate() + daysUntilWednesday);
  nextWednesday.setHours(9, 0, 0, 0); // Set to 9:00 AM
  // If it's already Wednesday and before 9:00 AM, today is the event
  if (currentDay === 3 && now.getHours() < 9) {
    nextWednesday.setDate(now.getDate());
  }
  return nextWednesday;
}

function getCountdown(date: Date) {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  if (diff <= 0) return {
    d: 0,
    h: 0,
    m: 0,
    s: 0
  };
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor(diff / (1000 * 60 * 60) % 24);
  const m = Math.floor(diff / (1000 * 60) % 60);
  const s = Math.floor(diff / 1000 % 60);
  return {
    d,
    h,
    m,
    s
  };
}

const fitnessIcons = [{
  Icon: Dumbbell,
  className: "left-8 top-10 animate-[float1_6s_ease-in-out_infinite]"
}, {
  Icon: HeartPulse,
  className: "right-8 top-28 animate-[float2_7s_ease-in-out_infinite] hidden md:block"
}];

interface EventHeroSectionProps {
  onSeeUpcomingClick: () => void;
}

export default function EventHeroSection({
  onSeeUpcomingClick
}: EventHeroSectionProps) {
  const [nextRun, setNextRun] = useState<Date>(getNextWednesday9am());
  const [countdown, setCountdown] = useState(getCountdown(nextRun));
  const intervalRef = useRef<number>();

  const updateCountdown = useCallback(() => {
    const n = getNextWednesday9am();
    setNextRun(n);
    setCountdown(getCountdown(n));
  }, []);

  useEffect(() => {
    // Initial setup
    updateCountdown();

    // Optimized timer with requestAnimationFrame for better performance
    const updateTimer = () => {
      updateCountdown();
      intervalRef.current = window.setTimeout(updateTimer, 1000);
    };
    
    // Start timer after a short delay to prevent blocking initial render
    intervalRef.current = window.setTimeout(updateTimer, 100);
    
    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [updateCountdown]);

  return (
    <section className="relative min-h-[440px] md:min-h-[500px] flex items-center justify-center section-padding">
      {/* Background Image with optimization and blur */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="w-full h-full">
          <HeroImage 
            src="/lovable-uploads/06f13e5b-dd31-41bf-abda-f09377f873fe.png" 
            alt="Group of fitness enthusiasts at a stadium track" 
            className="w-full h-full object-cover blur-sm md:blur transition-all duration-500"
            priority
            width={1400} 
            height={800}
          />
        </div>
        {/* Dark overlay with gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
      </div>

      {/* Optimized floating fitness icons */}
      {fitnessIcons.map(({
        Icon,
        className
      }, i) => (
        <Icon 
          key={i} 
          size={46} 
          className={`absolute text-primary opacity-70 drop-shadow-lg pointer-events-none ${className}`} 
          aria-hidden 
        />
      ))}

      {/* Content */}
      <div className="relative z-10 w-full text-center mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 animate-fade-in tracking-tight text-white" style={{
          animationDelay: "0.1s"
        }}>
          Ready for the Next Challenge?
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-100 animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
          Join the movement! Explore upcoming wellness events, workshops and fitness initiatives designed to inspire and energize.
        </p>
        {/* Optimized Countdown */}
        <div className="flex justify-center gap-2 mb-8 items-center animate-scale-in text-white">
          <Timer className="text-primary" aria-hidden />
          <span className="font-semibold tabular-nums">
            {countdown.d}d {countdown.h}h {countdown.m}m {countdown.s}s
          </span>
          <span className="text-gray-200">until next Wednesday Run</span>
        </div>
        {/* CTA Button */}
        <button 
          onClick={onSeeUpcomingClick} 
          className="btn-primary text-lg px-8 py-3 shadow-lg animate-slide-in-right" 
          style={{
            animationDelay: "0.6s"
          }}
        >
          Scroll to Events
        </button>
      </div>

      {/* Optimized CSS for floating icons & animations */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -18px, 0); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, -30px, 0) scale(1.1); }
        }
        @keyframes float3 {
          0% { transform: translate3d(0, 0, 0) rotate(-4deg);}
          50% { transform: translate3d(0, -16px, 0) rotate(3deg);}
          100% { transform: translate3d(0, 0, 0) rotate(-4deg);}
        }
        
        /* Optimize animations for better performance */
        [class*="animate-"] {
          will-change: transform;
          backface-visibility: hidden;
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-"] {
            animation-duration: 0.01s !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
