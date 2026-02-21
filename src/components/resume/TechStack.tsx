"use client"

import { Badge } from "@/components/ui/badge"

const skills = [
  {
    category: "Languages",
    items: ["Java", "Kotlin", "SQL", "TypeScript"]
  },
  {
    category: "Backend Ecosystem",
    items: ["Spring Boot", "Ktor", "Kafka", "Redis", "PostgreSQL", "Oracle DB", "Flyway"]
  },
  {
    category: "Expertise",
    items: ["High-Concurrency", "Payment Systems", "Microservices", "System Architecture"]
  }
]

export function TechStack() {
  return (
    <section className="space-y-6 animate-fade-in-up [animation-delay:200ms]">
      <h2 className="text-2xl font-black text-primary tracking-tighter flex items-center gap-4">
        CORE EXPERTISE
        <div className="h-px flex-1 bg-border"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-xs font-black text-accent uppercase tracking-[0.2em]">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <Badge key={i} variant="secondary" className="bg-primary/5 text-primary border-none font-bold px-3 py-1 hover:bg-primary hover:text-white transition-all cursor-default">
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