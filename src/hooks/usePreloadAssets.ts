
import { useEffect } from 'react';

interface PreloadOptions {
  critical?: boolean;
  as?: string;
}

/**
 * Custom hook to preload critical assets for better performance
 */
export const usePreloadAssets = (assets: Record<string, PreloadOptions> = {}) => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Create links for each asset to preload
    Object.entries(assets).forEach(([url, options]) => {
      const linkEl = document.createElement('link');
      linkEl.rel = options.critical ? 'preload' : 'prefetch';
      linkEl.href = url;
      linkEl.as = options.as || 'image';
      linkEl.crossOrigin = 'anonymous';
      
      // Avoid duplicates
      if (!document.head.querySelector(`link[href="${url}"]`)) {
        document.head.appendChild(linkEl);
      }
    });

    // Cleanup function to remove preloads when component unmounts
    return () => {
      Object.keys(assets).forEach(url => {
        const link = document.head.querySelector(`link[href="${url}"]`);
        if (link && !link.getAttribute('data-permanent')) {
          document.head.removeChild(link);
        }
      });
    };
  }, [assets]);
};
