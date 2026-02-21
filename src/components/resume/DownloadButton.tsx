"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadButton() {
  const handleDownload = () => {
    window.print();
  }

  return (
    <Button 
      onClick={handleDownload}
      className="fixed bottom-8 right-8 z-50 rounded-full h-14 w-14 shadow-2xl no-print bg-primary hover:bg-primary/90 text-white"
      size="icon"
      aria-label="Download PDF"
    >
      <Download className="w-6 h-6" />
    </Button>
  )
}