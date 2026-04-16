"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function InfraCTA() {
  return (
    <section className="bg-zinc-50 py-24 sm:py-32 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-zinc-900 sm:text-6xl dark:text-white"
          >
            Build Your <span className="text-primary italic">Legacy</span>
          </motion.h2>
          <p className="mt-8 text-xl text-zinc-600 dark:text-zinc-400">
            From professional stadiums to community courts, we handle everything from site grading to final markings.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
          >
            <Button size="lg" className="h-16 rounded-2xl px-12 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all" asChild>
              <Link href="/get-a-quote">
                Request Facility Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 rounded-2xl px-12 text-lg font-bold border-zinc-200 transition-all hover:bg-zinc-50 dark:border-white/10 dark:hover:bg-white/5" asChild>
              <Link href="/contact-us">
                Speak to a Specialist
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
