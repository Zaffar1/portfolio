
import { createFileRoute } from '@tanstack/react-router'
import { User, Code, GraduationCap, Languages } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="page-wrap py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="reveal visible">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden glass border-2 border-[var(--border-strong)]">
              <div className="w-full h-full bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center">
                <User size={120} className="text-[var(--accent-primary)] opacity-40" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[var(--accent-secondary)]/10 text-[var(--accent-secondary)]">
                  <Code size={24} />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-muted)] font-medium">Experience</p>
                  <p className="text-xl font-bold font-display">5+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal visible">
          <h2 className="island-kicker mb-4 text-[var(--accent-primary)]">About Zaffar Ali</h2>
          <h1 className="display-title text-5xl mb-8">
            Building scalable systems with <span className="gradient-text">robust</span> logic.
          </h1>
          <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              I am a dedicated PHP Laravel Developer based in Karachi, with a strong background in web application development. With a Bachelor's in Information Technology from the University of Sindh, I focus on delivering high-quality, scalable backend systems.
            </p>
            <p>
              My expertise lies in team collaboration, complex API integrations, and seamless deployment processes. I've successfully improved application speeds by 30% and deployed multiple high-traffic applications on AWS with zero downtime.
            </p>
            <p>
              I am passionate about exploring new technologies, continuous learning in modern backend architecture, and designing clean, efficient API endpoints that empower frontend experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                <GraduationCap size={24} />
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)] uppercase font-bold tracking-wider">Education</p>
                <p className="text-sm font-semibold">BS in Information Technology</p>
              </div>
            </div>
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]">
                <Languages size={24} />
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)] uppercase font-bold tracking-wider">Languages</p>
                <p className="text-sm font-semibold">English & Urdu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
