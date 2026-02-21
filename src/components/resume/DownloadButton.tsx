"use client"

import { FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadButton() {
  const handleDownload = () => {
    window.print();
  }

  return (
    <Button 
      onClick={handleDownload}
      className="h-14 px-8 rounded-none bg-black text-white hover:bg-accent transition-all duration-300 font-black uppercase tracking-widest shadow-2xl"
    >
      <FileDown className="w-5 h-5 mr-3" />
      <span>Export PDF</span>
    </Button>
  )
}
