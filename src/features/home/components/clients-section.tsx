"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Indian Army", logo: "/images/clients/army.png" },
  { name: "Indian Railways", logo: "/images/clients/railways.png" },
  { name: "Tata Steel", logo: "/images/clients/tata.png" },
  { name: "JSW Group", logo: "/images/clients/jsw.png" },
  { name: "Delhi Public School", logo: "/images/clients/dps.png" },
  { name: "AIIMS", logo: "/images/clients/aiims.png" },
  { name: "Indian Air Force", logo: "/images/clients/airforce.png" },
  { name: "Reserve Bank of India", logo: "/images/clients/rbi.png" },
  { name: "IIT Patna", logo: "/images/clients/iit.png" },
  { name: "NIT Patna", logo: "/images/clients/nit.png" },
  { name: "Kendriya Vidyalaya", logo: "/images/clients/kv.png" },
];


export function ClientsSection() {
  // Semi-duplicate to create infinite effect
  const displayClients = [...clients, ...clients];

  return (
    <section className="py-10 bg-white dark:bg-zinc-950 overflow-hidden border-y border-zinc-100 dark:border-zinc-800">
      <div className="container mx-auto px-4 mb-8 text-center">

        <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex gap-12 items-center whitespace-nowrap px-6 animate-marquee group-hover:[animation-play-state:paused]">
          {displayClients.map((client, index) => (
            <div
              key={index}
              className="flex h-24 w-56 items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 px-10 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 w-full object-contain transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
