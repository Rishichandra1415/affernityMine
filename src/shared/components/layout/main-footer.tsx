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
    description: "We specialize in high-quality sports flooring and infrastructure solutions for indoor and outdoor sports facilities. Delivering uncompromising quality across India.",
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
        text: "+91 95343 00090",
        href: "tel:+919534300090",
      },
      {
        icon: Phone,
        text: "+91 95400 04206",
        href: "tel:+919540004206",
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
      { name: "Badminton Court", href: "/services/badminton" },
      { name: "Tennis Court", href: "/services/tennis" },
      { name: "Basketball Court", href: "/services/basketball" },
      { name: "Volleyball Court", href: "/services/volleyball" },
      { name: "Squash Court", href: "/services/squash" },
      { name: "Children Play Area", href: "/services/play-area" },
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
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
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
    <footer className="relative bg-white pt-24 pb-12 text-zinc-600 overflow-hidden border-t border-zinc-100 dark:bg-zinc-950 dark:border-zinc-800">
      {/* Background Decorative Glow */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight text-zinc-900 uppercase dark:text-white">
                Affinity <span className="text-primary italic">Sports</span>
              </h2>
              <p className="text-base leading-relaxed max-w-sm">
                {footerData.about.description}
              </p>
            </div>
            <div className="flex space-x-4">
              {footerData.socials.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-400 transition-all hover:bg-primary hover:text-white hover:border-primary hover:scale-110 dark:border-white/10 dark:bg-white/5"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-widest dark:text-white">
              {footerData.contact.title}
            </h3>
            <ul className="space-y-6">
              {footerData.contact.items.map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  {item.href ? (
                    <Link 
                      href={item.href}
                      className="text-sm leading-6 transition-colors hover:text-primary pt-2"
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <span className="text-sm leading-6 pt-2">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-widest dark:text-white">
              {footerData.products.title}
            </h3>
            <ul className="space-y-4">
              {footerData.products.items.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="group flex items-center space-x-2 text-sm transition-all hover:text-primary"
                  >
                    <ChevronRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unique Column: Newsletter or Popular Link Wrapper */}
          <div className="space-y-8">
             <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-widest dark:text-white">
              Popular Links
            </h3>
            <div className="rounded-3xl border border-zinc-100 bg-zinc-50 p-8 space-y-4 dark:bg-white/5 dark:border-white/5">
               <p className="text-sm font-medium text-zinc-900 dark:text-white">Join our newsletter for latest project updates.</p>
               <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email address"
                    className="w-full rounded-2xl bg-white border border-zinc-200 px-5 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none dark:bg-zinc-900 dark:border-white/10"
                  />
                  <button className="absolute right-2 top-1.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white hover:bg-primary/90 transition-all">
                    <ArrowRight className="h-5 w-5" />
                  </button>
               </div>
            </div>
            <div className="pt-4 flex flex-wrap gap-2">
                {['About Us', 'Projects', 'Process', 'Contact'].map((link) => (
                  <Link key={link} href="#" className="px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full bg-zinc-100 border border-zinc-100 text-zinc-600 hover:border-primary hover:bg-white hover:text-primary transition-all dark:bg-white/5 dark:border-white/5 dark:hover:text-white">
                    {link}
                  </Link>
                ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-zinc-100 pt-10 text-center dark:border-white/10">
          <div className="flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0">
            <p className="text-xs font-medium uppercase tracking-widest">
              © {new Date().getFullYear()} <span className="text-zinc-900 dark:text-white">Affinity Sports</span>. All Rights Reserved.
            </p>
            <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
