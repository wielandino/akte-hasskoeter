import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { acts } from '../data/acts'
import useActiveSection from '../hooks/useActiveSection'

const akteIds = acts.map((act) => `akte-${act.roman}`)

function CaseFileSideNav() {
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const activeId = useActiveSection(akteIds)

  useEffect(() => {
    const section = document.getElementById('ermittlungsakte')
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(entry.isIntersecting),
      { rootMargin: '-10% 0px -10% 0px', threshold: 0 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleNavigate = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isSectionVisible && (
        <motion.nav
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          aria-label="Akten-Navigation"
          className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
        >
          {acts.map((act) => {
            const id = `akte-${act.roman}`
            const isActive = activeId === id

            return (
              <a
                key={id}
                href={`#${id}`}
                title={act.title}
                onClick={(event) => handleNavigate(event, id)}
                className={`flex h-9 w-9 items-center justify-center rounded-sm border font-report text-sm transition-colors ${
                  isActive
                    ? 'border-blood-bright bg-blood/20 text-blood-bright'
                    : 'border-brass/30 text-parchment-dim/70 hover:border-brass hover:text-brass-bright'
                }`}
              >
                {act.roman}
              </a>
            )
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default CaseFileSideNav
