"use client"

import { Badge } from "@/components/ui/badge"

const skills = [
  {
    category: "Languages",
    items: ["Java", "Kotlin", "SQL"]
  },
  {
    category: "Frameworks & Tools",
    items: ["Spring Boot", "Ktor", "Koin", "Redis", "PostgreSQL", "Oracle Database", "Vue.js", "Flyway", "Kafka"]
  },
  {
    category: "Domain Knowledge",
    items: ["Payment Gateways (SWIFT/SEPA)", "High-Concurrency Architecture", "Core Banking & FX Integration", "Crypto-to-Fiat Systems"]
  }
]

export function TechStack() {
  return (
    <section className="space-y-4 animate-fade-in-up [animation-delay:200ms]">
      <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
        <span className="w-8 h-px bg-primary/30"></span>
        TECH STACK & SKILLS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <div key={idx} className="bg-white/40 p-5 rounded-lg border border-primary/5 hover:border-primary/20 transition-all shadow-sm">
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors cursor-default border-none">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}