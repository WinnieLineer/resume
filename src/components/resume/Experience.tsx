"use client"

import { Briefcase, Calendar } from "lucide-react"

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
      "Core Banking & FX Integration: Engineered enhancements to the core banking system to seamlessly interface with the foreign exchange (FX) module. Enabled secure, zero-touch automated processing for cross-border transactions, robustly supporting a 3.3x year-over-year surge in USD outward remittances in early 2026.",
      "Transaction Management: Maintained and optimized core transfer functionalities, achieving 99.9%+ high availability (requiring maintenance only biannually) and secure transaction processing for large-scale user operations."
    ],
    stack: "Java, Spring Boot, Oracle Database, MySQL, MSSQL"
  },
  {
    role: "Sabbatical & Professional Development",
    company: "Career Break",
    period: "Feb 2022 – Oct 2022",
    location: "Singapore & Taiwan",
    achievements: [
      "Immersed in Singapore's culture and diverse communities for two months, establishing a strong foundation and high adaptability for future relocation.",
      "Enrolled in advanced Computer Science coursework (Algorithms, Data Structures, Computer Networks) at National Chiao Tung University to deepen system design capabilities."
    ]
  },
  {
    role: "Software Engineer",
    company: "E.SUN Financial Holding Co., Ltd",
    period: "Apr 2020 – Nov 2021",
    location: "Taipei, Taiwan",
    achievements: [
      "Microservices Development: Designed and implemented microservices for core banking operations using Java (Spring Boot), Oracle SQL, and Vue.js.",
      "System Optimization: Delivered robust backend systems supporting over 150,000 daily active users, improving operational efficiency by 20% through optimized workflows.",
      "Cross-functional Delivery: Bridged technical and business requirements across cross-functional teams. Consistently delivered high-quality microservices at 2x the average team velocity, ensuring critical banking projects met tight deadlines."
    ],
    stack: "Java, Spring Boot, Oracle Database, REST APIs, Vue.js"
  },
  {
    role: "Engineer",
    company: "Compal",
    period: "Jul 2018 – Feb 2020",
    location: "Jiangsu, China",
    achievements: [
      "Developed and maintained supply chain management and procurement software solutions using Agile methodologies."
    ]
  }
]

export function Experience() {
  return (
    <section className="space-y-8 animate-fade-in-up [animation-delay:400ms]">
      <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
        <span className="w-8 h-px bg-primary/30"></span>
        EXPERIENCE
      </h2>
      
      <div className="relative border-l-2 border-primary/20 ml-3 pl-8 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group print-break-inside-avoid">
            {/* Timeline dot */}
            <div className="absolute -left-[41px] top-1.5 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
              <div className="w-2 h-2 bg-primary group-hover:bg-white rounded-full"></div>
            </div>
            
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-xl font-bold text-foreground">{exp.role} | <span className="text-primary">{exp.company}</span></h3>
                <div className="flex items-center gap-2 text-sm font-medium text-accent bg-accent/5 px-3 py-1 rounded-full whitespace-nowrap">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </div>
              </div>
              
              <div className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                {exp.location}
              </div>

              <ul className="list-disc list-outside ml-5 space-y-2 text-foreground/80 leading-relaxed">
                {exp.achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {exp.stack && (
                <div className="pt-2">
                  <p className="text-sm font-semibold text-primary/80">
                    <span className="text-accent uppercase text-[10px] tracking-widest mr-2 border border-accent/30 px-1.5 rounded">Stack:</span>
                    {exp.stack}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}