
import { createFileRoute } from '@tanstack/react-router'
import { Code2, Server, Globe, Database, Cpu, ArrowUpRight, ExternalLink, Github, Mail, Linkedin, Terminal, Layout, Cloud } from 'lucide-react'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const revealRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="page-wrap text-center z-10">
          <div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
            </span>
            Based in Karachi, Pakistan
          </div>
          <h1 className="display-title text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            Hi, I'm <span className="gradient-text">Zaffar Ali</span> <br />
            Backend Developer
          </h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Dedicated PHP Laravel Developer specializing in building robust web applications, high-performance APIs, and secure AWS deployments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              Selected Projects <ArrowUpRight className="ml-2" size={18} />
            </a>
            <a href="mailto:alizafarb41@gmail.com" className="btn-secondary w-full sm:w-auto">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Key Achievements Stats */}
      <section className="reveal pb-20" ref={addToRefs}>
        <div className="page-wrap">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatCard label="Speed Efficiency" value="+30%" sub="Optimized Code" />
            <StatCard label="RESTful APIs" value="10+" sub="Secure Endpoints" />
            <StatCard label="Engagement" value="+25%" sub="User Interaction" />
            <StatCard label="AWS Deploy" value="5" sub="Zero Downtime" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="reveal bg-[var(--bg-surface)]" ref={addToRefs}>
        <div className="page-wrap">
          <div className="text-center mb-16">
            <h2 className="display-title text-4xl mb-4">Technical Skills</h2>
            <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
              Expertise in modern backend technologies and cloud infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard 
              icon={<Terminal size={24} />} 
              title="Backend Core" 
              skills={['PHP (Laravel)', 'Node.js', 'Express', 'APIs Integration']} 
            />
            <SkillCard 
              icon={<Layout size={24} />} 
              title="Frontend" 
              skills={['React JS', 'Tailwind CSS', 'TanStack', 'Vue.js', 'JavaScript']} 
            />
            <SkillCard 
              icon={<Database size={24} />} 
              title="Database & VCS" 
              skills={['MySQL / PostgreSQL', 'Git / GitHub', 'Version Control']} 
            />
            <SkillCard 
              icon={<Cloud size={24} />} 
              title="DevOps" 
              skills={['AWS Deployment', 'Linux Server']} 
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="reveal" ref={addToRefs}>
        <div className="page-wrap">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="display-title text-4xl mb-4">Featured Projects</h2>
              <p className="text-[var(--text-muted)] max-w-xl">
                A selection of complex backend-driven applications focusing on scalability, security, and user experience.
              </p>
            </div>
          </div>

          <div className="grid-responsive">
            <ProjectCard 
              title="Behtereen (OLX Clone)" 
              desc="A high-traffic marketplace application featuring classified listings, real-time messaging, and complex user interactions."
              tags={['Laravel', 'MySQL', 'Real-time', 'Classifieds']}
              link="https://staging.behtereen.pk/"
            />
            <ProjectCard 
              title="Angelz" 
              desc="Platform connecting organizations with volunteers to drive humanitarian missions and community support."
              tags={['PHP', 'API Integration', 'Volunteer Management']}
              link="https://splitarts.net/angel-website"
            />
            <ProjectCard 
              title="Kiohana" 
              desc="A sensitive and professional platform for memorial management, funeral services, and obituary publishing."
              tags={['Laravel', 'CMS', 'Digital Memorials']}
              link="https://kiohana.com"
            />
            <ProjectCard 
              title="DocDash" 
              desc="Advanced healthcare management dashboard for streamlined patient scheduling and administrative workflows."
              tags={['Laravel', 'API', 'Healthcare Tech']}
              link="#"
            />
            <ProjectCard 
              title="D9Digital" 
              desc="Digital service delivery platform with secure API endpoints and high-performance backend architecture."
              tags={['Node.js', 'Express', 'Security']}
              link="#"
            />
            <ProjectCard 
              title="Belive Hypnosis" 
              desc="E-commerce and session booking platform with integrated payment gateways and user authentication."
              tags={['Laravel', 'Payments', 'MySQL']}
              link="#"
            />
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-[var(--text-muted)] text-sm font-medium">
            <span>More projects:</span>
            {['SALT', 'SUPPORTSNAP', 'GREENBOOM', 'GEAR PACK TRACK', 'INTERNET PROVIDER'].map(p => (
              <span key={p} className="px-3 py-1 glass rounded-full">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="reveal bg-[var(--bg-surface)]" ref={addToRefs}>
        <div className="page-wrap">
          <div className="text-center mb-16">
            <h2 className="display-title text-4xl mb-4">Work Experience</h2>
            <p className="text-[var(--text-muted)]">Building high-performance applications since 2021.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ExperienceItem 
              role="Full Stack Developer" 
              company="Split Arts Technologies" 
              period="04/2025 - Present" 
              desc="Leading full-stack development initiatives, building scalable web applications, and implementing modern architectural patterns for high-performance systems."
            />
            <ExperienceItem 
              role="PHP Laravel Developer" 
              company="Virtual Reality Creators (VRC)" 
              period="05/2022 - 03/2025" 
              desc="Developed web applications using Laravel. Created secure RESTful APIs, collaborated on responsive designs, and managed AWS deployments with zero downtime."
            />
            <ExperienceItem 
              role="PHP Laravel Developer" 
              company="Eureka Web Solutions" 
              period="02/2022 - 04/2022" 
              desc="Collaborated as a team member to fix critical issues and implement feedback for various client projects."
            />
            <ExperienceItem 
              role="PHP Internee" 
              company="Hidaya Institute of Science & Technology" 
              period="02/2021 - 12/2021" 
              desc="Gained valuable hands-on experience in building web applications and enhanced fundamental web development skills."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="reveal" ref={addToRefs}>
        <div className="page-wrap">
          <div className="glass-card p-10 md:p-20 text-center">
            <h2 className="display-title text-5xl mb-6">Let's build something <span className="gradient-text">robust</span> together.</h2>
            <p className="text-[var(--text-secondary)] text-xl mb-10 max-w-2xl mx-auto">
              Currently available for backend developer roles and interesting projects. Feel free to reach out via email or LinkedIn.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:alizafarb41@gmail.com" className="btn-primary">
                Send an Email <Mail className="ml-2" size={18} />
              </a>
              <a href="https://www.linkedin.com/in/zaffar-ali-bhutto-816a69221" target="_blank" rel="noreferrer" className="btn-secondary">
                LinkedIn <Linkedin className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function StatCard({ label, value, sub }: { label: string, value: string, sub: string }) {
  return (
    <div className="glass-card p-6 text-center">
      <p className="text-[var(--text-muted)] text-xs font-bold uppercase tracking-wider mb-2">{label}</p>
      <p className="text-4xl font-bold gradient-text mb-1">{value}</p>
      <p className="text-[var(--text-secondary)] text-sm font-medium">{sub}</p>
    </div>
  )
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="glass-card p-8 flex flex-col items-center text-center">
      <div className="p-4 rounded-2xl bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-display mb-4 text-[var(--text-primary)]">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-[var(--text-muted)] text-sm font-medium">{skill}</li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({ title, desc, tags, link }: { title: string, desc: string, tags: string[], link: string }) {
  return (
    <div className="glass-card overflow-hidden group">
      <div className="h-48 bg-gradient-to-br from-[var(--bg-surface-elevated)] to-[var(--bg-main)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
          <Code2 size={80} />
        </div>
      </div>
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 rounded-md bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-[10px] font-bold uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold font-display mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2">
          {title} <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="text-[var(--text-muted)] text-sm mb-6 line-clamp-2">
          {desc}
        </p>
        <a href={link} className="inline-flex items-center text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
          Learn More <ArrowUpRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  )
}

function ExperienceItem({ role, company, period, desc }: { role: string, company: string, period: string, desc: string }) {
  return (
    <div className="relative pl-8 pb-12 border-l border-[var(--border-subtle)] last:pb-0 last:border-0 ml-4">
      <div className="absolute left-[-5px] top-0 h-2.5 w-2.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_10px_var(--accent-glow)]" />
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
        <h3 className="text-xl font-bold text-[var(--text-primary)]">{role}</h3>
        <span className="text-sm font-semibold text-[var(--accent-primary)] px-3 py-1 rounded-full glass border border-[var(--accent-primary)]/20">
          {period}
        </span>
      </div>
      <p className="text-lg font-medium text-[var(--text-secondary)] mb-4">{company}</p>
      <p className="text-[var(--text-muted)] leading-relaxed">
        {desc}
      </p>
    </div>
  )
}
