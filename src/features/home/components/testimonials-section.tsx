"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    name: "Dr. Rajesh Gupta",
    role: "Principal, Heritage International School",
    content: "AffernitySport transformed our campus with their IAAF-standard athletic track. Their team was professional, and the finish is absolutely world-class.",
    rating: 5,
  },
  {
    name: "Cpt. Amit Verma",
    role: "Sports Officer, Army Training Command",
    content: "The synthetic tennis courts installed at our Dimapur camp are exceptional. The durability and bounce consistency meet high military standards.",
    rating: 5,
  },
  {
    name: "Mrs. Sneha Chatterjee",
    role: "Secretary, Royal Golf & Sports Club",
    content: "Installing professional badminton courts was a breeze with them. Their after-sales support and maintenance guidance have been invaluable to our club.",
    rating: 5,
  },
  {
    name: "Vikram Malhotra",
    role: "CEO, Pulse Fitness & Corporate Wellness",
    content: "We chose their gym flooring for our Mumbai headquarters. It's safe, shock-absorbent, and looks incredibly premium. Highly recommended for corporate setups.",
    rating: 5,
  },
  {
    name: "Anita Deshmukh",
    role: "President, Global Sports Academy",
    content: "The multi-sport arena they built for us has doubled our student participation. The quality of materials and precise markings are outstanding.",
    rating: 5,
  },
  {
    name: "Sandeep Bansal",
    role: "Director, Green Meadows Residential Complex",
    content: "Our residents are thrilled with the new basketball court. It has become the heart of our community. Excellent work by the Affernity team.",
    rating: 4,
  },
];

export function TestimonialsSection() {
  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);

  return (
    <section className="relative overflow-hidden bg-[#f0faf5] py-10 sm:py-12">
      {/* Decorative background glow */}
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 mb-10">

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50 leading-tight">
            Voices of <span className="text-primary italic">Satisfaction</span>
          </h2>
          <div className="h-1.5 w-24 rounded-full bg-primary/50 mt-4 mx-auto" />
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex flex-col gap-8">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-8 px-4"
          >
            {[...firstRow, ...firstRow, ...firstRow].map((testimonial, i) => (
              <div key={i} className="w-[350px] shrink-0 sm:w-[450px]">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-8 px-4"
          >
            {[...secondRow, ...secondRow, ...secondRow].map((testimonial, i) => (
              <div key={i} className="w-[350px] shrink-0 sm:w-[450px]">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
