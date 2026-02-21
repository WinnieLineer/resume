"use client"

import { Code2, Server, Globe2 } from "lucide-react"

const skills = [
  { 
    category: "Languages", 
    icon: <Code2 className="w-4 h-4" />,
    items: ["Java", "Kotlin", "SQL", "TypeScript"] 
  },
  { 
    category: "Frameworks & Tools", 
    icon: <Server className="w-4 h-4" />,
    items: ["Spring Boot", "Ktor", "Koin", "Redis", "PostgreSQL", "Oracle DB", "Vue.js", "Flyway", "Kafka"] 
  },
  { 
    category: "Domain Expertise", 
    icon: <Globe2 className="w-4 h-4" />,
    items: ["Payment Gateways (SWIFT/SEPA)", "High-Concurrency", "Core Banking & FX", "Crypto-to-Fiat Systems"] 
  }
]

export function TechStack() {
  return (
    <section className="animate-slide-up [animation-delay:200ms] space-y-6">
      <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground border-b-2 border-black pb-2">Technical Core</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-black">
        {skills.map((skill, idx) => (
          <div key={idx} className="border-r-2 last:border-r-0 border-black p-6 hover:bg-black hover:text-white transition-all duration-500 group">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent group-hover:text-white transition-colors">{skill.icon}</span>
              <h3 className="text-[11px] font-black uppercase tracking-widest">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {skill.items.map((item, i) => (
                <span key={i} className="text-sm font-bold tracking-tight opacity-80 group-hover:opacity-100">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
