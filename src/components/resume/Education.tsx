"use client"

export function Education() {
  return (
    <section className="animate-slide-up [animation-delay:600ms] space-y-6 pt-4">
      <h2 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground border-b border-black pb-2">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6">
        <div className="text-sm font-black text-muted-foreground uppercase tracking-tighter">
          2014 – 2018
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-black uppercase tracking-tight">National Central University</h3>
          <p className="text-sm font-bold text-accent uppercase tracking-widest">BBA, Information Management</p>
        </div>
      </div>
    </section>
  )
}
