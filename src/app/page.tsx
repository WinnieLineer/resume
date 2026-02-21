"use client"

import { ResumeHeader } from "@/components/resume/ResumeHeader"
import { TechStack } from "@/components/resume/TechStack"
import { Experience } from "@/components/resume/Experience"
import { Education } from "@/components/resume/Education"
import { DownloadButton } from "@/components/resume/DownloadButton"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Floating UI for Web Only */}
      <div className="fixed top-8 right-8 z-50 no-print">
        <DownloadButton />
      </div>

      <div className="a4-container relative">
        <div className="space-y-12">
          {/* Header section with huge typography */}
          <ResumeHeader />

          {/* Technical Grid */}
          <TechStack />

          {/* Main Content */}
          <div className="space-y-12">
            <Experience />
            <Education />
          </div>
        </div>

        {/* Minimalist Footer for Print */}
        <footer className="mt-12 pt-8 border-t border-black hidden print:block">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <span>Shi Ting Lin • Senior Backend Engineer</span>
            <span>2026 Edition</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
