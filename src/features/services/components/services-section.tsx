import { ServiceCard } from "./service-card";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const services = [
  {
    title: "Badminton Courts",
    description: "High-performance indoor courts featuring professional-grade synthetic and acrylic surfaces.",
    items: ["Synthetic Athletic Surfaces", "Acrylic Flooring", "Standard Markings"],
    image: "/images/serviceimage/badminton.png",
  },
  {
    title: "Tennis Courts",
    description: "ITF-approved tennis court solutions designed for durability, player safety, and professional play.",
    items: ["ITF Certified", "Synthetic Turf", "Hard-Court Systems"],
    image: "/images/serviceimage/tennis.png",
  },
  {
    title: "Basketball Courts",
    description: "Premium indoor and outdoor arenas with professional maple wood and synthetic flooring.",
    items: ["Maple Hardwood", "Indoor Stadiums", "Shock Absorption"],
    image: "/images/serviceimage/basketball.png",
  },
  {
    title: "Athletic Tracks",
    description: "All-weather IAAF-certified running tracks built for speed, safety, and peak performance.",
    items: ["IAAF Certified", "EPDM Surfaces", "Professional Lanes"],
    image: "/images/serviceimage/track.png",
  },
  {
    title: "Swimming Pools",
    description: "State-of-the-art pool construction including advanced filtration systems and olympic tiling.",
    items: ["Olympic Standards", "Filtration Systems", "Waterproofing"],
    image: "/images/serviceimage/pool.png",
  },
  {
    title: "Gym Flooring",
    description: "Heavy-duty rubber and professional flooring designed for impact resistance and longevity.",
    items: ["Premium Rubber", "Impact Resistant", "Weight Areas"],
    image: "/images/serviceimage/gym.png",
  },
];

export function ServicesSection() {
  return (
    <section className="relative bg-[#f0faf5] py-24 sm:py-32 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="max-w-3xl space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-md">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Explore What We Build
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
              World-Class <span className="text-primary tracking-tighter">Sports Facilities</span>
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400">
              From professional arenas to athletic tracks, we deliver premium sports infrastructure that meets international standards.
            </p>
          </div>
          <div className="hidden lg:block">
            <Button size="lg" className="h-16 rounded-full px-10 text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95" asChild>
              <Link href="/products">View All Services</Link>
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 flex justify-center lg:hidden">
          <Button size="lg" className="h-14 w-full rounded-2xl text-base font-bold sm:w-auto" asChild>
            <Link href="/products">
              View All Services <MoveRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
