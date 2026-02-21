"use client"

import { Mail, Phone, Linkedin, Globe, MapPin, Info } from "lucide-react"

export function ResumeHeader() {
  return (
    <header className="animate-slide-up space-y-6">
      <div className="border-b-[4px] border-black pb-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="space-y-0">
            <h1 className="text-6xl font-black tracking-tighter leading-[0.9]">
              SHI TING <br />
              <span className="text-accent">LIN</span>
            </h1>
            <p className="text-xl font-black tracking-[0.1em] uppercase pt-2">
              Senior Backend Engineer
            </p>
          </div>
          <div className="flex flex-col items-end text-right space-y-1">
            <div className="flex items-center gap-2 bg-black text-white px-2 py-0.5 text-[11px] font-black uppercase tracking-widest">
              <MapPin className="w-3 h-3 fill-white" />
              <span>Taipei, Taiwan</span>
            </div>
            <div className="text-accent font-black text-[10px] uppercase tracking-widest bg-accent/5 px-2 py-0.5 border border-accent/20">
              Relocating to Singapore June 2026
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-start">
        <div className="space-y-3">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-2">
            <Info className="w-3 h-3" /> Profile
          </h2>
          <div className="space-y-2">
            <p className="text-[15px] font-bold leading-snug text-foreground">
              Senior Backend Engineer with 7+ years of experience specializing in core banking systems, global fiat gateways, and high-performance microservices.
            </p>
            <p className="text-[12.5px] font-medium text-muted-foreground leading-relaxed">
              Proven track record in optimizing payment workflows and scaling high-concurrency systems using Java and Kotlin. Eligible for Dependant's Pass (DP), highly adaptable for local or remote opportunities.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-2 text-[12px] font-black border-l-2 border-black pl-6">
          <a href="mailto:linw2949@gmail.com" className="hover:text-accent transition-all flex items-center gap-2 group">
            <div className="w-5 h-5 bg-black flex items-center justify-center group-hover:bg-accent transition-colors shrink-0">
              <Mail className="w-3 h-3 text-white" />
            </div>
            linw2949@gmail.com
          </a>
          <div className="flex items-center gap-2 group">
            <div className="w-5 h-5 bg-black flex items-center justify-center shrink-0">
              <Phone className="w-3 h-3 text-white" />
            </div>
            +886 906-182-355
          </div>
          <a href="https://linkedin.com/in/winnielin2949" target="_blank" className="hover:text-accent transition-all flex items-center gap-2 group">
            <div className="w-5 h-5 bg-black flex items-center justify-center group-hover:bg-accent transition-colors shrink-0">
              <Linkedin className="w-3 h-3 text-white" />
            </div>
            winnielin2949
          </a>
          <a href="https://winnie-lin.space" target="_blank" className="hover:text-accent transition-all flex items-center gap-2 group">
            <div className="w-5 h-5 bg-black flex items-center justify-center group-hover:bg-accent transition-colors shrink-0">
              <Globe className="w-3 h-3 text-white" />
            </div>
            winnie-lin.space
          </a>
        </div>
      </div>
    </header>
  )
}