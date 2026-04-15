"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const projects = [
  {
    title: "Jogging Track",
    location: "Heritage, Rampurhat",
    category: "Running Track",
    type: "Outdoor",
    image: "/images/projects/track.png",
  },
  {
    title: "Siddha Pine",
    location: "Rajarhat, Kolkata",
    category: "Badminton Court",
    type: "Indoor",
    image: "/images/projects/badminton.png",
  },
  {
    title: "Dimapur Army Camp",
    location: "Dimapur, Nagaland",
    category: "Tennis Court",
    type: "Outdoor",
    image: "/images/projects/tennis.png",
  },
  {
    title: "Port Blair Stadium",
    location: "Andaman, Brichgunj",
    category: "Basketball Court",
    type: "Outdoor",
    image: "/images/projects/basketball.png",
  },
  {
    title: "Multi-Sport Arena",
    location: "Siliguri, WB",
    category: "Composite Surface",
    type: "Indoor",
    image: "/images/projects/multisport.png",
  },
  {
    title: "School Sports Arena",
    location: "Guwahati, Assam",
    category: "Play Facility",
    type: "Outdoor",
    image: "/images/projects/school.png",
  },
  {
    title: "Private Club",
    location: "New Delhi",
    category: "Artificial Turf",
    type: "Outdoor",
    image: "/images/projects/club.png",
  },
  {
    title: "Corporate Gym",
    location: "Mumbai, MH",
    category: "Rubber Flooring",
    type: "Indoor",
    image: "/images/projects/gym.png",
  },
];

export function ProjectsSection() {
  return (
    <section className="relative bg-[#f0faf5] pt-24 pb-16 sm:pt-32 sm:pb-20 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row mb-20 lg:mb-28">
          <div className="max-w-3xl space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Our Portfolio
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
              Completed <span className="text-primary italic">Masterpieces</span>
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400">
              Explore our diverse range of nationwide sports infrastructure projects delivered with uncompromising quality.
            </p>
          </div>
          <div className="hidden lg:block">
            <Button size="lg" variant="outline" className="h-16 rounded-full px-10 text-lg font-bold border-zinc-200 hover:bg-zinc-50 transition-all hover:scale-105" asChild>
              <Link href="/projects">
                View All Projects <MoveRight className="ml-2 h-5 w-5 text-primary" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-16 flex justify-center lg:hidden">
          <Button size="lg" variant="outline" className="h-14 w-full rounded-2xl text-base font-bold sm:w-auto" asChild>
            <Link href="/projects">
              View All Projects <MoveRight className="ml-2 h-5 w-5 text-primary" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
