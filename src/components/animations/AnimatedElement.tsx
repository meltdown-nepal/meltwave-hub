
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'stagger';
  delay?: number;
  duration?: number;
  className?: string;
  staggerDelay?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  className = '',
  staggerDelay = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all ease-out';
    const durationClass = `duration-[${Math.round(duration * 1000)}ms]`;
    
    if (!isVisible) {
      switch (animation) {
        case 'slideUp':
          return `${baseClass} ${durationClass} opacity-0 translate-y-8`;
        case 'slideLeft':
          return `${baseClass} ${durationClass} opacity-0 translate-x-8`;
        case 'slideRight':
          return `${baseClass} ${durationClass} opacity-0 -translate-x-8`;
        case 'scaleIn':
          return `${baseClass} ${durationClass} opacity-0 scale-95`;
        case 'stagger':
          return `${baseClass} ${durationClass} opacity-0 translate-y-4`;
        default:
          return `${baseClass} ${durationClass} opacity-0`;
      }
    }
    
    return `${baseClass} ${durationClass} opacity-100 translate-x-0 translate-y-0 scale-100`;
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedElement;
