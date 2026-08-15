import { useState } from 'react'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function SuspectDossierCard({ suspect }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.button
      type="button"
      variants={cardVariants}
      aria-pressed={flipped}
      onClick={() => setFlipped((current) => !current)}
      className="group relative h-56 w-full cursor-pointer text-left [perspective:1200px] sm:h-52"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        <div className="backface-hidden absolute inset-0 flex flex-col justify-between rounded-sm border border-blood/50 bg-abyss p-5 shadow-lg shadow-black/40">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-display text-lg text-parchment">{suspect.name}</h4>
            <span className="stamp shrink-0 -rotate-6 px-2 py-0.5 text-[0.6rem] tracking-widest uppercase">
              Verdacht
            </span>
          </div>
          <p className="font-report text-sm leading-relaxed text-parchment-dim/90">
            {suspect.publicSuspicion}
          </p>
          <p className="font-report text-[0.65rem] tracking-[0.2em] text-brass-bright/60 uppercase">
            Zum Umdrehen klicken
          </p>
        </div>

        <div
          className="backface-hidden absolute inset-0 flex flex-col justify-between rounded-sm border border-brass/50 bg-charcoal p-5 shadow-lg shadow-black/40"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-display text-lg text-parchment">{suspect.name}</h4>
            <span className="stamp shrink-0 rotate-3 border-brass-bright px-2 py-0.5 text-[0.6rem] text-brass-bright tracking-widest uppercase">
              Akte
            </span>
          </div>
          <p className="font-report text-sm leading-relaxed text-parchment">{suspect.truth}</p>
          <p className="font-report text-[0.65rem] tracking-[0.2em] text-parchment-dim/50 uppercase">
            Wahre Geschichte
          </p>
        </div>
      </motion.div>
    </motion.button>
  )
}

export default SuspectDossierCard
