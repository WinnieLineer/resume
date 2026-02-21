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
      "Global Fiat Integration: Integrated Equals API and Bank Frick to enable multi-currency (GBP, EUR, USD) deposits and automated withdrawals across FPS, SEPA, and SWIFT networks. Reduced manual processing time to near zero.",
      "High-Performance Architecture: Engineered a Redis-based (Sorted Sets) reward hold system. Achieved sub-10s end-to-end processing with millisecond-level Redis queries for high-frequency frontend polling.",
      "Security & Compliance: Implemented automated bank account ownership validation via Volt API and established secure webhook architectures with payload signature and token verification.",
      "Platform Scalability: Designed a cache-optimized crypto address generation module to reduce DB load and enhanced TradeView backend for Contract for Difference (CFD) functionalities."
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
      "Core Banking & FX Integration: Engineered enhancements to core banking for FX module interface. Enabled secure automated processing for cross-border transactions, supporting 3.3x surge in USD outward remittances.",
      "Transaction Management: Maintained and optimized core transfer functionalities, achieving 99.9%+ high availability (maintenance only biannually) for large-scale user operations."
    ]
  },
  {
    role: "Sabbatical & Professional Development",
    company: "Career Break",
    url: "#",
    period: "Feb 2022 – Oct 2022",
    location: "Singapore & Taiwan",
    tech: "Algorithms, Data Structures, Computer Networks",
    achievements: [
      "Singapore Immersion: Immersed in Singapore's culture for two months, establishing a strong foundation and high adaptability for future relocation.",
      "Advanced Coursework: Enrolled in Computer Science coursework at National Chiao Tung University to deepen system design capabilities."
    ]
  },
  {
    role: "Software Engineer",
    company: "E.SUN Financial",
    url: "https://www.esunbank.com.tw",
    period: "Apr 2020 – Nov 2021",
    location: "Taipei, Taiwan",
    tech: "Java, Spring Boot, Oracle Database, REST APIs, Vue.js",
    achievements: [
      "Microservices Development: Designed and implemented microservices for core banking operations using Java (Spring Boot) and Vue.js.",
      "System Optimization: Delivered backend systems supporting 150k+ daily active users, improving operational efficiency by 20% through optimized workflows.",
      "Cross-functional Delivery: Delivered high-quality microservices at 2x the average team velocity, ensuring critical banking projects met tight deadlines."
    ]
  },
  {
    role: "Engineer",
    company: "Compal",
    url: "https://www.compal.com",
    period: "Jul 2018 – Feb 2020",
    location: "Jiangsu, China",
    tech: "Agile, Supply Chain Management, Procurement Software",
    achievements: [
      "Supply Chain Solutions: Developed and maintained supply chain management and procurement software solutions using Agile methodologies."
    ]
  }
]

export function Experience() {
  return (
    <section className="animate-slide-up [animation-delay:400ms] space-y-10">
      <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground border-b-2 border-black pb-2">Experience</h2>
      <div className="space-y-14">
        {experiences.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 relative group">
            <div className="space-y-2">
              <div className="text-sm font-black text-black uppercase tracking-tighter leading-none">
                {exp.period}
              </div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                {exp.location}
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl font-black tracking-tighter leading-none uppercase flex items-center gap-2">
                  {exp.role} 
                </h3>
                <a 
                  href={exp.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent font-black text-lg hover:underline inline-flex items-center gap-1 w-fit"
                >
                  {exp.company}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex items-center gap-2 py-1 px-3 bg-black text-white w-fit text-[10px] font-black uppercase tracking-widest">
                <Zap className="w-3 h-3 fill-accent text-accent" /> {exp.tech}
              </div>

              <ul className="space-y-3 text-[14px] leading-tight font-medium text-foreground/90 border-l-[4px] border-black pl-8 relative">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="relative before:content-[''] before:absolute before:-left-[36px] before:top-[7px] before:w-2 before:h-2 before:bg-accent">
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
