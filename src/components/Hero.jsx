import { motion } from 'framer-motion'

function Hero() {
  const handleScrollToCharacters = (event) => {
    event.preventDefault()
    document.getElementById('charaktere')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] scroll-mt-20 flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="bg-noise pointer-events-none absolute inset-0" />
      <div className="bg-vignette pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-abyss via-void to-void" />

      <motion.p
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative font-display text-xs tracking-[0.45em] text-blood-bright/80 uppercase md:text-sm"
      >
        Ein Point &amp; Click Adventure
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        className="text-shadow-blood relative mt-4 text-5xl text-parchment sm:text-6xl md:text-8xl"
      >
        Die Akte Hassköter
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative mt-8 max-w-xl text-lg text-parchment-dim/90 italic md:text-xl"
      >
        Ein toter Patriarch. Ein zwielichtiges Anwesen. Und eine Familie, die trauert, wie sie
        alles tut - standesgemäß übertrieben.
      </motion.p>

      <motion.a
        href="#charaktere"
        onClick={handleScrollToCharacters}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="relative mt-12 inline-flex items-center gap-2 rounded-sm border border-brass/50 px-6 py-3 font-display text-sm tracking-[0.2em] text-brass-bright uppercase transition-colors hover:border-brass hover:bg-brass/10"
      >
        Die Verdächtigen kennenlernen
        <span aria-hidden="true">↓</span>
      </motion.a>
    </section>
  )
}

export default Hero
