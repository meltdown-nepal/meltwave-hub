
import { useEffect } from 'react';
import { usePagePerformance } from './usePagePerformance';

/**
 * A hook that monitors application performance and applies optimizations
 */
export const usePerfMonitor = () => {
  const metrics = usePagePerformance();
  
  useEffect(() => {
    // Apply runtime optimizations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Lazy load images when they come into view
        if (entry.isIntersecting && entry.target.tagName === 'IMG') {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            observer.unobserve(img);
          }
        }
      });
    }, { rootMargin: '200px' });
    
    // Find all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      observer.observe(img);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return metrics;
};
