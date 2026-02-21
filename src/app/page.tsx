
"use client"

import { ResumeHeader } from "@/components/resume/ResumeHeader"
import { TechStack } from "@/components/resume/TechStack"
import { Experience } from "@/components/resume/Experience"
import { Education } from "@/components/resume/Education"
import { DownloadButton } from "@/components/resume/DownloadButton"

export default function Home() {
  return (
    <main className="min-h-screen pb-12 bg-[#f4f4f4]">
      {/* Responsive Fixed Container for Download Button */}
      <div className="fixed bottom-6 right-6 md:top-8 md:right-8 md:bottom-auto z-50 no-print">
        <DownloadButton />
      </div>

      <div className="a4-container">
        <div className="space-y-6">
          <ResumeHeader />
          <TechStack />
          <Experience />
          <Education />
        </div>

        <footer className="mt-8 pt-2 border-t border-black hidden print:block">
          <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-muted-foreground">
            <span>Shi Ting (Winnie) Lin • Senior Backend Engineer</span>
            <span>Page 1 of 2</span>
          </div>
        </footer>
      </div>
    </main>
  )
}
