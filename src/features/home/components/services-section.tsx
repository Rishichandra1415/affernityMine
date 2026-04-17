"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { MoveRight, ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const services = [
  {
    title: "Badminton Courts",
    description: "High-performance indoor courts featuring professional-grade synthetic and acrylic surfaces.",
    items: ["Synthetic Athletic Surfaces", "Acrylic Flooring", "Standard Markings"],
    image: "/images/serviceimage/badminton.png",
    href: "/infrastructure/badminton-court",
  },
  {
    title: "Tennis Courts",
    description: "ITF-approved tennis court solutions designed for durability, player safety, and professional play.",
    items: ["ITF Certified", "Synthetic Turf", "Hard-Court Systems"],
    image: "/images/serviceimage/tennis.png",
    href: "/infrastructure/lawn-tennis-court",
  },
  {
    title: "Basketball Courts",
    description: "Premium indoor and outdoor arenas with professional maple wood and synthetic flooring.",
    items: ["Maple Hardwood", "Indoor Stadiums", "Shock Absorption"],
    image: "/images/serviceimage/basketball.png",
    href: "/infrastructure/basketball-court",
  },
  {
    title: "Athletic Tracks",
    description: "All-weather IAAF-certified running tracks built for speed, safety, and peak performance.",
    items: ["IAAF Certified", "EPDM Surfaces", "Professional Lanes"],
    image: "/images/serviceimage/track.png",
    href: "/infrastructure/running-track",
  },
  {
    title: "Swimming Pools",
    description: "State-of-the-art pool construction including advanced filtration systems and olympic tiling.",
    items: ["Olympic Standards", "Filtration Systems", "Waterproofing"],
    image: "/images/serviceimage/pool.png",
    href: "/infrastructure/swimming-pool",
  },
  {
    title: "Gym Flooring",
    description: "Heavy-duty rubber and professional flooring designed for impact resistance and longevity.",
    items: ["Premium Rubber", "Impact Resistant", "Weight Areas"],
    image: "/images/serviceimage/gym.png",
    href: "/infrastructure/gym-flooring",
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#f0faf5] py-10 sm:py-14 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="max-w-3xl space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-md">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Explore Our Services
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              World-Class <span className="text-primary tracking-tighter">Sports Facilities</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
              From professional arenas to athletic tracks, we deliver premium sports infrastructure that meets international standards.
            </p>
          </div>
        </div>

        {/* Stack View UI - Compact Height (450px mobile, 500px desktop) */}
        <div className="mt-12 flex h-[450px] w-full flex-col gap-3 lg:h-[500px] lg:flex-row lg:gap-3">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                layout
                onHoverStart={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-[2rem] transition-all duration-500 ease-in-out bg-zinc-900",
                  isActive
                    ? "flex-[5] lg:flex-[6] shadow-2xl"
                    : "flex-[1] shadow-md"
                )}
              >
                {/* Background Image - Ab ye hamesha dikhegi, blackout hata diya gaya hai */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Overlays - Inactive me sirf halka transparent black taaki text padh saken, Active me niche dark gradient */}
                <div
                  className={cn(
                    "absolute inset-0 transition-all duration-500",
                    isActive
                      ? "bg-gradient-to-t from-black/95 via-black/50 to-transparent"
                      : "bg-black/30 group-hover:bg-black/20"
                  )}
                />

                {/* Active/Expanded State Content */}
                <div
                  className={cn(
                    "absolute bottom-0 left-0 flex h-full w-full flex-col justify-end p-6 lg:p-8 transition-all duration-500",
                    isActive ? "translate-y-0 opacity-100 delay-100" : "translate-y-10 opacity-0 pointer-events-none"
                  )}
                >
                  <Link href={service.href} className="block max-w-2xl group/link">
                    <h3 className="mb-2 text-2xl font-bold text-white lg:text-3xl group-hover/link:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-zinc-200 lg:text-base line-clamp-2">
                      {service.description}
                    </p>

                    {/* Items Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.items.map((item, i) => (
                        <span key={i} className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm border border-white/20">
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Explore CTA */}
                    <div className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-all group-hover/link:gap-3">
                      Explore <MoveRight className="h-4 w-4" />
                    </div>
                  </Link>
                </div>

                {/* Collapsed State Content (Vertical Text) */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-500 lg:flex-col lg:items-center lg:justify-end lg:py-8",
                    isActive ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
                  )}
                >
                  <div className="flex items-center gap-3 lg:flex-col lg:gap-4">
                    {/* Icon - Size slightly reduced for compactness */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20">
                      <ChevronRight className={cn("h-4 w-4", "lg:rotate-90")} />
                    </div>
                    {/* Vertical text for desktop, horizontal for mobile */}
                    <span className="text-base font-bold tracking-widest text-white drop-shadow-md lg:-rotate-180 lg:[writing-mode:vertical-rl]">
                      {service.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View All Button */}
    
      </div>
    </section>
  );
}