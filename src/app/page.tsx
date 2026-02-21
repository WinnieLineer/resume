"use client"

import { ResumeHeader } from "@/components/resume/ResumeHeader"
import { TechStack } from "@/components/resume/TechStack"
import { Experience } from "@/components/resume/Experience"
import { Education } from "@/components/resume/Education"
import { DownloadButton } from "@/components/resume/DownloadButton"

export default function Home() {
  return (
    <main className="min-h-screen pb-12">
      <div className="fixed top-6 right-6 z-50 no-print">
        <DownloadButton />
      </div>

      <div className="a4-container relative">
        <div className="space-y-8">
          <ResumeHeader />
          <TechStack />
          <div className="space-y-8">
            <Experience />
            <Education />
          </div>
        </div>

        <footer className="mt-8 pt-4 border-t border-black hidden print:block">
          <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-muted-foreground">
            <span>Shi Ting (Winnie) Lin • Senior Backend Engineer</span>
            <span>Page 1 of 2</span>
          </div>
        </footer>
      </div>
    </main>
  )
}