"use client";

import { motion } from "framer-motion";

export function ProjectHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-20 sm:pt-48 sm:pb-32">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity xl:bg-fixed" 
          style={{ backgroundImage: `url('/images/projects/multisport.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/30 blur-[120px] h-[500px] w-[500px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] h-[400px] w-[400px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Portfolio
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Nationwide <br />
            <span className="text-primary italic">Excellence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            From professional stadiums to corporate wellness hubs, explore our record of delivering world-class sports infrastructure across India.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
