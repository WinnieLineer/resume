"use client"

import { Mail, Phone, Linkedin, Globe, MapPin } from "lucide-react"

export function ResumeHeader() {
  return (
    <header className="animate-slide-up space-y-8">
      <div className="border-b-[4px] border-black pb-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="space-y-1">
            <h1 className="text-7xl font-black tracking-tighter leading-none">
              SHI TING <br />
              <span className="text-accent">LIN</span>
            </h1>
            <p className="text-xl font-bold tracking-[0.3em] uppercase pt-2">
              Senior Backend Engineer
            </p>
          </div>
          <div className="flex flex-col items-end text-right font-bold text-sm tracking-tight space-y-1">
            <div className="flex items-center gap-2">
              <span>Taipei, Taiwan</span>
              <MapPin className="w-3 h-3 fill-black" />
            </div>
            <div className="text-accent">Relocating to Singapore June 2026</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">Profile</h2>
          <p className="text-lg font-medium leading-[1.4] pr-4">
            Specializing in high-concurrency core banking and global payment gateways. 7+ years of building robust infrastructures for billion-dollar financial flows.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[12px] font-bold border-l border-black pl-8">
          <a href="mailto:linw2949@gmail.com" className="hover:text-accent transition-colors flex items-center gap-2">
            <Mail className="w-3 h-3" /> linw2949@gmail.com
          </a>
          <a href="tel:+886906182355" className="hover:text-accent transition-colors flex items-center gap-2">
            <Phone className="w-3 h-3" /> +886 906-182-355
          </a>
          <a href="https://linkedin.com/in/winnielin2949" target="_blank" className="hover:text-accent transition-colors flex items-center gap-2">
            <Linkedin className="w-3 h-3" /> winnielin2949
          </a>
          <a href="https://winnie-lin.space" target="_blank" className="hover:text-accent transition-colors flex items-center gap-2">
            <Globe className="w-3 h-3" /> winnie-lin.space
          </a>
        </div>
      </div>
    </header>
  )
}
