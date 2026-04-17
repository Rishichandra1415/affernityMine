"use client";

import { PageContainer } from "@/shared/components";
import { MissionVisionSection } from "@/features/home";
import { motion } from "framer-motion";


export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section for About Page */}
      <section className="relative py-12 bg-zinc-900 overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            About <span className="text-primary italic">Affinity Sports</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            India's most trusted sports infrastructure company, dedicated to crafting 
            world-class arenas that inspire excellence and safety.
          </p>
        </div>
        {/* Background Decorative */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full" />
        </div>
      </section>


      <PageContainer>
        <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              A Legacy of <span className="text-primary italic">Quality</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
              Affinity Sports Infra is a leading Sports Exporter and Manufacturer Company of a wide range of Basketball 
              Poles, Fitness Equipment, Table Tennis Tables, and all types of Goal Posts. Led by well-experienced 
              teammates, we pride ourselves on delivering the best quality products to our esteemed clients across India.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We have constructed a wide and well-functional infrastructural unit that plays an important role 
              in the growth of our company. From the beginning, Affinity Sports has been committed to offering 
              innovative, high-quality products which are the best in the market.
            </p>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group">
             <img 
              src="/images/serviceimage/track.png" 
              alt="Affinity Projects" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

        </div>
      </PageContainer>

      {/* Certifications Section */}
      <section className="relative py-20 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
        {/* Background decorative element matching the image's green header style */}
        <div className="absolute top-0 right-0 w-full md:w-3/4 h-32 md:h-48 bg-[#00a651] border-b-[16px] border-[#008f45] z-0 skew-x-12 translate-x-10 rounded-bl-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-end mb-16 mr-4 md:mr-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider relative">
              Certificates
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start justify-items-center mt-8">
            
            {/* Certificate 1: GST */}
            <div className="w-full max-w-[320px] bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-transform duration-300 relative z-10 before:absolute before:-bottom-4 before:left-4 before:right-4 before:h-8 before:bg-black/40 before:blur-xl before:-z-10">
              <div className="aspect-[1/1.4] bg-white border flex flex-col pt-8 px-6 text-center text-black overflow-hidden relative">
                 <img src="/images/certificates/gst.jpg" alt="GST Registration Certificate" className="absolute inset-0 w-full h-full object-cover z-20" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                 {/* Fallback Content */}
                 <div className="flex flex-col items-center justify-start h-full">
                   <div className="w-12 h-16 border-2 border-zinc-800 mb-2 mx-auto flex items-center justify-center">
                      <span className="text-[8px] font-bold">EMBLEM</span>
                   </div>
                   <h3 className="font-bold text-sm mb-1">Government of India</h3>
                   <p className="text-[10px] mb-4">Form GST REG-06</p>
                   <h4 className="font-bold text-lg mb-8">Registration Certificate</h4>
                   <div className="w-full text-left text-[9px] space-y-3">
                      <div className="grid grid-cols-[16px_1fr_1fr] gap-1 border-t pt-2">
                        <span>1.</span><span className="font-semibold text-zinc-600">Legal Name</span><span className="font-bold">AMBIKESH CHAUHAN</span>
                      </div>
                      <div className="grid grid-cols-[16px_1fr_1fr] gap-1 border-t pt-2">
                        <span>2.</span><span className="font-semibold text-zinc-600">Trade Name, if any</span><span className="font-bold">M/S AAFFINITY ASSOCIATES</span>
                      </div>
                      <div className="grid grid-cols-[16px_1fr_1fr] gap-1 border-t pt-2">
                        <span>3.</span><span className="font-semibold text-zinc-600">Constitution of Business</span><span className="font-bold">Proprietorship</span>
                      </div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Certificate 2: ISO */}
            <div className="w-full max-w-[320px] bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-transform duration-300 relative z-20 md:-mt-6 before:absolute before:-bottom-4 before:left-4 before:right-4 before:h-8 before:bg-black/40 before:blur-xl before:-z-10">
              <div className="aspect-[1/1.4] bg-white border border-gray-100 flex flex-col py-10 px-6 text-center text-black overflow-hidden relative">
                <img src="/images/certificates/iso.jpg" alt="ISO 9001:2015 Certificate" className="absolute inset-0 w-full h-full object-cover z-20" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                {/* Fallback Content */}
                <div className="absolute inset-2 border border-blue-200 pointer-events-none"></div>
                <div className="absolute inset-3 border border-blue-400 pointer-events-none"></div>
                <div className="flex flex-col items-center justify-center h-full">
                   <div className="text-blue-500 font-bold mb-4 flex items-center justify-center gap-2">
                     <span className="text-2xl">R</span>
                     <span className="text-sm">MANAGEMENT SYSTEM<br/>CERTIFICATE</span>
                   </div>
                   <p className="text-[10px] mb-4 text-zinc-600">This is to certify that</p>
                   <h4 className="font-serif font-bold text-xl mb-2 text-zinc-900">M/S AAFFINITY ASSOCIATES</h4>
                   <p className="text-[8px] mb-8 text-zinc-500 max-w-[200px]">REGD OFFICE- 85, OLD A.G COLONY, KADRU, RANCHI - 834002, JHARKHAND, INDIA</p>
                   <p className="text-[9px] mb-4 text-zinc-600">has been assessed by RAPL and found to comply with the requirements of</p>
                   <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 w-full py-4 rounded-sm mb-4 border border-gray-200 border-dashed">
                     <h2 className="font-serif font-bold text-3xl mb-1 text-zinc-800 tracking-tight">ISO 9001 : 2015</h2>
                     <p className="text-sm text-zinc-700 italic">Quality Management Systems</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Certificate 3: MSME/UDYAM */}
            <div className="w-full max-w-[320px] bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-transform duration-300 relative z-10 before:absolute before:-bottom-4 before:left-4 before:right-4 before:h-8 before:bg-black/40 before:blur-xl before:-z-10">
               <div className="aspect-[1/1.4] bg-white border flex flex-col p-4 text-center text-black overflow-hidden relative">
                <img src="/images/certificates/udyam.jpg" alt="Udyam Registration Certificate" className="absolute inset-0 w-full h-full object-cover z-20" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                {/* Fallback Content */}
                <div className="flex flex-col items-center justify-start h-full border-[6px] border-blue-900 p-2 relative">
                   <div className="w-full bg-blue-900 text-white flex items-center justify-between p-2 mb-4">
                      <div className="w-8 h-8 flex items-center justify-center border border-white">
                        <span className="text-[6px]">EMBLEM</span>
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-[10px]">Government of India</h3>
                        <p className="text-[7px]">Ministry of Micro, Small and Medium Enterprises</p>
                      </div>
                      <span className="text-xs font-black tracking-widest text-orange-400">MSME</span>
                   </div>
                   
                   <h3 className="font-serif font-bold text-blue-900 text-sm mb-6 pb-2 border-b-2 border-blue-900 w-full uppercase">UDYAM REGISTRATION CERTIFICATE</h3>
                   
                   <div className="text-left w-full space-y-4 px-2">
                     <div className="grid grid-cols-2 gap-2 text-[10px]">
                       <strong className="text-zinc-600">UDYAM REGISTRATION NUMBER</strong> 
                       <span className="font-bold text-right">UDYAM-BR-26-0156975</span>
                     </div>
                     <div className="grid grid-cols-2 gap-2 text-[10px]">
                       <strong className="text-zinc-600">NAME OF ENTERPRISE</strong> 
                       <span className="font-bold text-right">AAFFINITY ASSOCIATES</span>
                     </div>
                     <div className="grid grid-cols-2 gap-2 text-[10px]">
                       <strong className="text-zinc-600">MAJOR ACTIVITY</strong> 
                       <span className="font-bold text-right text-green-700">SERVICES</span>
                     </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision below the main content */}

      <MissionVisionSection />

      {/* Contact info or stats could go here */}
    </main>
  );
}
