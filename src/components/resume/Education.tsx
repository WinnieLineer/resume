"use client"

import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section className="animate-slide-up [animation-delay:600ms] space-y-8 pt-8 border-t-2 border-black">
      <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground border-b-2 border-black pb-2">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 items-center">
        <div className="text-sm font-black text-black uppercase tracking-tighter">
          2014 – 2018
        </div>
        <div className="flex items-center gap-6">
          <div className="w-14 h-14 bg-black flex items-center justify-center shrink-0">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-black uppercase tracking-tight leading-none">National Central University</h3>
            <p className="text-sm font-black text-accent uppercase tracking-[0.1em]">BBA, Information Management</p>
          </div>
        </div>
      </div>
    </section>
  )
}
