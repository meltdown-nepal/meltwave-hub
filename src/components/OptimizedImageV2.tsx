
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
  const [currentSrc, setCurrentSrc] = useState(getOptimizedImageSrc(src));
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);
    onLoad?.(e);
  }, [onLoad]);

  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!hasError) {
      setHasError(true);
      // Try fallback to original format if WebP fails
      if (currentSrc.includes('.webp')) {
        setCurrentSrc(src);
      } else if (currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
      }
    }
    onError?.(e);
  }, [hasError, currentSrc, src, fallbackSrc, onError]);

  // Generate responsive srcSet for better performance
  const generateSrcSet = useCallback(() => {
    if (!currentSrc.startsWith('/lovable-uploads/')) return undefined;
    
    const baseSrc = currentSrc.replace(/\.(webp|png|jpg|jpeg)$/i, '');
    const extension = currentSrc.match(/\.(webp|png|jpg|jpeg)$/i)?.[0] || '.png';
    
    // Generate different sizes for responsive images
    const sizes = [640, 768, 1024, 1280, 1920];
    return sizes
      .filter(size => !width || size <= width * 2) // Don't generate larger than 2x the display size
      .map(size => `${baseSrc}_${size}w${extension} ${size}w`)
      .join(', ');
  }, [currentSrc, width]);

  return (
    <picture>
      {/* WebP source for modern browsers */}
      {currentSrc.includes('.webp') && (
        <source 
          srcSet={generateSrcSet()} 
          type="image/webp"
          sizes={sizes}
        />
      )}
      
      {/* Fallback image */}
      <img
        src={currentSrc}
        srcSet={generateSrcSet()}
        sizes={sizes}
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
    </picture>
  );
};

export default OptimizedImageV2;
