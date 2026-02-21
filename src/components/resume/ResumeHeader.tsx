"use client"

import { Mail, Phone, Linkedin, Globe, MapPin } from "lucide-react"

export function ResumeHeader() {
  return (
    <header className="space-y-8 animate-fade-in-up">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 border-b border-primary/10 pb-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-primary font-headline">
            SHI TING <span className="text-accent">(WINNIE)</span> LIN
          </h1>
          <p className="text-2xl font-semibold text-muted-foreground uppercase tracking-[0.2em]">
            Senior Backend Engineer
          </p>
          <div className="flex items-center gap-2 text-primary font-medium">
            <MapPin className="w-4 h-4" />
            <span>Taipei, Taiwan • Relocating to Singapore June 2026</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-3 text-sm font-medium">
          <a href="mailto:linw2949@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            linw2949@gmail.com
          </a>
          <a href="tel:+886906182355" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            +886 906-182-355
          </a>
          <a href="https://linkedin.com/in/winnielin2949" target="_blank" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
              <Linkedin className="w-4 h-4" />
            </div>
            linkedin.com/in/winnielin2949
          </a>
          <a href="https://winnie-lin.space" target="_blank" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
            <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
              <Globe className="w-4 h-4" />
            </div>
            winnie-lin.space
          </a>
        </div>
      </div>

      <div className="max-w-4xl">
        <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">Professional Profile</h2>
        <p className="text-xl text-foreground/80 leading-relaxed font-medium">
          Senior Backend Engineer with 7+ years of experience specializing in core banking systems, global fiat gateways, and high-performance microservices. Proven track record in optimizing payment workflows and scaling high-concurrency systems using Java and Kotlin. Relocating to Singapore in mid-June 2026. Eligible for Dependant's Pass (DP).
        </p>
      </div>
    </header>
  )
}