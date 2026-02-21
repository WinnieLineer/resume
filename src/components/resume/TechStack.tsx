"use client"

import { Code2, Server, Globe2 } from "lucide-react"

const skills = [
  { 
    category: "Languages", 
    icon: <Code2 className="w-3 h-3" />,
    items: ["Java", "Kotlin", "SQL", "TypeScript"] 
  },
  { 
    category: "Frameworks & Tools", 
    icon: <Server className="w-3 h-3" />,
    items: ["Spring Boot", "Ktor", "Redis", "PostgreSQL", "Oracle DB", "Kafka", "Flyway"] 
  },
  { 
    category: "Domain Expertise", 
    icon: <Globe2 className="w-3 h-3" />,
    items: ["SWIFT/SEPA", "High-Concurrency", "Core Banking", "FX Integration"] 
  }
]

export function TechStack() {
  return (
    <section className="space-y-2">
      <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground border-b border-black pb-1">Technical Core</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black">
        {skills.map((skill, idx) => (
          <div key={idx} className="border-r last:border-r-0 border-black p-2 md:p-3 hover:bg-black hover:text-white transition-all duration-300 group">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-accent group-hover:text-white">{skill.icon}</span>
              <h3 className="text-[10px] font-black uppercase tracking-wider">{skill.category}</h3>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-0.5">
              {skill.items.map((item, i) => (
                <span key={i} className="text-[11px] font-bold tracking-tight opacity-90">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}