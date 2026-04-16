"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InfrastructureData } from "../types";

interface InfraHeroProps {
  infra: InfrastructureData;
}

export function InfraHero({ infra }: InfraHeroProps) {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-zinc-950">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={infra.mainImage}
          alt={infra.title}
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 to-transparent" />
      </motion.div>

      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {infra.category}
            </span>
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl"
            >
              {infra.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold italic text-primary sm:text-3xl"
            >
              {infra.tagline}
            </motion.p>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl"
          >
            {infra.description}
          </motion.p>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
    </section>
  );
}
