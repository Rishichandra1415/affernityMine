"use client";

import { PageContainer } from "@/shared/components";
import { motion } from "framer-motion";

export default function CookiesPage() {
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
            Cookie <span className="text-[#00b341] italic">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-zinc-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            This page explains how we use cookies and similar technologies to improve your experience on our website.
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
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">What Are Cookies?</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">How We Use Cookies</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Affinity Sports uses cookies to:
            </p>
            <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400 space-y-2 leading-relaxed">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly and cannot be switched off.</li>
              <li><strong>Performance Cookies:</strong> These allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
              <li><strong>Functional Cookies:</strong> These enable the website to provide enhanced functionality and personalization.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Managing Cookies</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Most web browsers allow some control of most cookies through the browser settings. You can choose to block or delete cookies, but please note that some features of our website may not function correctly if you disable cookies.
            </p>
          </section>

          <section className="space-y-4 text-sm text-zinc-500 italic border-t pt-8">
            <p>Last updated: April 2026</p>
            <p>For more information on how we process your personal data, please see our Privacy Policy.</p>
          </section>
        </div>
      </PageContainer>
    </main>
  );
}
