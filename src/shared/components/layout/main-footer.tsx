"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { cn } from "@/shared/lib/utils";

const footerData = {
  about: {
    title: "Affinity Sports",
    description: "India's Most Trusted Sports Infrastructure Company. AN ISO 9001:2015 CERTIFIED COMPANY specializing in high-quality sports flooring and premium equipment solutions.",
  },
  contact: {
    title: "Get In Touch",
    items: [
      {
        icon: MapPin,
        text: "7TH FLOOR, 704, B-BLOCK, WHITE HOUSE APPARTEMENT, PATNA-1",
      },
      {
        icon: MapPin,
        text: "D/75, ROAD NO-1, ASHOK NAGAR, RANCHI, JHARKHAND-834002",
      },
      {
        icon: Phone,
        text: "+91 95343 00090 / +91 95400 04206",
        href: "tel:+919534300090",
      },
    
      {
        icon: Mail,
        text: "enquire.affinity@gmail.com",
        href: "mailto:enquire.affinity@gmail.com",
      },
    ],
  },
  products: {
    title: "Our Products",
    items: [
      { name: "Badminton Court", href: "/infrastructure/badminton-court" },
      { name: "Tennis Court", href: "/infrastructure/lawn-tennis-court" },
      { name: "Basketball Court", href: "/infrastructure/basketball-court" },
      { name: "Wooden Flooring", href: "/products/wooden-flooring" },
      { name: "Squash Court", href: "/infrastructure/squash-padel-courts" },
      { name: "Children Play Area", href: "/infrastructure/children-park" },
      { name: "Outdoor Gym", href: "/infrastructure/outdoor-gym" },
      { name: "Cricket Pitch", href: "/infrastructure/cricket-pitch" },
    ],
  },
  socials: [
    {
      label: "Twitter",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      label: "Facebook",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      label: "Instagram",
      href: "#",
      icon: (props: any) => (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.433z" />
        </svg>
      )
    },
  ],
};

export function MainFooter() {
  return (
    <footer className="relative bg-zinc-50 pt-16 pb-6 text-zinc-600 border-t border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-400 overflow-hidden">
      {/* Background Decorative Glow (Subtle & Premium) */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tighter gap-8 instead of gap-12 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-black tracking-tight text-zinc-900 uppercase dark:text-white">
                Affinity <span className="text-primary">Sports</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-sm text-zinc-500 dark:text-zinc-400">
                {footerData.about.description}
              </p>
            </div>
            <div className="flex space-x-3">
              {footerData.socials.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-400 transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-105 shadow-sm dark:border-white/10 dark:bg-white/5 dark:hover:bg-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest dark:text-white">
              {footerData.contact.title}
            </h3>
            <ul className="space-y-4">
              {footerData.contact.items.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <item.icon className="h-4 w-4" />
                  </div>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm leading-tight transition-colors hover:text-primary mt-1.5"
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <span className="text-sm leading-tight mt-1.5">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest dark:text-white">
              {footerData.products.title}
            </h3>
            <ul className="space-y-3">
              {footerData.products.items.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="group flex items-center space-x-2 text-sm transition-all hover:text-primary"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-primary/70 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest dark:text-white">
              Popular Links
            </h3>
            {/* Glassmorphism premium card */}
            <div className="rounded-2xl border border-zinc-200/60 bg-white/60 p-5 shadow-sm backdrop-blur-md space-y-4 dark:bg-white/5 dark:border-white/10">
              <p className="text-xs font-medium text-zinc-900 dark:text-zinc-300">Join our newsletter for latest updates.</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl bg-white border border-zinc-200 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:bg-zinc-900/50 dark:border-white/10 dark:text-white"
                />
                <button className="absolute right-1.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary/90 transition-all shadow-sm">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="pt-2 flex flex-wrap gap-2">
              {['About Us', 'Projects', 'Process', 'Contact'].map((link) => (
                <Link key={link} href="#" className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md bg-white border border-zinc-200 text-zinc-500 hover:border-primary hover:text-primary transition-all shadow-sm dark:bg-white/5 dark:border-white/10 dark:hover:border-primary dark:text-zinc-400">
                  {link}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar - Optimized Spacing */}
        <div className="mt-12 border-t border-zinc-200 pt-6 text-center dark:border-white/10">
          <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">

            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} <span className="text-zinc-900 dark:text-white font-semibold">Affinity Sports</span>. All Rights Reserved.
            </p>

            <div className="flex space-x-6 text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            </div>

            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Developed by <span className="text-primary font-bold">Nighwan Technology</span>
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}