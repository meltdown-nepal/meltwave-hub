
import React, { useEffect } from 'react';

interface PreloadResource {
  href: string;
  as: 'image' | 'font' | 'script' | 'style' | 'document';
  type?: string;
  crossorigin?: 'anonymous' | 'use-credentials';
  fetchpriority?: 'high' | 'low' | 'auto';
}

interface ResourcePreloaderProps {
  resources: PreloadResource[];
  enabled?: boolean;
}

const ResourcePreloader: React.FC<ResourcePreloaderProps> = ({ 
  resources, 
  enabled = true 
}) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const preloadLinks: HTMLLinkElement[] = [];

    resources.forEach(resource => {
      // Check if already preloaded
      const existing = document.head.querySelector(`link[href="${resource.href}"]`);
      if (existing) return;

      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      if (resource.fetchpriority) link.setAttribute('fetchpriority', resource.fetchpriority);

      // Add error handling
      link.onerror = () => {
        console.warn(`Failed to preload resource: ${resource.href}`);
      };

      document.head.appendChild(link);
      preloadLinks.push(link);
    });

    // Cleanup function
    return () => {
      preloadLinks.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [resources, enabled]);

  return null; // This component doesn't render anything
};

export default ResourcePreloader;
