"use client"

import { Mail, Phone, Linkedin, Globe, MapPin, Info } from "lucide-react"

export function ResumeHeader() {
  return (
    <header className="animate-slide-up space-y-10">
      <div className="border-b-[6px] border-black pb-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-1">
            <h1 className="text-8xl font-black tracking-tighter leading-[0.85]">
              SHI TING <br />
              <span className="text-accent italic">LIN</span>
            </h1>
            <p className="text-2xl font-black tracking-[0.2em] uppercase pt-4 flex items-center gap-3">
              Senior Backend Engineer
            </p>
          </div>
          <div className="flex flex-col items-end text-right font-bold text-sm tracking-tight space-y-2">
            <div className="flex items-center gap-2 bg-black text-white px-3 py-1">
              <MapPin className="w-3.5 h-3.5 fill-white" />
              <span className="uppercase tracking-widest">Taipei, Taiwan</span>
            </div>
            <div className="text-accent font-black text-xs uppercase tracking-widest bg-accent/10 px-3 py-1">
              Relocating to Singapore June 2026
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-start">
        <div className="space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground flex items-center gap-2">
            <Info className="w-3 h-3" /> Profile
          </h2>
          <div className="space-y-4">
            <p className="text-xl font-bold leading-[1.3] text-foreground">
              Senior Backend Engineer with 7+ years of experience specializing in core banking systems, global fiat gateways, and high-performance microservices.
            </p>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed">
              Proven track record in optimizing payment workflows and scaling high-concurrency systems using Java and Kotlin. Eligible for Dependant's Pass (DP), highly adaptable for local or remote opportunities.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-3 text-[13px] font-black border-l-2 border-black pl-10 h-full flex flex-col justify-center">
          <a href="mailto:linw2949@gmail.com" className="hover:text-accent transition-all flex items-center gap-3 group">
            <div className="w-6 h-6 bg-black flex items-center justify-center group-hover:bg-accent transition-colors">
              <Mail className="w-3.5 h-3.5 text-white" />
            </div>
            linw2949@gmail.com
          </a>
          <a href="tel:+886906182355" className="hover:text-accent transition-all flex items-center gap-3 group">
            <div className="w-6 h-6 bg-black flex items-center justify-center group-hover:bg-accent transition-colors">
              <Phone className="w-3.5 h-3.5 text-white" />
            </div>
            +886 906-182-355
          </a>
          <a href="https://linkedin.com/in/winnielin2949" target="_blank" className="hover:text-accent transition-all flex items-center gap-3 group">
            <div className="w-6 h-6 bg-black flex items-center justify-center group-hover:bg-accent transition-colors">
              <Linkedin className="w-3.5 h-3.5 text-white" />
            </div>
            winnielin2949
          </a>
          <a href="https://winnie-lin.space" target="_blank" className="hover:text-accent transition-all flex items-center gap-3 group">
            <div className="w-6 h-6 bg-black flex items-center justify-center group-hover:bg-accent transition-colors">
              <Globe className="w-3.5 h-3.5 text-white" />
            </div>
            winnie-lin.space
          </a>
        </div>
      </div>
    </header>
  )
}
