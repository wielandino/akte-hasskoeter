import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useActiveSection from '../hooks/useActiveSection'

const navLinks = [
  { id: 'hero', label: 'Die Akte' },
  { id: 'charaktere', label: 'Verdächtige' },
  { id: 'ermittlungsakte', label: 'Ermittlungsakte' },
  { id: 'gameplay-mechaniken', label: 'Gameplay' },
]

const sectionIds = navLinks.map((link) => link.id)

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useActiveSection(sectionIds)

  const handleNavigate = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brass/20 bg-void/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={(event) => handleNavigate(event, 'hero')}
          className="font-display text-sm tracking-[0.2em] text-brass-bright uppercase"
        >
          Hassköter
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(event) => handleNavigate(event, link.id)}
                className={`relative font-display text-xs tracking-[0.2em] uppercase transition-colors ${
                  activeId === link.id
                    ? 'text-brass-bright'
                    : 'text-parchment-dim/80 hover:text-parchment'
                }`}
              >
                {link.label}
                {activeId === link.id && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute -bottom-2 left-0 h-px w-full bg-blood-bright"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-brass-bright transition-transform ${isMenuOpen ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-5 bg-brass-bright transition-transform ${isMenuOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-brass/20 bg-void/95 md:hidden"
          >
            {navLinks.map((link) => (
              <li key={link.id} className="border-b border-brass/10 last:border-none">
                <a
                  href={`#${link.id}`}
                  onClick={(event) => handleNavigate(event, link.id)}
                  className={`block px-6 py-4 font-display text-xs tracking-[0.2em] uppercase ${
                    activeId === link.id ? 'text-brass-bright' : 'text-parchment-dim/80'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
