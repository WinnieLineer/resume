"use client"

import { Calendar } from "lucide-react"

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "BTSE",
    period: "Apr 2025 – Present",
    location: "Taipei, Taiwan",
    achievements: [
      "Global Fiat Integration: Integrated Equals API and Bank Frick to enable multi-currency (GBP, EUR, USD) deposits and automated withdrawals across FPS, SEPA, and SWIFT networks. Reduced manual processing time to near zero through end-to-end API automation.",
      "High-Performance Architecture: Engineered a Redis-based (Sorted Sets) reward hold system to manage time-bound withdrawal limits. Achieved sub-10 second end-to-end processing with millisecond-level Redis queries, ensuring seamless high-frequency frontend polling.",
      "Security & Compliance: Implemented automated bank account ownership validation via Volt API and established secure webhook architectures with payload signature and token verification.",
      "Platform Scalability: Designed a cache-optimized crypto address generation module to reduce database load and enhanced the TradeView backend to support Contract for Difference (CFD) functionalities."
    ],
    stack: "Kotlin, Ktor, PostgreSQL, Kafka, Redis, API Integration"
  },
  {
    role: "Software Engineer",
    company: "LINE Bank",
    period: "Nov 2022 – Apr 2025",
    location: "Taipei, Taiwan",
    achievements: [
      "Core Banking & FX Integration: Engineered enhancements to the core banking system to seamlessly interface with the foreign exchange (FX) module. Enabled secure, zero-touch automated processing for cross-border transactions, robustly supporting a 3.3x year-over-year surge in USD outward remittances.",
      "Transaction Management: Maintained and optimized core transfer functionalities, achieving 99.9%+ high availability and secure transaction processing for large-scale user operations."
    ],
    stack: "Java, Spring Boot, Oracle Database, MySQL, MSSQL"
  },
  {
    role: "Software Engineer",
    company: "E.SUN Financial Holding Co., Ltd",
    period: "Apr 2020 – Nov 2021",
    location: "Taipei, Taiwan",
    achievements: [
      "Microservices Development: Designed and implemented microservices for core banking operations using Java (Spring Boot), Oracle SQL, and Vue.js.",
      "System Optimization: Delivered robust backend systems supporting over 150,000 daily active users, improving operational efficiency by 20% through optimized workflows.",
      "Cross-functional Delivery: Bridged technical and business requirements across cross-functional teams. Consistently delivered high-quality microservices at 2x the average team velocity."
    ],
    stack: "Java, Spring Boot, Oracle Database, REST APIs, Vue.js"
  }
]

export function Experience() {
  return (
    <section className="space-y-8 animate-fade-in-up [animation-delay:400ms]">
      <h2 className="text-2xl font-black text-primary tracking-tighter flex items-center gap-4">
        WORK EXPERIENCE
        <div className="h-px flex-1 bg-border"></div>
      </h2>
      
      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group print-break-inside-avoid">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                  <p className="text-lg font-bold text-accent">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground bg-secondary px-3 py-1 rounded">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
              </div>
              
              <ul className="list-disc list-outside ml-5 space-y-2.5 text-foreground/80 leading-relaxed font-medium">
                {exp.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {exp.stack && (
                <div className="pt-2 flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-accent border border-accent/20 px-2 py-0.5 rounded">Tech Stack</span>
                  <p className="text-sm font-semibold text-primary/70">{exp.stack}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}