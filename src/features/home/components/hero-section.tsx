"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { FloatingBall } from "./floating-ball";

const slides = [
  {
    image: "/images/badminton-hero.png",
    title: "Build World-Class Sports Infrastructure",
    subtitle: "We design and construct premium courts for badminton, tennis, basketball & more.",
    sport: "Badminton",
  },
  {
    image: "/images/basketball-hero.png",
    title: "Professional Arenas, Performance Driven",
    subtitle: "State-of-the-art basketball court construction with premium multi-layered wood flooring.",
    sport: "Basketball",
  },
  {
    image: "/images/third.jpg",
    title: "Dream Courts, Built for Champions",
    subtitle: "Custom-engineered basketball and multi-sport surfaces for professional clubs and institutions.",
    sport: "Basketball",
  },
  {
    image: "/images/four.jpg",
    title: "Engineered for Excellence",
    subtitle: "Delivering top-tier athletic surfaces built for durability, safety, and peak performance.",
    sport: "Multi-Sport",
  },
];

export function HeroSection() {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Slowed down slightly (5s) for a more professional, relaxed feel
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-zinc-950 lg:h-screen">
      <AnimatePresence >
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0.0, 0.2, 1] }} // Smoother fade
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          {/* Professional gradient overlays for guaranteed text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      <FloatingBall />

      {/* Content Container */}
      <div className="container relative z-30 mx-auto flex h-full items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Pill badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Expert Sports Solutions • {slides[current].sport}
              </span>
            </div>

            {/* Headline - reduced size slightly and tightened leading for a cleaner look */}
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
              {slides[current].title.split(" ").map((word, i) => (
                <span key={i} className="inline-block mr-2 sm:mr-3">
                  {word.toLowerCase() === "infrastructure" ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-zinc-300 sm:text-xl font-light">
              {slides[current].subtitle}
            </p>

            {/* Buttons - Sleeker padding and hover effects */}
            {/* <div className="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="h-14 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95" asChild>
                <Link href="/enquiry">
                  Get Started <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40" asChild>
                <Link href="/products">View Services</Link>
              </Button>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Navigation Controls - Centered vertically on the right */}
      <div className="absolute right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col space-y-4 lg:flex">
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 rounded-full border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-primary hover:border-primary hover:scale-110 active:scale-95"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-14 w-14 rounded-full border-white/20 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-primary hover:border-primary hover:scale-110 active:scale-95"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Progress Indicators - Moved higher to clear stats section */}
      <div className="absolute bottom-28 left-1/2 z-40 flex -translate-x-1/2 space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-500 ease-out",
              current === i ? "w-12 bg-primary" : "w-3 bg-white/30 hover:bg-white/60 hover:w-6"
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}