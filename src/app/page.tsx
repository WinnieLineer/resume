"use client"

import { ResumeHeader } from "@/components/resume/ResumeHeader"
import { TechStack } from "@/components/resume/TechStack"
import { Experience } from "@/components/resume/Experience"
import { Education } from "@/components/resume/Education"
import { DownloadButton } from "@/components/resume/DownloadButton"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <div className="container mx-auto max-w-5xl px-6 py-12 md:py-20 space-y-20 relative">
        {/* Profile and Header */}
        <ResumeHeader />

        {/* Technical Skills */}
        <TechStack />

        {/* Experience Timeline */}
        <Experience />

        {/* Education */}
        <Education />

        {/* Footer info for print only */}
        <footer className="hidden print:block pt-10 text-center text-xs text-muted-foreground">
          <p>Generated via winnie-lin.space • linw2949@gmail.com • +886 906-182-355</p>
        </footer>
      </div>

      {/* Interactive Download Button */}
      <DownloadButton />
    </main>
  )
}