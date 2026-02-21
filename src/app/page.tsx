"use client"

import { ResumeHeader } from "@/components/resume/ResumeHeader"
import { TechStack } from "@/components/resume/TechStack"
import { Experience } from "@/components/resume/Experience"
import { Education } from "@/components/resume/Education"
import { DownloadButton } from "@/components/resume/DownloadButton"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] selection:bg-accent selection:text-white">
      {/* Top Utilities for Screen Only */}
      <div className="max-w-5xl mx-auto px-6 pt-8 flex justify-end no-print">
        <DownloadButton />
      </div>

      <div className="container mx-auto max-w-5xl px-6 py-12 md:py-16 space-y-16 relative">
        {/* Profile and Header */}
        <ResumeHeader />

        <div className="grid grid-cols-1 gap-16">
          {/* Technical Skills */}
          <TechStack />

          {/* Experience Timeline */}
          <Experience />

          {/* Education */}
          <Education />
        </div>

        {/* Footer info for print only */}
        <footer className="hidden print:block pt-10 border-t border-border text-center text-xs text-muted-foreground">
          <p>Generated via winnie-lin.space • linw2949@gmail.com • +886 906-182-355</p>
        </footer>
      </div>
    </main>
  )
}