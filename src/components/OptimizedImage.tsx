
import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  quality?: number;
  lazy?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  width,
  height,
  sizes,
  quality = 85,
  lazy = true
}) => {
  const [imgSrc, setImgSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority || !lazy);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (priority || !lazy) {
      setIsInView(true);
      return;
    }

    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority, lazy]);

  // Set image source when in view - use original src directly
  useEffect(() => {
    if (isInView && !imgSrc) {
      setImgSrc(src);
    }
  }, [isInView, src, imgSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    console.log(`Image loaded successfully: ${imgSrc}`);
  };

  const handleError = () => {
    console.error(`Failed to load image: ${imgSrc}`);
    setHasError(true);
    // Don't try to fallback since we're already using the original src
  };

  // Default sizes if not provided
  const defaultSizes = sizes || (width ? `(max-width: 768px) 100vw, ${width}px` : '100vw');

  return (
    <img
      ref={imgRef}
      src={isInView ? imgSrc : undefined}
      alt={alt}
      className={`${className} ${!isLoaded && isInView ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      onLoad={handleLoad}
      onError={handleError}
      sizes={isInView ? defaultSizes : undefined}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined,
      }}
    />
  );
};

export default OptimizedImage;
