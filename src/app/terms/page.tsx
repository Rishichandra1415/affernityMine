"use client";

import { PageContainer } from "@/shared/components";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-900 pt-32 pb-12 text-center">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter"
          >
            Terms of <span className="text-[#00b341] italic">Service</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            Please read these terms and conditions carefully before using our services or website.
          </motion.p>
        </div>
        {/* Decorative Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00b341]/10 blur-[120px] rounded-full pointer-events-none" />
        </div>
      </section>

      <PageContainer>
        <div className="py-16 max-w-4xl mx-auto space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">1. Acceptance of Terms</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              By accessing and using the Affinity Sports website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">2. Use of Website</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              The content of the pages of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">3. Intellectual Property</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website. This website contains material which is owned by or licensed to us, including but not limited to the design, layout, look, appearance, and graphics.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">4. Limitations of Liability</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Affinity Sports shall not be liable for any consequential, incidental, indirect, or special damages of any kind, or any damages whatsoever, including, without limitation, those resulting from loss of profit, loss of contracts, goodwill, data, information, income, anticipated savings or business relationships.
            </p>
          </section>

          <section className="space-y-4 text-sm text-zinc-500 italic border-t pt-8">
            <p>Last updated: April 2026</p>
            <p>Governing Law: These terms and conditions are governed by and construed in accordance with the laws of India.</p>
          </section>
        </div>
      </PageContainer>
    </main>
  );
}
