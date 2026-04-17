"use client";

import { PageContainer } from "@/shared/components";
import { MissionVisionSection } from "@/features/home";
import { motion } from "framer-motion";


export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section for About Page */}
      <section className="relative py-12 bg-zinc-900 overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            About <span className="text-primary italic">Affinity Sports</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            India's most trusted sports infrastructure company, dedicated to crafting 
            world-class arenas that inspire excellence and safety.
          </p>
        </div>
        {/* Background Decorative */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full" />
        </div>
      </section>


      <PageContainer>
        <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              A Legacy of <span className="text-primary italic">Quality</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
              Affinity Sports Infra is a leading Sports Exporter and Manufacturer Company of a wide range of Basketball 
              Poles, Fitness Equipment, Table Tennis Tables, and all types of Goal Posts. Led by well-experienced 
              teammates, we pride ourselves on delivering the best quality products to our esteemed clients across India.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We have constructed a wide and well-functional infrastructural unit that plays an important role 
              in the growth of our company. From the beginning, Affinity Sports has been committed to offering 
              innovative, high-quality products which are the best in the market.
            </p>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group">
             <img 
              src="/images/serviceimage/track.png" 
              alt="Affinity Projects" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

        </div>
      </PageContainer>

      {/* Certifications Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-12 uppercase tracking-[0.2em]">
            Our Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white dark:bg-zinc-800 shadow-lg flex items-center justify-center border-4 border-primary/20 mb-4 p-4 text-center">
                 <span className="text-[10px] font-black leading-tight text-zinc-900 dark:text-white uppercase">ISO 9001:2015</span>
              </div>
              <p className="text-sm font-bold text-zinc-600 dark:text-zinc-400">Quality Management Systems</p>
            </div>
            {/* Add more certifications here if needed */}
          </div>
        </div>
      </section>

      {/* Mission & Vision below the main content */}

      <MissionVisionSection />

      {/* Contact info or stats could go here */}
    </main>
  );
}
