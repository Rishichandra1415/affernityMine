"use client";

import { PageContainer } from "@/shared/components";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
            Privacy <span className="text-[#00b341] italic">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
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
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Introduction</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              At Affinity Sports, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This policy explains how we collect and use your data when you visit our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Information We Collect</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We may collect personal information such as your name, email address, phone number, and company details when you fill out contact forms, request quotes, or sign up for our newsletter.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">How We Use Your Information</h2>
            <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 space-y-2 leading-relaxed">
              <li>To provide and manage our services and your project enquiries.</li>
              <li>To communicate with you regarding updates, quotes, and installation schedules.</li>
              <li>To send newsletters and marketing communications (where you have opted in).</li>
              <li>To improve our website functionality and user experience.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Data Security</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We implement appropriate technical and organizational measures to maintain the security of your personal information and protect it against unauthorized access, use, or disclosure.
            </p>
          </section>

          <section className="space-y-4 text-sm text-zinc-500 italic border-t pt-8">
            <p>Last updated: April 2026</p>
            <p>If you have any questions regarding our privacy policy, please contact us at enquire.affinity@gmail.com</p>
          </section>
        </div>
      </PageContainer>
    </main>
  );
}
