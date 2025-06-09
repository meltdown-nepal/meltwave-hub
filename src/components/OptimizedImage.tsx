
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

  // Generate optimized image sources
  const generateOptimizedSrc = (originalSrc: string, targetWidth?: number) => {
    const isLocalAsset = originalSrc.startsWith('/') && !originalSrc.startsWith('//');
    
    if (!isLocalAsset) {
      return originalSrc;
    }

    // Try WebP first for local images
    const extension = originalSrc.match(/\.(jpe?g|png|webp)$/i)?.[1];
    if (extension && extension.toLowerCase() !== 'webp') {
      const webpSrc = originalSrc.replace(/\.(jpe?g|png)$/i, '.webp');
      return webpSrc;
    }
    
    return originalSrc;
  };

  // Generate srcSet for responsive images
  const generateSrcSet = (originalSrc: string) => {
    if (!width || !originalSrc.startsWith('/')) {
      return undefined;
    }

    const breakpoints = [320, 640, 768, 1024, 1280, 1920];
    const srcSet = breakpoints
      .filter(bp => bp <= (width || 1920))
      .map(bp => `${generateOptimizedSrc(originalSrc, bp)} ${bp}w`)
      .join(', ');
    
    return srcSet || undefined;
  };

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

  // Set image source when in view
  useEffect(() => {
    if (isInView && !imgSrc) {
      setImgSrc(generateOptimizedSrc(src, width));
    }
  }, [isInView, src, width, imgSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    console.log(`Image loaded successfully: ${imgSrc}`);
  };

  const handleError = () => {
    if (!hasError && src !== imgSrc) {
      setHasError(true);
      setImgSrc(src); // Fallback to original
    }
  };

  // Default sizes if not provided
  const defaultSizes = sizes || (width ? `(max-width: 768px) 100vw, ${width}px` : '100vw');

  return (
    <img
      ref={imgRef}
      src={isInView ? imgSrc : undefined}
      srcSet={isInView ? generateSrcSet(src) : undefined}
      sizes={isInView ? defaultSizes : undefined}
      alt={alt}
      className={`${className} ${!isLoaded && isInView ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
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

export default OptimizedImage;
