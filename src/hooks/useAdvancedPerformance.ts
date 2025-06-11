
import { useEffect, useState } from 'react';

interface AdvancedPerformanceMetrics {
  fcp: number;
  lcp: number;
  cls: number;
  fid: number;
  ttfb: number;
  domContentLoaded: number;
  loadComplete: number;
  resourceCount: number;
  totalResourceSize: number;
}

export const useAdvancedPerformance = () => {
  const [metrics, setMetrics] = useState<Partial<AdvancedPerformanceMetrics>>({});
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    setIsSupported(true);

    const measureMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      const newMetrics: Partial<AdvancedPerformanceMetrics> = {
        ttfb: navigation.responseStart - navigation.requestStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.startTime,
        loadComplete: navigation.loadEventEnd - navigation.startTime,
      };

      // Get resource metrics
      const resources = performance.getEntriesByType('resource');
      newMetrics.resourceCount = resources.length;
      newMetrics.totalResourceSize = resources.reduce((total, resource: any) => {
        return total + (resource.transferSize || 0);
      }, 0);

      setMetrics(prev => ({ ...prev, ...newMetrics }));
    };

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // Cumulative Layout Shift
          const clsObserver = new PerformanceObserver((list) => {
            let clsValue = 0;
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                clsValue += (entry as any).value;
              }
            }
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

        } catch (e) {
          console.log('Performance observer not fully supported');
        }
      }
    };

    if (document.readyState === 'complete') {
      measureMetrics();
      measureWebVitals();
    } else {
      window.addEventListener('load', () => {
        measureMetrics();
        measureWebVitals();
      });
    }

    // Log performance warnings in development
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        const currentMetrics = metrics;
        if (currentMetrics.lcp && currentMetrics.lcp > 2500) {
          console.warn('⚠️ Poor LCP detected:', currentMetrics.lcp + 'ms');
        }
        if (currentMetrics.fcp && currentMetrics.fcp > 1800) {
          console.warn('⚠️ Slow FCP detected:', currentMetrics.fcp + 'ms');
        }
        if (currentMetrics.cls && currentMetrics.cls > 0.1) {
          console.warn('⚠️ High CLS detected:', currentMetrics.cls);
        }
      }, 3000);
    }
  }, [metrics]);

  return {
    metrics,
    isSupported,
    // Helper functions
    getPerformanceGrade: () => {
      if (!metrics.lcp || !metrics.fcp) return 'measuring...';
      
      const lcpGood = (metrics.lcp || 0) <= 2500;
      const fcpGood = (metrics.fcp || 0) <= 1800;
      const clsGood = (metrics.cls || 0) <= 0.1;
      
      const goodCount = [lcpGood, fcpGood, clsGood].filter(Boolean).length;
      
      if (goodCount === 3) return 'excellent';
      if (goodCount === 2) return 'good';
      if (goodCount === 1) return 'needs improvement';
      return 'poor';
    }
  };
};
