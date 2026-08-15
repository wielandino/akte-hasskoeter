import { motion } from 'framer-motion'
import { endingNote } from '../data/gameplay'

function EndingStamp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative mx-auto max-w-2xl rounded-sm border border-brass/20 bg-abyss/80 p-8 text-center shadow-lg shadow-black/30 sm:p-10"
    >
      <span className="stamp inline-block -rotate-3 px-4 py-1.5 text-sm tracking-[0.2em] uppercase sm:text-base">
        Keine kanonische Auflösung
      </span>
      <p className="mt-6 text-lg leading-relaxed text-parchment-dim/90 italic md:text-xl">
        {endingNote}
      </p>
    </motion.div>
  )
}

export default EndingStamp
