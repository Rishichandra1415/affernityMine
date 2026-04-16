"use client";

import { motion } from "framer-motion";

interface ContactHeroProps {
  title: string;
  description: string;
  badge?: string;
  highlightWords?: string[];
}

export function ContactHero({ title, description, badge = "Contact Us", highlightWords = [] }: ContactHeroProps) {
  const renderTitle = () => {
    if (highlightWords.length === 0) return title;
    
    let renderedTitle = title;
    highlightWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      renderedTitle = renderedTitle.replace(regex, `<span class="text-primary italic">$1</span>`);
    });
    
    return <span dangerouslySetInnerHTML={{ __html: renderedTitle }} />;
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-20 sm:pt-48 sm:pb-32">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/20 blur-[120px] h-[500px] w-[500px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] h-[400px] w-[400px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {badge}
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl leading-tight"
          >
            {renderTitle()}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
