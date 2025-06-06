
import React, { useState, useEffect } from 'react';
import OptimizedImage from './OptimizedImage';

interface PreloaderAnimationProps {
  onLoadComplete?: () => void;
}

const PreloaderAnimation: React.FC<PreloaderAnimationProps> = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Allow some minimum time for the animation to be shown
    const minDisplayTime = 1500;
    const startTime = Date.now();

    // After the page loads, we'll check if min time passed, then hide
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      setTimeout(() => {
        setIsVisible(false);
        if (onLoadComplete) onLoadComplete();
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        <div className="animate-logo-pulse">
          <OptimizedImage
            src="/lovable-uploads/7067dee3-ca5b-449c-b05e-836f3b83b8e3.png"
            alt="Meltdown Logo"
            width={100}
            height={100}
            priority
            className="w-24 h-24 animate-logo-scale"
          />
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full animate-glow"></div>
      </div>
    </div>
  );
};

export default PreloaderAnimation;
