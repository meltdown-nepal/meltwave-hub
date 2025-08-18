
import React, { useState, useCallback } from 'react';
import { getOptimizedImageSrc } from '../utils/imageRegistry';

interface OptimizedImageV2Props {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  priority?: boolean;
  fallbackSrc?: string;
}

const OptimizedImageV2: React.FC<OptimizedImageV2Props> = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes,
  onLoad,
  onError,
  priority = false,
  fallbackSrc = '/placeholder.svg',
}) => {
  const [currentSrc, setCurrentSrc] = useState(src); // Use original src first
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    onLoad?.(e);
  }, [onLoad]);

  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn(`Image failed to load: ${currentSrc}`);
    if (!hasError) {
      setHasError(true);
      // Try optimized version if original fails
      if (currentSrc === src) {
        const optimizedSrc = getOptimizedImageSrc(src);
        if (optimizedSrc !== src) {
          setCurrentSrc(optimizedSrc);
          return;
        }
      }
      // Fallback to placeholder
      if (currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
      }
    }
    onError?.(e);
  }, [hasError, currentSrc, src, fallbackSrc, onError]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined,
      }}
    />
  );
};

export default OptimizedImageV2;
