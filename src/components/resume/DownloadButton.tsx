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
      variant="outline"
      className="gap-2 border-primary/20 hover:border-primary bg-white text-primary shadow-sm transition-all"
    >
      <FileDown className="w-4 h-4" />
      <span>匯出 PDF 履歷</span>
    </Button>
  )
}