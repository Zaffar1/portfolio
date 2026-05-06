
import { Link } from '@tanstack/react-router'
import { Github, Linkedin } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-main)]/80 backdrop-blur-md">
      <nav className="page-wrap flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-[var(--text-primary)] hover:opacity-90 transition-opacity"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white text-xs font-black">
            ZA
          </div>
          <span className="font-display">Zaffar Ali</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="nav-link"
            activeProps={{ className: 'nav-link active' }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeProps={{ className: 'nav-link active' }}
          >
            About
          </Link>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/zaffar-ali-bhutto-816a69221"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <Link
            to="/"
            className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-sm"
          >
            Hire Me
          </Link>
        </div>
      </nav>
    </header>
  )
}
