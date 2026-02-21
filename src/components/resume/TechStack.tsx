"use client"

const skills = [
  { category: "Languages", items: ["Java", "Kotlin", "SQL", "TypeScript"] },
  { category: "Backend", items: ["Spring Boot", "Ktor", "Kafka", "Redis", "PostgreSQL", "Oracle DB"] },
  { category: "Expertise", items: ["High-Concurrency", "Payment Systems", "Microservices", "System Architecture"] }
]

export function TechStack() {
  return (
    <section className="animate-slide-up [animation-delay:200ms] space-y-6">
      <h2 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground border-b border-black pb-2">Technical Core</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-black">
        {skills.map((skill, idx) => (
          <div key={idx} className="border-r border-b border-black p-4 space-y-3 hover:bg-black hover:text-white transition-all duration-300">
            <h3 className="text-[10px] font-black uppercase text-accent tracking-widest">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span key={i} className="text-sm font-bold">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
