import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true

      window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 400)
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Nach oben scrollen"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-sm border border-brass/30 bg-abyss/90 text-brass shadow-lg shadow-black/40 transition-colors hover:border-brass-bright hover:text-brass-bright"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ↑
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTopButton
