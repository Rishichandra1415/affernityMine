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
    <section className="relative overflow-hidden bg-zinc-50 py-24 sm:py-32 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            {title}
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </div>
        
        <div className="mx-auto max-w-3xl rounded-[3rem] bg-white p-8 shadow-2xl shadow-zinc-200/50 sm:p-12 lg:p-16 dark:bg-zinc-950 dark:shadow-none dark:border dark:border-white/5">
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
          <div className="relative">
            <label className={labelStyles}>Full Name</label>
            <User className="absolute left-4 top-[3.2rem] h-5 w-5 text-zinc-400" />
            <input type="text" placeholder="John Doe" className={inputStyles} />
          </div>
          <div className="relative">
            <label className={labelStyles}>Phone Number</label>
            <Phone className="absolute left-4 top-[3.2rem] h-5 w-5 text-zinc-400" />
            <input type="tel" placeholder="+91 98765 43210" className={inputStyles} />
          </div>
        </div>
        
        <div className="relative">
          <label className={labelStyles}>Email Address</label>
          <Mail className="absolute left-4 top-[3.2rem] h-5 w-5 text-zinc-400" />
          <input type="email" placeholder="john@example.com" className={inputStyles} />
        </div>

        <div className="relative">
          <label className={labelStyles}>Your Message</label>
          <MessageSquare className="absolute left-4 top-20 h-5 w-5 text-zinc-400" />
          <textarea rows={4} placeholder="How can we help you today?" className={cn(inputStyles, "resize-none h-40")} />
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
          <div className="relative">
            <label className={labelStyles}>Contact Name</label>
            <User className="absolute left-4 top-[3.2rem] h-5 w-5 text-zinc-400" />
            <input type="text" placeholder="Name" className={inputStyles} />
          </div>
          <div className="relative">
            <label className={labelStyles}>Direct Phone</label>
            <Phone className="absolute left-4 top-[3.2rem] h-5 w-5 text-zinc-400" />
            <input type="tel" placeholder="Phone" className={inputStyles} />
          </div>
        </div>

        <div className="relative">
          <label className={labelStyles}>Facility Interest</label>
          <Target className="absolute left-4 top-[3.2rem] h-5 w-5 text-zinc-400" />
          <select className={cn(inputStyles, "appearance-none cursor-pointer")}>
            <option>Select Facility Type</option>
            <option>Badminton Court</option>
            <option>Tennis Court</option>
            <option>Basketball Court</option>
            <option>Synthetic Track</option>
            <option>Others</option>
          </select>
        </div>

        <div className="relative">
          <label className={labelStyles}>Enquiry Details</label>
          <MessageSquare className="absolute left-4 top-20 h-5 w-5 text-zinc-400" />
          <textarea rows={4} placeholder="Describe your requirements..." className={cn(inputStyles, "resize-none h-40")} />
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
          <div className="relative">
            <label className={labelStyles}>Full Name</label>
            <input type="text" className={inputStyles} />
          </div>
          <div className="relative">
            <label className={labelStyles}>Company / Institution</label>
            <Briefcase className="absolute left-4 top-[3.2rem] h-5 w-5 text-zinc-400" />
            <input type="text" className={inputStyles} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="relative">
            <label className={labelStyles}>Facility Type</label>
            <select className={cn(inputStyles, "appearance-none cursor-pointer")}>
              <option>Badminton</option>
              <option>Basketball</option>
              <option>Tennis</option>
              <option>Track</option>
            </select>
          </div>
          <div className="relative">
            <label className={labelStyles}>Estimated Area (Sq. Ft.)</label>
            <Maximize className="absolute left-4 top-[3.2rem] h-5 w-5 text-zinc-400" />
            <input type="number" placeholder="5000" className={inputStyles} />
          </div>
        </div>

        <div className="relative">
          <label className={labelStyles}>Project Location (City/State)</label>
          <MapPin className="absolute left-4 top-[3.2rem] h-5 w-5 text-zinc-400" />
          <input type="text" placeholder="e.g. Ranchi, Jharkhand" className={inputStyles} />
        </div>

        <div className="relative">
          <label className={labelStyles}>Additional Requirements</label>
          <textarea rows={4} placeholder="Budget, specific materials, timeline..." className={cn(inputStyles, "resize-none h-40")} />
        </div>

        <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
          Generate Quote <Send className="ml-2 h-5 w-5" />
        </Button>
      </form>
    </FormContainer>
  );
}
