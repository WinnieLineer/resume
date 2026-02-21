"use client"

import { GraduationCap } from "lucide-react"

export function Education() {
  return (
    <section className="space-y-4 animate-fade-in-up [animation-delay:600ms] print-break-inside-avoid">
      <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
        <span className="w-8 h-px bg-primary/30"></span>
        EDUCATION
      </h2>
      <div className="bg-white/40 p-6 rounded-lg border border-primary/10 shadow-sm flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-full text-primary">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold">National Central University</h3>
          <p className="text-foreground/80">Bachelor of Business Administration - BBA, Information Management</p>
          <p className="text-accent font-medium text-sm mt-1">2014 – 2018</p>
        </div>
      </div>
    </section>
  )
}