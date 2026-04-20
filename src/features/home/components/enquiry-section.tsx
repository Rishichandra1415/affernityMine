"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";
import { 
  Send, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle2,
  ArrowRight,
  Loader2
} from "lucide-react";
import Image from "next/image";

// API Base URL - update this when moving to production
const API_URL = "http://localhost:5000/api";

export function EnquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    facilityType: "Badminton Court",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        facilityType: "Badminton Court",
        message: ""
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("Submission Error:", error);
      setStatus("error");
      setErrorMessage(error.message || "Failed to connect to the server.");
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-zinc-900 shadow-2xl lg:flex">
          
          {/* Left Side: Visual & Content */}
          <div className="relative w-full lg:w-1/2 min-h-[400px]">
            <Image
              src="/images/badminton-hero.png" // Using existing hero image
              alt="Professional Court Construction"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent" />
            
            <div className="relative z-10 flex h-full flex-col justify-center p-10 lg:p-14 space-y-6">
              <div className="inline-flex items-center space-x-2 rounded-full bg-primary/20 px-4 py-1.5 backdrop-blur-md">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Let's Connect
                </span>
              </div>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                Ready to Build <br />
                <span className="text-primary italic">Your Dream Arena?</span>
              </h2>
              <p className="max-w-md text-lg text-zinc-300">
                Partner with India's leading sports infrastructure experts. Get a customized quote for your facility today.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Expert Site Consultation",
                  "Detailed Project Mapping",
                  "Material Specification Guide",
                  "Comprehensive Maintenance Plan"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-medium text-zinc-100">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="relative w-full lg:w-1/2 bg-white p-10 lg:p-14 dark:bg-zinc-900/50 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-zinc-100 bg-zinc-50 px-12 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-2xl border border-zinc-100 bg-zinc-50 px-12 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Work Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contact@company.com"
                    className="w-full rounded-2xl border border-zinc-100 bg-zinc-50 px-12 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Facility Type</label>
                <select 
                  name="facilityType"
                  value={formData.facilityType}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-zinc-100 bg-zinc-50 px-6 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary dark:bg-zinc-800 dark:border-zinc-700 dark:text-white appearance-none"
                >
                  <option>Badminton Court</option>
                  <option>Tennis Court</option>
                  <option>Basketball Court</option>
                  <option>Multi-Sport Arena</option>
                  <option>Running Track</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 h-5 w-5 text-zinc-400" />
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    className="w-full rounded-2xl border border-zinc-100 bg-zinc-50 px-12 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary dark:bg-zinc-800 dark:border-zinc-700 dark:text-white resize-none"
                  />
                </div>
              </div>

              {status === "success" && (
                <p className="text-sm font-medium text-green-600 animate-in fade-in slide-in-from-top-1">
                  ✓ Your enquiry has been sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-medium text-red-600 animate-in fade-in slide-in-from-top-1">
                  ⚠ {errorMessage}
                </p>
              )}

              <Button 
                type="submit"
                disabled={status === "loading"}
                size="lg" 
                className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
