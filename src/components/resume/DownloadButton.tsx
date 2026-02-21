
"use client"

import { FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadButton() {
  const handleDownload = () => {
    window.print();
  }

  return (
    <>
      {/* Desktop Version */}
      <Button 
        onClick={handleDownload}
        className="hidden md:flex h-14 px-8 rounded-none bg-black text-white hover:bg-accent transition-all duration-300 font-black uppercase tracking-widest shadow-2xl border border-white/10"
      >
        <FileDown className="w-5 h-5 mr-3" />
        <span>Export PDF</span>
      </Button>

      {/* Mobile Version (FAB) */}
      <Button 
        onClick={handleDownload}
        size="icon"
        className="md:hidden w-14 h-14 rounded-full bg-black text-white hover:bg-accent shadow-2xl active:scale-95 transition-transform"
      >
        <FileDown className="w-6 h-6" />
      </Button>
    </>
  )
}
