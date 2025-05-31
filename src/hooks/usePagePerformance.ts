
import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
}

export const usePagePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        // Get paint metrics
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        
        // Get LCP if available
        let lcp = 0;
        if ('PerformanceObserver' in window) {
          try {
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              lcp = lastEntry.startTime;
              observer.disconnect();
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch (e) {
            console.log('LCP measurement not supported');
          }
        }

        const performanceMetrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.startTime,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.startTime,
          firstContentfulPaint: fcpEntry ? fcpEntry.startTime : 0,
          largestContentfulPaint: lcp
        };

        setMetrics(performanceMetrics);

        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Page Performance Metrics:', performanceMetrics);
          
          // Performance warnings
          if (performanceMetrics.loadTime > 3000) {
            console.warn('⚠️ Page load time is over 3 seconds');
          }
          if (performanceMetrics.firstContentfulPaint > 1500) {
            console.warn('⚠️ First Contentful Paint is over 1.5 seconds');
          }
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  return metrics;
};
