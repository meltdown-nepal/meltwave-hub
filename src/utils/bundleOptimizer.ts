
// Bundle splitting utilities for better performance

export const createAsyncImport = <T>(importFn: () => Promise<T>) => {
  let cache: Promise<T> | null = null;
  
  return (): Promise<T> => {
    if (!cache) {
      cache = importFn().catch(error => {
        cache = null; // Reset cache on error
        throw error;
      });
    }
    return cache;
  };
};

// Preload modules for better UX
export const preloadModule = (importFn: () => Promise<any>) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    requestIdleCallback(() => {
      importFn().catch(() => {
        // Ignore preload errors
      });
    });
  }
};

// Critical resource hints
export const addResourceHints = () => {
  if (typeof document === 'undefined') return;

  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
  ];

  hints.forEach(hint => {
    if (!document.head.querySelector(`link[href="${hint.href}"]`)) {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossorigin) link.crossOrigin = hint.crossorigin;
      document.head.appendChild(link);
    }
  });
};

// Performance budget checker
export const checkPerformanceBudget = () => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) return true;
  
  const connection = (navigator as any).connection;
  
  // Reduce quality on slow connections
  if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
    console.log('Slow connection detected, optimizing...');
    return false;
  }
  
  return true;
};
