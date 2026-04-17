"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, ChevronUp, ChevronDown, Images } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface GallerySectionProps {
  images: string[];
}

export function GallerySection({ images }: GallerySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [thumbOffset, setThumbOffset] = useState(0);

  const VISIBLE_THUMBS = 4;

  if (!images || images.length === 0) return null;

  const canScrollUp = thumbOffset > 0;
  const canScrollDown = thumbOffset + VISIBLE_THUMBS < images.length;

  const scrollUp = () => setThumbOffset((p) => Math.max(0, p - 1));
  const scrollDown = () =>
    setThumbOffset((p) => Math.min(images.length - VISIBLE_THUMBS, p + 1));

  const visibleThumbs = images.slice(thumbOffset, thumbOffset + VISIBLE_THUMBS);

  return (
    <>
      <section className="relative bg-zinc-950 py-16 overflow-hidden">
        {/* Subtle green glow in background */}
        <div className="pointer-events-none absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Images className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Visual Showcase</p>
              <h2 className="text-xl font-black tracking-tight text-white">Installation Gallery</h2>
            </div>
            {/* Counter */}
            <div className="ml-auto hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md sm:flex">
              <span className="text-base font-black text-primary tabular-nums">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-sm font-medium text-zinc-400 tabular-nums">{String(images.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Main Gallery Layout */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-5">

            {/* ─── Featured Image (Left) ─── */}
            <div className="relative flex-1 overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl shadow-black/50">
              {/* Aspect ratio container */}
              <div className="relative aspect-[4/3] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[activeIndex]}
                      alt={`Gallery image ${activeIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                      priority
                    />
                    {/* Bottom gradient for badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Green left accent bar */}
                <div className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-primary shadow-[0_0_12px_2px] shadow-primary/60" />

                {/* Zoom / Lightbox button */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-primary hover:scale-110 active:scale-95"
                  aria-label="View fullscreen"
                >
                  <ZoomIn className="h-5 w-5" />
                </button>

                {/* Bottom caption bar */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">
                    Featured Installation
                  </span>
                  {/* Dot indicators */}
                  <div className="flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-400",
                          i === activeIndex
                            ? "w-6 bg-primary shadow-[0_0_8px_1px] shadow-primary/70"
                            : "w-1.5 bg-white/30 hover:bg-white/60"
                        )}
                        aria-label={`View image ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ─── Thumbnail Strip (Right) ─── */}
            <div className="flex flex-row gap-3 lg:w-[160px] lg:flex-col">

              {/* Scroll Up */}
              {images.length > VISIBLE_THUMBS && (
                <button
                  onClick={scrollUp}
                  disabled={!canScrollUp}
                  className="hidden h-8 w-full items-center justify-center rounded-xl bg-white/5 text-zinc-400 transition-all hover:bg-white/10 hover:text-white disabled:opacity-30 lg:flex"
                  aria-label="Scroll up"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>
              )}

              {/* Thumbs — vertical on desktop, horizontal on mobile */}
              <div className="flex flex-row gap-3 overflow-x-auto pb-1 lg:flex-col lg:overflow-x-visible lg:pb-0">
                {(images.length > VISIBLE_THUMBS ? visibleThumbs : images).map((img, i) => {
                  const realIndex = images.length > VISIBLE_THUMBS ? thumbOffset + i : i;
                  const isActive = realIndex === activeIndex;
                  return (
                    <motion.button
                      key={realIndex}
                      onClick={() => setActiveIndex(realIndex)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={cn(
                        "relative shrink-0 overflow-hidden rounded-2xl transition-all duration-300",
                        "h-20 w-28 lg:h-[88px] lg:w-full",
                        isActive
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-zinc-950 shadow-lg shadow-primary/20"
                          : "opacity-60 hover:opacity-90 ring-1 ring-white/10"
                      )}
                      aria-label={`Select image ${realIndex + 1}`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${realIndex + 1}`}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                      {/* Active overlay tint */}
                      {isActive && (
                        <div className="absolute inset-0 bg-primary/10" />
                      )}
                      {/* Active left bar */}
                      {isActive && (
                        <div className="absolute left-0 top-3 h-10 w-[3px] rounded-r-full bg-primary" />
                      )}
                      {/* Index badge */}
                      <div className={cn(
                        "absolute bottom-1.5 right-1.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-md px-1 text-[10px] font-black tabular-nums",
                        isActive ? "bg-primary text-white" : "bg-black/50 text-zinc-300"
                      )}>
                        {String(realIndex + 1).padStart(2, "0")}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Scroll Down */}
              {images.length > VISIBLE_THUMBS && (
                <button
                  onClick={scrollDown}
                  disabled={!canScrollDown}
                  className="hidden h-8 w-full items-center justify-center rounded-xl bg-white/5 text-zinc-400 transition-all hover:bg-white/10 hover:text-white disabled:opacity-30 lg:flex"
                  aria-label="Scroll down"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={`Gallery image ${activeIndex + 1}`}
                width={1400}
                height={900}
                className="h-auto max-h-[85vh] w-auto max-w-[88vw] object-contain"
              />
              {/* Green accent border */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-primary/30" />
            </motion.div>

            {/* Close */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-primary hover:scale-110"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Lightbox Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-5 py-2 text-sm font-bold text-white backdrop-blur-md">
              <span className="text-primary">{activeIndex + 1}</span>
              <span className="mx-1 text-zinc-500">/</span>
              <span className="text-zinc-300">{images.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
