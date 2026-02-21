"use client"

import { ExternalLink, Zap } from "lucide-react"

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "BTSE",
    url: "https://www.btse.com",
    period: "Apr 2025 – Present",
    location: "Taipei, Taiwan",
    tech: "Kotlin, Ktor, PostgreSQL, Kafka, Redis, API Integration",
    achievements: [
      "Global Fiat Integration: Integrated Equals API and Bank Frick to enable multi-currency (GBP, EUR, USD) deposits and automated withdrawals across FPS, SEPA, and SWIFT networks. Reduced manual processing time to near zero through end-to-end API automation.",
      "High-Performance Architecture: Engineered a Redis-based (Sorted Sets) reward hold system to manage time-bound withdrawal limits. Achieved sub-10s end-to-end processing with millisecond-level Redis queries for high-frequency frontend polling.",
      "Security & Compliance: Implemented automated bank account ownership validation via Volt API and established secure webhook architectures with payload signature and token verification.",
      "Platform Scalability: Designed a cache-optimized crypto address generation module to reduce database load and enhanced TradeView backend for Contract for Difference (CFD) functionalities."
    ]
  },
  {
    role: "Software Engineer",
    company: "LINE Bank",
    url: "https://www.linebank.com.tw",
    period: "Nov 2022 – Apr 2025",
    location: "Taipei, Taiwan",
    tech: "Java, Spring Boot, Oracle Database, MySQL, MSSQL",
    achievements: [
      "Core Banking & FX Integration: Engineered enhancements to core banking for FX module interface. Enabled secure automated processing for cross-border transactions, supporting 3.3x YoY surge in USD outward remittances.",
      "Transaction Management: Optimized core transfer functionalities, achieving 99.9%+ high availability (maintenance only biannually) for large-scale operations."
    ]
  },
  {
    role: "Sabbatical & Professional Development",
    company: "Career Break",
    url: "#",
    period: "Feb 2022 – Oct 2022",
    location: "Singapore & Taiwan",
    tech: "Algorithms, Data Structures, Networks",
    achievements: [
      "Singapore Immersion: Immersed in Singapore for two months, establishing high adaptability for future relocation.",
      "Advanced Coursework: Enrolled in CS coursework (Algorithms, Data Structures, Networks) at National Chiao Tung University to deepen system design capabilities."
    ]
  },
  {
    role: "Software Engineer",
    company: "E.SUN Financial",
    url: "https://www.esunbank.com.tw",
    period: "Apr 2020 – Nov 2021",
    location: "Taipei, Taiwan",
    tech: "Java, Spring Boot, Oracle, REST APIs, Vue.js",
    achievements: [
      "Microservices Development: Designed and implemented microservices for core banking operations using Java (Spring Boot) and Vue.js.",
      "System Optimization: Supported 150k+ daily active users, improving operational efficiency by 20% through optimized workflows.",
      "Cross-functional Delivery: Consistently delivered high-quality microservices at 2x average team velocity, ensuring critical banking projects met tight deadlines."
    ]
  },
  {
    role: "Engineer",
    company: "Compal",
    url: "https://www.compal.com",
    period: "Jul 2018 – Feb 2020",
    location: "Jiangsu, China",
    tech: "Agile, Supply Chain Management",
    achievements: [
      "Supply Chain Solutions: Developed and maintained SCM and procurement software solutions using Agile methodologies."
    ]
  }
]

export function Experience() {
  return (
    <section className="animate-slide-up [animation-delay:200ms] space-y-6">
      <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground border-b border-black pb-1">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 relative group">
            <div className="space-y-1">
              <div className="text-[12px] font-black text-black uppercase tracking-tighter">
                {exp.period}
              </div>
              <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                {exp.location}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-xl font-black tracking-tighter leading-none uppercase">
                  {exp.role} 
                </h3>
                <div className="flex items-center gap-2">
                  <a 
                    href={exp.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent font-black text-[14px] hover:underline inline-flex items-center gap-1"
                  >
                    {exp.company}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <div className="flex items-center gap-1 px-1.5 py-0.5 bg-black text-white text-[9px] font-black uppercase tracking-widest">
                    <Zap className="w-2.5 h-2.5 fill-accent text-accent" /> {exp.tech}
                  </div>
                </div>
              </div>

              <ul className="space-y-1.5 text-[12.5px] leading-snug font-medium text-foreground/90 border-l-2 border-black pl-5 relative">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="relative before:content-[''] before:absolute before:-left-[22px] before:top-[6px] before:w-1.5 before:h-1.5 before:bg-accent">
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