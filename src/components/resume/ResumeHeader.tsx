"use client"

import { Mail, Linkedin, Globe, MapPin, Sparkles } from "lucide-react"

export function ResumeHeader() {
  return (
    <header className="space-y-4 border-b-[3px] border-black pb-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-1">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">
              SHI TING (WINNIE) <span className="text-accent">LIN</span>
            </h1>
            {/* Prominent Seeking Opportunities Banner */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-3 py-1 rounded-sm mt-1 animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Sparkles className="w-3.5 h-3.5 text-accent fill-accent" />
              <span className="text-[11px] md:text-[12px] font-black text-accent uppercase tracking-widest">
                Actively seeking opportunities in Singapore (Relocating June 2026)
              </span>
            </div>
          </div>
          
          <p className="text-base font-black tracking-[0.05em] uppercase text-black pt-1">
            Senior Backend Engineer
          </p>
          
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1.5 bg-black text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-widest">
              <MapPin className="w-2.5 h-2.5 fill-white" />
              <span>Taipei, Taiwan</span>
            </div>
            <div className="text-accent font-black text-[9px] uppercase tracking-widest border border-accent/20 px-2 py-0.5">
              Singapore June 2026 (DP Eligible)
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-y-1 text-[10px] font-black border-l-2 border-black pl-4">
          <a href="mailto:hi@winnie-lin.space" className="hover:text-accent flex items-center gap-2 group">
            <div className="w-4 h-4 bg-black flex items-center justify-center shrink-0 p-0.5 group-hover:bg-accent transition-colors">
              <Mail className="w-2.5 h-2.5 text-white" />
            </div>
            hi@winnie-lin.space
          </a>
          <a href="https://linkedin.com/in/winnielin2949" target="_blank" className="hover:text-accent flex items-center gap-2 group">
            <div className="w-4 h-4 bg-black flex items-center justify-center shrink-0 p-0.5 group-hover:bg-accent transition-colors">
              <Linkedin className="w-2.5 h-2.5 text-white" />
            </div>
            linkedin.com/in/winnielin2949
          </a>
          <a href="https://winnie-lin.space" target="_blank" className="hover:text-accent flex items-center gap-2 group">
            <div className="w-4 h-4 bg-black flex items-center justify-center shrink-0 p-0.5 group-hover:bg-accent transition-colors">
              <Globe className="w-2.5 h-2.5 text-white" />
            </div>
            winnie-lin.space
          </a>
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-black/5">
        <p className="text-[12.5px] font-bold leading-tight text-foreground">
          Senior Backend Engineer with 7+ years of experience specializing in core banking systems, global fiat gateways, and high-performance microservices.
        </p>
        <p className="text-[11px] font-medium text-muted-foreground leading-snug">
          Proven track record in optimizing payment workflows and scaling high-concurrency systems using Java and Kotlin. Relocating to Singapore in mid-June 2026. Eligible for Dependant's Pass (DP), highly adaptable for local or remote opportunities.
        </p>
      </div>
    </header>
  )
}
