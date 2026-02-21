"use client"

import { Mail, Phone, Linkedin, Globe, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ResumeHeader() {
  return (
    <header className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary font-headline">
            SHI TING (WINNIE) LIN
          </h1>
          <p className="text-xl font-medium text-accent uppercase tracking-widest">
            Senior Backend Engineer
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 text-sm text-muted-foreground">
          <a href="mailto:linw2949@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4 text-primary" /> linw2949@gmail.com
          </a>
          <a href="tel:+886906182355" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" /> +886 906-182-355
          </a>
          <a href="https://linkedin.com/in/winnielin2949" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4 text-primary" /> linkedin.com/in/winnielin2949
          </a>
          <a href="https://winnie-lin.space" target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Globe className="w-4 h-4 text-primary" /> winnie-lin.space
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" /> Taipei, Taiwan (Relocating to Singapore June 2026)
          </div>
        </div>
      </div>

      <div className="bg-white/50 p-6 rounded-xl border border-primary/10 shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-2 flex items-center gap-2">
          PROFILE
        </h2>
        <p className="text-foreground/90 leading-relaxed">
          Senior Backend Engineer with 7+ years of experience specializing in core banking systems, global fiat gateways, and high-performance microservices. Proven track record in optimizing payment workflows and scaling high-concurrency systems using Java and Kotlin. Relocating to Singapore in mid-June 2026. Eligible for Dependant's Pass (DP), highly adaptable for local or remote opportunities.
        </p>
      </div>
    </header>
  )
}