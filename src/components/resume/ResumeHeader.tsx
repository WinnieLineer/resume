"use client"

import { Mail, Phone, Linkedin, Globe, MapPin, Info } from "lucide-react"

export function ResumeHeader() {
  return (
    <header className="animate-slide-up space-y-5">
      <div className="border-b-[3px] border-black pb-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-2">
          <div className="space-y-0">
            <h1 className="text-5xl font-black tracking-tighter leading-none">
              SHI TING <span className="text-accent">LIN</span>
            </h1>
            <p className="text-lg font-black tracking-[0.05em] uppercase pt-1">
              Senior Backend Engineer
            </p>
          </div>
          <div className="flex flex-col items-end text-right space-y-1">
            <div className="flex items-center gap-2 bg-black text-white px-2 py-0.5 text-[10px] font-black uppercase tracking-widest">
              <MapPin className="w-3 h-3 fill-white" />
              <span>Taipei, Taiwan</span>
            </div>
            <div className="text-accent font-black text-[9px] uppercase tracking-widest border border-accent/20 px-2 py-0.5">
              Relocating to Singapore June 2026
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 items-start">
        <div className="space-y-2">
          <h2 className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
            <Info className="w-3 h-3" /> Profile
          </h2>
          <div className="space-y-1.5">
            <p className="text-[13.5px] font-bold leading-tight text-foreground">
              Senior Backend Engineer with 7+ years of experience specializing in core banking systems, global fiat gateways, and high-performance microservices.
            </p>
            <p className="text-[12px] font-medium text-muted-foreground leading-snug">
              Proven track record in optimizing payment workflows and scaling high-concurrency systems using Java and Kotlin. Eligible for Dependant's Pass (DP), highly adaptable for local or remote opportunities.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-1.5 text-[11px] font-black border-l-2 border-black pl-5">
          <a href="mailto:linw2949@gmail.com" className="hover:text-accent transition-all flex items-center gap-2 group">
            <div className="w-4.5 h-4.5 bg-black flex items-center justify-center group-hover:bg-accent transition-colors shrink-0 p-0.5">
              <Mail className="w-3 h-3 text-white" />
            </div>
            linw2949@gmail.com
          </a>
          <div className="flex items-center gap-2 group">
            <div className="w-4.5 h-4.5 bg-black flex items-center justify-center shrink-0 p-0.5">
              <Phone className="w-3 h-3 text-white" />
            </div>
            +886 906-182-355
          </div>
          <a href="https://linkedin.com/in/winnielin2949" target="_blank" className="hover:text-accent transition-all flex items-center gap-2 group">
            <div className="w-4.5 h-4.5 bg-black flex items-center justify-center group-hover:bg-accent transition-colors shrink-0 p-0.5">
              <Linkedin className="w-3 h-3 text-white" />
            </div>
            winnielin2949
          </a>
          <a href="https://winnie-lin.space" target="_blank" className="hover:text-accent transition-all flex items-center gap-2 group">
            <div className="w-4.5 h-4.5 bg-black flex items-center justify-center group-hover:bg-accent transition-colors shrink-0 p-0.5">
              <Globe className="w-3 h-3 text-white" />
            </div>
            winnie-lin.space
          </a>
        </div>
      </div>
    </header>
  )
}