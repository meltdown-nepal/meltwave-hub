import React, { useState, useRef } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn, Heart } from "lucide-react";
import OptimizedImage from './OptimizedImage';

type Props = {
  src: string;
  title: string;
  icon?: "magnifying-glass" | "heart";
  alt?: string;
};

const ICONS: Record<"magnifying-glass" | "heart", React.ReactNode> = {
  "magnifying-glass": <ZoomIn size={28} className="text-white" />,
  "heart": <Heart size={28} className="text-white" />,
};

export default function EventGalleryImage({
  src,
  title,
  icon = "magnifying-glass",
  alt,
}: Props) {
  const [open, setOpen] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = imgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // range: -10 to +10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setParallax({ x, y });
  };
  const resetParallax = () => setParallax({ x: 0, y: 0 });

  return (
    <>
      <div
        ref={imgRef}
        className="relative group rounded-lg overflow-hidden aspect-video shadow-md cursor-pointer hover-scale transition-transform duration-300"
        onClick={() => setOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetParallax}
        style={{
          transform: `scale(1) perspective(600px) rotateX(${parallax.y / 3}deg) rotateY(${parallax.x / 3}deg)`,
          transition: "transform 0.4s cubic-bezier(0.22,0.61,0.36,1)"
        }}
        tabIndex={0}
        aria-label={`View ${title} in gallery`}
        role="button"
        onKeyDown={e => { if (e.key === 'Enter') setOpen(true); }}
      >
        <OptimizedImage
          src={src}
          alt={alt || title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-10">
          {ICONS[icon]}
          <span className="mt-2 text-lg font-semibold text-white drop-shadow-md text-center">{title}</span>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black p-0 max-w-2xl">
          <OptimizedImage 
            src={src} 
            alt={alt || title} 
            className="w-full h-auto rounded-lg max-h-[80vh] object-contain" 
            width={800}
            height={600}
            priority={true}
            sizes="80vw"
          />
          <div className="absolute bottom-3 left-6 flex items-center gap-3 text-white drop-shadow-md">
            {ICONS[icon]}
            <span className="font-medium text-lg">{title}</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
