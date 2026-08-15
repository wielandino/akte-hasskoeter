import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false)
      return
    }

    const handleLoad = () => setIsLoading(false)
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-noise fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="bg-vignette pointer-events-none absolute inset-0" />

          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative font-display text-xs tracking-[0.45em] text-blood-bright/80 uppercase md:text-sm"
          >
            Die Ermittlung beginnt
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-shadow-blood relative mt-4 text-3xl text-parchment sm:text-4xl"
          >
            Die Akte Hassköter
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-10 h-px w-40 overflow-hidden bg-charcoal"
          >
            <motion.div
              className="h-full w-1/3 bg-brass-bright"
              animate={{ x: ['-100%', '220%'] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="relative mt-4 font-report text-xs tracking-[0.2em] text-parchment-dim/70 uppercase"
          >
            Akte wird geöffnet …
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
