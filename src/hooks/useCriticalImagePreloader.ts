
import { useEffect } from 'react';

interface CriticalImage {
  src: string;
  priority?: boolean;
  formats?: ('webp' | 'avif' | 'jpg' | 'png')[];
}

/**
 * Preloads critical images for better performance
 * Use this for hero images and above-the-fold content
 */
export const useCriticalImagePreloader = (images: CriticalImage[] = []) => {
  useEffect(() => {
    if (typeof window === 'undefined' || images.length === 0) return;

    const preloadedLinks: HTMLLinkElement[] = [];

    images.forEach(({ src, priority = true }) => {
      // Skip if already preloaded
      if (document.head.querySelector(`link[href="${src}"]`)) return;

      // For now, only preload the original image format to avoid 404s
      // We can enhance this later when we have proper image optimization pipeline
      const link = document.createElement('link');
      link.rel = priority ? 'preload' : 'prefetch';
      link.as = 'image';
      link.href = src;
      link.crossOrigin = 'anonymous';

      // Error handling
      link.onerror = () => {
        console.warn(`Failed to preload ${src}`);
      };

      link.onload = () => {
        console.log(`✅ Preloaded: ${src}`);
      };

      document.head.appendChild(link);
      preloadedLinks.push(link);
    });

    // Cleanup
    return () => {
      preloadedLinks.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [images]);
};
