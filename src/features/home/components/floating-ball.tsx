"use client";

import { motion } from "framer-motion";

export function FloatingBall() {
  return (
    <motion.div
      className="absolute z-20 pointer-events-none" // Removed mix-blend-screen
      animate={{
        x: [0, 200, 100, 300, 0],
        y: [0, 150, 300, 100, 0],
        rotate: [0, 180, 360, 540],
      }}
      transition={{
        duration: 40, // Keeps the smooth, professional speed
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        left: "15%",
        top: "15%",
      }}
    >
      {/* Restored the solid bright color and normal opacity so it's clearly visible */}
      <div className="relative h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#ccff00] shadow-[0_0_40px_rgba(204,255,0,0.5)] flex items-center justify-center overflow-hidden">
        {/* Tennis Ball Lines - changed to dark/transparent for better contrast on the bright ball */}
        <div className="absolute inset-0 border-[3px] border-black/10 rounded-full scale-[1.15] translate-x-1/2" />
        <div className="absolute inset-0 border-[3px] border-black/10 rounded-full scale-[1.15] -translate-x-1/2" />
        {/* Inner shadow to give it 3D depth */}
        <div className="w-full h-full bg-gradient-to-tr from-black/20 to-transparent" />
      </div>
      
      {/* Motion Trail Aura */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#ccff00]/40 blur-2xl z-[-1]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}