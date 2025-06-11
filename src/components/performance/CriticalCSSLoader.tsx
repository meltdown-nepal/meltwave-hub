
import React, { useEffect, useState } from 'react';

interface CriticalCSSLoaderProps {
  children: React.ReactNode;
}

const CriticalCSSLoader: React.FC<CriticalCSSLoaderProps> = ({ children }) => {
  const [isNonCriticalLoaded, setIsNonCriticalLoaded] = useState(false);

  useEffect(() => {
    // Load non-critical CSS after initial render
    const loadNonCriticalCSS = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/non-critical.css';
      link.onload = () => setIsNonCriticalLoaded(true);
      document.head.appendChild(link);
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadNonCriticalCSS);
    } else {
      setTimeout(loadNonCriticalCSS, 100);
    }
  }, []);

  return <>{children}</>;
};

export default CriticalCSSLoader;
