"use client"

import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section className="animate-slide-up [animation-delay:300ms] space-y-4 pt-4 border-t border-black">
      <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground border-b border-black pb-1">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 items-center">
        <div className="text-[12px] font-black text-black uppercase tracking-tighter">
          2014 – 2018
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-black flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-lg font-black uppercase tracking-tight leading-none">National Central University</h3>
            <p className="text-[12px] font-black text-accent uppercase tracking-[0.1em]">BBA, Information Management</p>
          </div>
        </div>
      </div>
    </section>
  )
}