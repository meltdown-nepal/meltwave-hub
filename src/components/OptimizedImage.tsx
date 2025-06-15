
import React, { useState, useCallback, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  lazy?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  quality?: 'low' | 'medium' | 'high';
  responsive?: boolean;
}

const skeletonBg: Record<'low'|'medium'|'high', string> = {
  low: 'bg-gray-200',
  medium: 'bg-gray-100',
  high: 'bg-gray-50',
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  width,
  height,
  lazy = true,
  sizes,
  onLoad,
  onError,
  quality = 'medium',
  responsive = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  // For now, just return PNG/Original for src
  const getOptimizedSrc = useCallback(() => src, [src]);

  // Lazy/eager logic with Intersection Observer
  React.useEffect(() => {
    if (!lazy || priority) {
      setCurrentSrc(getOptimizedSrc());
      return;
    }

    const imgId = `img-${Math.random().toString(36).slice(2, 8)}`;
    let node: HTMLElement | null = null;

    const doLoad = () => setCurrentSrc(getOptimizedSrc());

    // Observe the placeholder for visibility
    setTimeout(() => {
      node = document.querySelector(`[data-img-holder="${imgId}"]`);
      if (node && "IntersectionObserver" in window) {
        observer.current = new window.IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              doLoad();
              obs.disconnect();
            }
          });
        }, { rootMargin: '75px' });
        observer.current.observe(node);
      } else {
        // Fallback: load immediately if observer missing
        doLoad();
      }
    }, 0);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [lazy, priority, getOptimizedSrc, src]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    if (onLoad) onLoad();
    // Remove skeleton only after actual image is loaded
    console.log(`✅ Image loaded: ${src}`);
  }, [onLoad, src]);

  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true);
    if (onError) onError();
    console.warn(`❌ Failed to load image: ${src}`);
  }, [onError, src]);

  // Shutdown the observer if component removed early (avoid memory leaks)
  React.useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  // Fallback for broken images
  if (hasError) {
    return (
      <div 
        className={`flex items-center justify-center ${className} bg-gray-100`}
        style={{ width, height }}
        data-img-error={src}
      >
        <div className="text-center p-4">
          <div className="w-8 h-8 bg-gray-300 rounded mx-auto mb-2"></div>
          <span className="text-gray-500 text-xs">Image unavailable</span>
        </div>
      </div>
    );
  }

  // Show skeleton placeholder while image is loading or waiting to lazy load
  if (!currentSrc || !isLoaded) {
    return (
      <div
        className={`flex items-center justify-center ${className} ${skeletonBg[quality]} animate-pulse`}
        style={{ width, height, aspectRatio: width && height ? `${width}/${height}` : undefined }}
        data-img-holder={`img-${src.replace(/[^a-z0-9]/gi,'')}`}
      >
        <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-400`}
      width={width}
      height={height}
      loading={priority ? 'eager' : lazy ? 'lazy' : 'eager'}
      decoding={priority ? 'sync' : 'async'}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined,
      }}
      sizes={sizes}
    />
  );
};

export default OptimizedImage;
