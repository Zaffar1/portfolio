
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-12">
      <div className="page-wrap">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-xl font-bold font-display tracking-tight text-[var(--text-primary)]">
              Zaffar Ali
            </h3>
            <p className="text-sm text-[var(--text-muted)] max-w-xs text-center md:text-left">
              Backend Developer specializing in PHP Laravel, Node.js, and scalable API architecture.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 glass rounded-full text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/zaffar-ali-bhutto-816a69221" target="_blank" rel="noreferrer" className="p-2 glass rounded-full text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:alizafarb41@gmail.com" className="p-2 glass rounded-full text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-[var(--text-muted)]">
              &copy; {year} Zaffar Ali. Karachi, Pakistan.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
