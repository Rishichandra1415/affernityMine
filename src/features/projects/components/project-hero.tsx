"use client";

import { motion } from "framer-motion";

export function ProjectHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-900 pt-32 pb-12 text-center">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay xl:bg-fixed" 
          style={{ backgroundImage: `url('/images/projects/multisport.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-zinc-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
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
            className="mt-6 text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter"
          >
            Nationwide <span className="text-primary italic">Excellence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From professional stadiums to corporate wellness hubs, explore our record of delivering world-class sports infrastructure across India.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
