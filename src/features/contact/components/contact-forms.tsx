"use client";

import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";
import { 
  Send, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight,
  Target,
  Maximize,
  Briefcase,
  MapPin
} from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface FormContainerProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

function FormContainer({ children, title, subtitle }: FormContainerProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-12 sm:py-16">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 xl:bg-fixed mix-blend-luminosity" 
          style={{ backgroundImage: `url('/images/projects/track.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950/90" />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-8 backdrop-blur-sm bg-zinc-950/20 py-6 rounded-3xl border border-white/5">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl drop-shadow-xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-zinc-300 drop-shadow-md">
            {subtitle}
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl rounded-[3rem] bg-white/95 backdrop-blur-xl p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] sm:p-12 lg:p-16 dark:bg-zinc-950/95 dark:shadow-none dark:border dark:border-white/10">
          {children}
        </div>
      </div>
    </section>
  );
}

const inputStyles = "w-full rounded-2xl border border-zinc-100 bg-zinc-50 px-12 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary dark:bg-zinc-800 dark:border-zinc-700 dark:text-white";
const labelStyles = "text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block";

export function GeneralContactForm() {
  return (
    <FormContainer 
      title="Send a Message" 
      subtitle="Have a general question? We're here to help you."
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label className={labelStyles}>Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input type="text" placeholder="John Doe" className={inputStyles} />
            </div>
          </div>
          <div className="space-y-2">
            <label className={labelStyles}>Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input type="tel" placeholder="+91 98765 43210" className={inputStyles} />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className={labelStyles}>Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input type="email" placeholder="john@example.com" className={inputStyles} />
          </div>
        </div>

        <div className="space-y-2">
          <label className={labelStyles}>Your Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-zinc-400" />
            <textarea rows={4} placeholder="How can we help you today?" className={cn(inputStyles, "resize-none h-40")} />
          </div>
        </div>

        <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
          Send Message <Send className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </FormContainer>
  );
}

export function EnquiryForm() {
  return (
    <FormContainer 
      title="Facility Enquiry" 
      subtitle="Expert consultation for your upcoming sports infrastructure project."
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label className={labelStyles}>Contact Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input type="text" placeholder="Name" className={inputStyles} />
            </div>
          </div>
          <div className="space-y-2">
            <label className={labelStyles}>Direct Phone</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input type="tel" placeholder="Phone" className={inputStyles} />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className={labelStyles}>Facility Interest</label>
          <div className="relative">
            <Target className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 z-10" />
            <select className={cn(inputStyles, "appearance-none cursor-pointer relative z-0")}>
              <option>Select Facility Type</option>
              <option>Badminton Court</option>
              <option>Tennis Court</option>
              <option>Basketball Court</option>
              <option>Synthetic Track</option>
              <option>Others</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className={labelStyles}>Enquiry Details</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-zinc-400" />
            <textarea rows={4} placeholder="Describe your requirements..." className={cn(inputStyles, "resize-none h-40")} />
          </div>
        </div>

        <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
          Submit Enquiry <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </FormContainer>
  );
}

export function QuoteForm() {
  return (
    <FormContainer 
      title="Request a Quote" 
      subtitle="Get a detailed project estimation tailored to your specifications."
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label className={labelStyles}>Full Name</label>
            <input type="text" className={inputStyles} />
          </div>
          <div className="space-y-2">
            <label className={labelStyles}>Company / Institution</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input type="text" className={inputStyles} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label className={labelStyles}>Facility Type</label>
            <div className="relative">
              <select className={cn(inputStyles, "appearance-none cursor-pointer")}>
                <option>Badminton</option>
                <option>Basketball</option>
                <option>Tennis</option>
                <option>Track</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className={labelStyles}>Estimated Area (Sq. Ft.)</label>
            <div className="relative">
              <Maximize className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <input type="number" placeholder="5000" className={inputStyles} />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className={labelStyles}>Project Location (City/State)</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <input type="text" placeholder="e.g. Ranchi, Jharkhand" className={inputStyles} />
          </div>
        </div>

        <div className="space-y-2">
          <label className={labelStyles}>Additional Requirements</label>
          <div className="relative">
            <textarea rows={4} placeholder="Budget, specific materials, timeline..." className={cn(inputStyles, "resize-none h-40")} />
          </div>
        </div>

        <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
          Generate Quote <Send className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </FormContainer>
  );
}
