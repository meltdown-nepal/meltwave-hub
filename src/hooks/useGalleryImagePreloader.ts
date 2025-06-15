
import { useEffect } from "react";

type GalleryImage = {
  src: string;
  as?: string;
  priority?: boolean;
};

/**
 * Preloads a list of gallery images using browser preload link hints for faster visual load.
 * Usage: pass an array of image srcs right before the section becomes visible.
 */
export function useGalleryImagePreloader(
  images: GalleryImage[] = [],
  enabled: boolean = true
) {
  useEffect(() => {
    if (!enabled || images.length === 0 || typeof window === "undefined") return;
    // Only preload unique images (avoid duplicate links)
    const links: HTMLLinkElement[] = [];
    images.forEach(({ src }) => {
      if (document.head.querySelector(`link[href="${src}"]`)) return;
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      link.crossOrigin = "anonymous";
      link.setAttribute("data-temporary-preload", "true");
      document.head.appendChild(link);
      links.push(link);
    });
    // Clean up on unmount
    return () => {
      links.forEach((link) => {
        if (link.parentNode) link.parentNode.removeChild(link);
      });
    };
  }, [enabled, images]);
}
