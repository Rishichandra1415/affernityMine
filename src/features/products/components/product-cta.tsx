"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function ProductCTA() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-16 sm:py-20">
      {/* Layered green glows for depth */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/7 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-10 sm:p-16 lg:p-20 shadow-2xl shadow-black/50"
        >
          {/* Decorative top-right glow orb */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          {/* Decorative bottom-left glow orb */}
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />

          {/* Green top accent bar */}
          <div className="absolute left-10 top-0 h-[3px] w-24 rounded-b-full bg-primary shadow-[0_0_12px_2px] shadow-primary/60" />

          <div className="relative z-10 flex flex-col items-center text-center">

            {/* Pill badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Ready to Build?
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
            >
              Start Your{" "}
              <span className="text-primary italic">Transformation</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
            >
              Ready to build a world-class sports facility? Get a personalized quote with detailed
              estimations — delivered within 24 hours.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="h-14 rounded-2xl px-10 text-base font-bold shadow-xl shadow-primary/25 transition-all hover:scale-[1.03] hover:shadow-primary/40 active:scale-[0.98]"
                asChild
              >
                <Link href="/get-a-quote">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-2xl border-white/10 bg-white/5 px-10 text-base font-bold text-white backdrop-blur-md transition-all hover:border-primary/30 hover:bg-white/10 active:scale-[0.98]"
                asChild
              >
                <Link href="/contact-us">
                  <Phone className="mr-2 h-4 w-4 text-primary" />
                  Contact Sales
                </Link>
              </Button>
            </motion.div>

            {/* Trust note */}
            <p className="mt-8 text-xs font-medium uppercase tracking-widest text-zinc-600">
              Free consultation • No commitment required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
