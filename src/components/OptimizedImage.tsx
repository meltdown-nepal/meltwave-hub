
import React, { useState, useCallback } from 'react';

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

  // For now, let's be conservative and just use the original image format
  // This prevents 404 errors from trying to load non-existent .webp/.avif files
  const getOptimizedSrc = useCallback(() => {
    return src; // Use original source without format conversion for now
  }, [src]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    if (onLoad) onLoad();
    console.log(`✅ Image loaded: ${src}`);
  }, [onLoad, src]);

  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn(`❌ Failed to load image: ${src}`);
    setHasError(true);
    if (onError) onError();
  }, [onError, src]);

  // Intersection Observer for lazy loading
  React.useEffect(() => {
    if (!lazy || priority) {
      setCurrentSrc(getOptimizedSrc());
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSrc(getOptimizedSrc());
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    // We'll observe the placeholder div
    const placeholder = document.querySelector(`[data-img-src="${src}"]`);
    if (placeholder) {
      observer.observe(placeholder);
    }

    return () => observer.disconnect();
  }, [lazy, priority, getOptimizedSrc, src]);

  // Fallback for broken images
  if (hasError) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center ${className}`}
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

  // Show placeholder while loading
  if (!currentSrc) {
    return (
      <div 
        className={`bg-gray-100 animate-pulse ${className}`}
        style={{ width, height, aspectRatio: width && height ? `${width}/${height}` : undefined }}
        data-img-src={src}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      width={width}
      height={height}
      loading={priority ? 'eager' : lazy ? 'lazy' : 'eager'}
      decoding={priority ? 'sync' : 'async'}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined,
      }}
    />
  );
};

export default OptimizedImage;
