
"use client"

import { ExternalLink, Zap } from "lucide-react"

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "BTSE",
    url: "https://www.btse.com",
    period: "Apr 2025 – Present",
    location: "Taipei, Taiwan",
    tech: "Kotlin, Ktor, PostgreSQL, Kafka, Redis",
    achievements: [
      "Global Fiat Integration: Integrated Equals API and Bank Frick to enable multi-currency (GBP, EUR, USD) deposits and automated withdrawals across FPS, SEPA, and SWIFT networks. Reduced manual processing time to near zero through end-to-end API automation.",
      "High-Performance Architecture: Engineered a Redis-based (Sorted Sets) reward hold system to manage time-bound withdrawal limits. Achieved sub-10 second end-to-end processing with millisecond-level Redis queries, ensuring seamless high-frequency frontend polling.",
      "Security & Compliance: Implemented automated bank account ownership validation via Volt API and established secure webhook architectures with payload signature and token verification.",
      "Platform Scalability: Designed a cache-optimized crypto address generation module to reduce database load and enhanced the TradeView backend to support Contract for Difference (CFD) functionalities."
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
      "Core Banking & FX Integration: Engineered enhancements to the core banking system to seamlessly interface with the foreign exchange (FX) module. Enabled secure, zero-touch automated processing for cross-border transactions, robustly supporting a 3.3x year-over-year surge in USD outward remittances in early 2026.",
      "Transaction Management: Maintained and optimized core transfer functionalities, achieving 99.9%+ high availability (requiring maintenance only biannually) and secure transaction processing for large-scale user operations."
    ]
  },
  {
    role: "Sabbatical & Professional Development",
    company: "Career Break",
    url: "",
    period: "Feb 2022 – Oct 2022",
    location: "Singapore & Taiwan",
    tech: "",
    achievements: [
      "Singapore Immersion: Immersed in Singapore's culture and diverse communities for two months, establishing a strong foundation and high adaptability for future relocation.",
      "Advanced Coursework: Enrolled in advanced Computer Science coursework (Algorithms, Data Structures, Computer Networks) at National Chiao Tung University to deepen system design capabilities."
    ]
  },
  {
    role: "Software Engineer",
    company: "E.SUN Financial Holding Co., Ltd",
    url: "https://www.esunbank.com.tw",
    period: "Apr 2020 – Nov 2021",
    location: "Taipei, Taiwan",
    tech: "Java, Spring Boot, Oracle Database, REST APIs, Vue.js",
    achievements: [
      "Microservices Development: Designed and implemented microservices for core banking operations using Java (Spring Boot), Oracle SQL, and Vue.js.",
      "System Optimization: Delivered robust backend systems supporting over 150,000 daily active users, improving operational efficiency by 20% through optimized workflows.",
      "Cross-functional Delivery: Bridged technical and business requirements across cross-functional teams. Consistently delivered high-quality microservices at 2x the average team velocity, ensuring critical banking projects met tight deadlines."
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
      "Supply Chain Solutions: Developed and maintained supply chain management and procurement software solutions using Agile methodologies."
    ]
  }
]

export function Experience() {
  return (
    <section className="space-y-4">
      <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground border-b border-black pb-1">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-item grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-6 gap-y-1 page-break-inside-avoid">
            <div className="space-y-0.5">
              <div className="text-[11px] font-black text-black uppercase tracking-tighter">
                {exp.period}
              </div>
              <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                {exp.location}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-[17px] font-black tracking-tighter leading-none uppercase">
                  {exp.role} 
                </h3>
                <div className="flex items-center gap-3">
                  {exp.url ? (
                    <a 
                      href={exp.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent font-black text-[12px] hover:underline inline-flex items-center gap-1"
                    >
                      {exp.company}
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  ) : (
                    <span className="text-black font-black text-[12px]">{exp.company}</span>
                  )}
                  {exp.tech && (
                    <div className="flex items-center gap-1 px-1.5 py-0.5 bg-black text-white text-[9px] font-black uppercase tracking-widest">
                      <Zap className="w-2.5 h-2.5 fill-accent text-accent" /> {exp.tech}
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-1.5 text-[12px] leading-[1.35] font-medium text-foreground/90 border-l border-black/20 pl-4">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="relative before:content-[''] before:absolute before:-left-[18.5px] before:top-[7px] before:w-1.5 before:h-1.5 before:bg-accent">
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
