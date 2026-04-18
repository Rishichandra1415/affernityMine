"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Patna Office",
    details: ["7TH FLOOR, 704, B-BLOCK", "WHITE HOUSE APPARTEMENT", "PATNA-800001, BIHAR"],
    delay: 0.1
  },
  {
    icon: MapPin,
    title: "Ranchi Office",
    details: ["D/75, ROAD NO-1", "ASHOK NAGAR, RANCHI", "JHARKHAND-834002"],
    delay: 0.2
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 95343 00090", "+91 95400 04206"],
    delay: 0.3
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["enquire.affinity@gmail.com"],
    delay: 0.4
  }
];

export function ContactInfo() {
  return (
    <section className="bg-white py-12 sm:py-16 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-100 bg-zinc-50 p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 dark:border-white/5 dark:bg-white/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <item.icon className="h-6 w-6" />
              </div>
              
              <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">
                {item.title}
              </h3>
              
              <div className="mt-4 space-y-1">
                {item.details.map((line, i) => (
                  <p key={i} className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {line}
                  </p>
                ))}
              </div>

              {/* Decorative background element */}
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
            </motion.div>
          ))}
        </div>

        {/* Operating Hours */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col items-center justify-center space-y-4 rounded-[2rem] bg-zinc-900 p-8 text-center text-white sm:flex-row sm:space-y-0 sm:space-x-8 sm:p-12"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
            <Clock className="h-6 w-6" />
          </div>
          <div className="text-left">
            <h4 className="text-lg font-bold">Operating Hours</h4>
            <p className="text-zinc-400">Monday - Saturday: 09:00 AM - 07:00 PM</p>
          </div>
          <div className="hidden h-12 w-px bg-zinc-800 sm:block" />
          <div className="text-left">
            <h4 className="text-lg font-bold">Site Visits</h4>
            <p className="text-zinc-400">Available across India on request</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
