"use client"

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "BTSE",
    period: "2025 – Present",
    location: "Taipei",
    achievements: [
      "Global Fiat Integration: Engineered automated multi-currency (GBP, EUR, USD) deposit/withdrawal gateways via Equals API and Bank Frick.",
      "High-Performance Architecture: Designed Redis Sorted Sets reward system handling sub-10s end-to-end high-frequency frontend polling.",
      "Compliance Engineering: Implemented automated bank ownership validation using Volt API and secure webhook signature architectures."
    ]
  },
  {
    role: "Software Engineer",
    company: "LINE Bank",
    period: "2022 – 2025",
    location: "Taipei",
    achievements: [
      "FX Core Integration: Engineered high-availability cross-border transaction modules, supporting 3.3x surge in USD remittances.",
      "99.9% Availability: Maintained and optimized core banking transfer services for multi-million user base."
    ]
  },
  {
    role: "Software Engineer",
    company: "E.SUN Financial",
    period: "2020 – 2021",
    location: "Taipei",
    achievements: [
      "Microservices Scalability: Delivered backend systems for 150k daily active users with Java/Oracle.",
      "Efficiency Boost: Optimized core workflows, improving operational speed by 20% across cross-functional delivery cycles."
    ]
  }
]

export function Experience() {
  return (
    <section className="animate-slide-up [animation-delay:400ms] space-y-8">
      <h2 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground border-b border-black pb-2">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 group">
            <div className="text-sm font-black text-muted-foreground pt-1.5 uppercase tracking-tighter">
              {exp.period}
            </div>
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row justify-between items-start gap-1">
                <h3 className="text-2xl font-black tracking-tight leading-none group-hover:text-accent transition-colors uppercase">
                  {exp.role} <span className="text-muted-foreground font-medium text-lg ml-2">/ {exp.company}</span>
                </h3>
              </div>
              <ul className="space-y-2 text-sm font-medium text-foreground/80 border-l-[3px] border-black pl-6">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="relative before:content-[''] before:absolute before:-left-[27px] before:top-2 before:w-1.5 before:h-1.5 before:bg-black">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
