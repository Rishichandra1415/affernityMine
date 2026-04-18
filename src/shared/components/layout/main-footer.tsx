"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

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
      { name: "Badminton Court" },
      { name: "Tennis Court" },
      { name: "Basketball Court" },
      { name: "Wooden Flooring" },
      { name: "Squash Court" },
      { name: "Children Play Area" },
      { name: "Outdoor Gym" },
      { name: "Cricket Pitch" },
    ],
  },
  socials: [
    {
      label: "Twitter",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      label: "Facebook",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      label: "Instagram",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      )
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.433z" />
        </svg>
      )
    },
  ],
};

export function MainFooter() {
  return (
    <footer className="relative bg-zinc-50 pt-12 pb-6 text-zinc-600 border-t border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800 dark:text-zinc-400 overflow-hidden">
      {/* Background Decorative Glow (Green Brand Accent) */}
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#00b341]/5 blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-[#00b341]/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-8">

          {/* Column 1: Brand Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black tracking-tight uppercase">
                <span className="text-zinc-900 dark:text-white">Affinity</span> <span className="text-[#00b341]">Sports</span>
              </h2>
              <p className="text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                {footerData.about.description}
              </p>
            </div>

            {/* Trust Badge */}
            <div className="flex flex-col space-y-4 pt-2">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00b341]/10 text-[#00b341]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Certified Company</p>
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">ISO 9001:2015</p>
                </div>
              </div>
            </div>

            {/* Socials Only (Button Moved) */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex space-x-3">
                {footerData.socials.map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-400 transition-all hover:bg-[#00b341] hover:text-white hover:border-[#00b341] hover:shadow-md hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Contact Column + Company Profile Button */}
          <div className="space-y-5 lg:pl-4">
            <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest dark:text-white">
              {footerData.contact.title}
            </h3>
            <ul className="space-y-4">
              {footerData.contact.items.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#00b341]/10 text-[#00b341] transition-colors group-hover:bg-[#00b341] group-hover:text-white">
                    <item.icon className="h-4 w-4" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm leading-tight transition-colors hover:text-[#00b341] mt-1.5"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm leading-tight mt-1.5">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Moved Company Profile Button */}
            {/* <div className="pt-3">
              <a href="#" className="inline-flex items-center space-x-2 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-600 transition-all hover:border-[#00b341] hover:text-[#00b341] hover:bg-white shadow-sm dark:border-white/10 dark:text-zinc-400 dark:hover:text-[#00b341] dark:hover:bg-zinc-900 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-y-0.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                <span>Company Profile</span>
              </a>
            </div> */}
          </div>

          {/* Column 3: Products + Stay Connected */}
          <div className="space-y-8 lg:pl-2">
            {/* Products Section */}
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest dark:text-white">
                {footerData.products.title}
              </h3>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-3">
                {footerData.products.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-1.5 group">
                    <ChevronRight className="h-3.5 w-3.5 text-[#00b341]/70 shrink-0 transition-transform group-hover:translate-x-1" />
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-tight transition-colors group-hover:text-[#00b341]">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest dark:text-white">
                Stay Connected
              </h3>
              <div className="rounded-2xl border border-zinc-200/60 bg-white/60 p-5 shadow-sm backdrop-blur-md dark:bg-white/5 dark:border-white/10">
                <p className="text-xs font-medium text-zinc-900 dark:text-zinc-300 mb-4">
                  Join our newsletter for latest updates.
                </p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl bg-white border border-zinc-200 px-4 py-2.5 text-sm focus:border-[#00b341] focus:ring-1 focus:ring-[#00b341] outline-none transition-all dark:bg-zinc-900/50 dark:border-white/10 dark:text-white"
                  />
                  <button className="absolute right-1.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#00b341] text-white hover:bg-[#009436] transition-all shadow-sm">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Map */}
          <div className="h-full min-h-[250px] overflow-hidden rounded-xl border border-zinc-200 shadow-sm dark:border-white/10 lg:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107255152!2d85.05600619927702!3d25.60802076442654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3ecd32a40535!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1713437148508!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "250px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
          </div>

        </div>

        {/* Bottom Bar (Spacing adjusted to remove blank gap) */}
        <div className="mt-8 border-t border-zinc-200 pt-6 text-center dark:border-white/10">
          <div className="flex flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0">

            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} <span className="text-zinc-900 dark:text-white font-semibold">Affinity Sports</span>. All Rights Reserved.
            </p>

            <div className="flex space-x-6 text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              <Link href="#" className="hover:text-[#00b341] transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-[#00b341] transition-colors">Cookies</Link>
              <Link href="#" className="hover:text-[#00b341] transition-colors">Terms</Link>
            </div>

            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Designed and developed by <a href="https://nighwantech.com/" target="_blank" rel="noopener noreferrer" className="text-[#00b341] font-bold hover:underline">Nighwan Technology</a>
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}