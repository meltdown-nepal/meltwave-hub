
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

  // Generate optimized image sources
  const generateSources = useCallback(() => {
    const isLocalAsset = src.startsWith('/') && !src.startsWith('//');
    
    if (!isLocalAsset) {
      return { webp: src, avif: src, fallback: src };
    }

    // For local assets, generate multiple formats and sizes
    const baseUrl = src.replace(/\.(jpe?g|png|webp)$/i, '');
    const extension = src.match(/\.(jpe?g|png|webp)$/i)?.[1] || 'jpg';
    
    return {
      avif: `${baseUrl}.avif`,
      webp: `${baseUrl}.webp`, 
      fallback: src
    };
  }, [src]);

  // Generate responsive srcSet
  const generateSrcSet = useCallback((imageSrc: string) => {
    if (!responsive || !src.startsWith('/')) return undefined;
    
    const widths = [640, 768, 1024, 1280, 1920];
    return widths
      .filter(w => !width || w <= width * 2) // Don't generate larger than 2x the display size
      .map(w => `${imageSrc}?w=${w}&q=${quality === 'high' ? 90 : quality === 'medium' ? 75 : 60} ${w}w`)
      .join(', ');
  }, [responsive, src, width, quality]);

  const sources = generateSources();

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    if (onLoad) onLoad();
    console.log(`✅ Image loaded: ${src}`);
  }, [onLoad, src]);

  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    
    // Try fallback sources in order: AVIF -> WebP -> Original
    if (img.src.includes('.avif') && sources.webp !== sources.avif) {
      img.src = sources.webp;
      return;
    }
    
    if ((img.src.includes('.webp') || img.src.includes('.avif')) && sources.fallback !== img.src) {
      img.src = sources.fallback;
      return;
    }
    
    // All sources failed
    setHasError(true);
    if (onError) onError();
    console.warn(`❌ Failed to load image: ${src}`);
  }, [onError, src, sources]);

  // Intersection Observer for lazy loading
  React.useEffect(() => {
    if (!lazy || priority) {
      setCurrentSrc(sources.avif || sources.webp || sources.fallback);
      return;
    }

    const img = new Image();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentSrc(sources.avif || sources.webp || sources.fallback);
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
  }, [lazy, priority, sources, src]);

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
    <picture>
      {/* AVIF for modern browsers - smallest file size */}
      {sources.avif !== sources.fallback && (
        <source 
          srcSet={generateSrcSet(sources.avif)}
          type="image/avif"
          sizes={sizes || (responsive ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw' : undefined)}
        />
      )}
      
      {/* WebP for most browsers - good compression */}
      {sources.webp !== sources.fallback && (
        <source 
          srcSet={generateSrcSet(sources.webp)}
          type="image/webp"
          sizes={sizes || (responsive ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw' : undefined)}
        />
      )}
      
      {/* Fallback for older browsers */}
      <img
        src={currentSrc}
        srcSet={generateSrcSet(currentSrc)}
        sizes={sizes || (responsive ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw' : undefined)}
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
    </picture>
  );
};

export default OptimizedImage;
