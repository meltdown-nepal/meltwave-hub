
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, Images } from "lucide-react";
import OptimizedImage from "@/components/OptimizedImage";

type GalleryImage = {
  src: string;
  title: string;
  alt: string;
};

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  images: GalleryImage[];
  initialIndex?: number;
};

export default function EventGalleryModal({
  open,
  onOpenChange,
  images,
  initialIndex = 0
}: Props) {
  const [currentIdx, setCurrentIdx] = useState(initialIndex);

  useEffect(() => {
    if (open) setCurrentIdx(initialIndex);
  }, [open, initialIndex]);

  if (images.length === 0) return null;

  const prev = () =>
    setCurrentIdx((idx) => (idx === 0 ? images.length - 1 : idx - 1));
  const next = () =>
    setCurrentIdx((idx) => (idx === images.length - 1 ? 0 : idx + 1));

  const current = images[currentIdx];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black max-w-3xl relative p-0">
        <button
          className="absolute top-3 right-3 z-20 rounded-full bg-gray-800/80 hover:bg-gray-700 p-2 transition"
          aria-label="Close"
          onClick={() => onOpenChange(false)}
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <div className="flex items-center justify-center min-h-[60vh] relative">
          <button
            aria-label="Prev"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full"
            onClick={prev}
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </button>
          <OptimizedImage
            src={current.src}
            alt={current.alt || current.title}
            className="w-full max-h-[70vh] object-contain rounded-lg"
            width={900}
            height={600}
            sizes="80vw"
            priority
          />
          <button
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full"
            onClick={next}
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </button>
        </div>
        <div className="mt-0 py-4 px-4 text-center">
          <span className="text-lg font-bold text-white drop-shadow">{current.title}</span>
          <div className="text-xs text-gray-200 mt-2">{current.alt}</div>
        </div>
        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex overflow-x-auto gap-2 px-3 pb-3 pt-2">
            {images.map((img, idx) => (
              <button
                key={img.src}
                className={`transition border-2 rounded-md ${idx === currentIdx ? "border-yellow-400" : "border-transparent"}`}
                tabIndex={0}
                aria-label={`Go to image ${idx + 1}`}
                onClick={() => setCurrentIdx(idx)}
              >
                <OptimizedImage
                  src={img.src}
                  alt={img.alt}
                  className={`object-cover w-20 h-14 rounded-md ${idx === currentIdx ? "ring ring-yellow-400" : ""}`}
                  width={80}
                  height={56}
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

