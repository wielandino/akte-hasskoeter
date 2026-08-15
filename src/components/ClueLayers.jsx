import { motion } from 'framer-motion'
import { clueLayers } from '../data/gameplay'

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function ClueLayers() {
  return (
    <div className="rounded-sm border border-brass/25 bg-abyss/80 p-6 shadow-lg shadow-black/30 sm:p-8">
      <p className="font-report text-xs tracking-[0.25em] text-parchment-dim/50 uppercase">
        Zwei Hinweisebenen
      </p>
      <h3 className="mt-2 text-2xl text-parchment md:text-3xl">Zwei Fährten, eine Wahrheit</h3>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="relative overflow-hidden rounded-sm border border-blood/50 bg-blood/10 p-5">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-display text-lg text-parchment">{clueLayers.visible.title}</h4>
            <span className="stamp shrink-0 -rotate-6 px-2 py-0.5 text-[0.6rem] tracking-widest uppercase">
              Falsche Fährte
            </span>
          </div>
          <p className="mt-1 font-report text-xs text-blood-bright/80 italic">
            {clueLayers.visible.tagline}
          </p>
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 space-y-2"
          >
            {clueLayers.visible.items.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                className="flex items-start gap-2 text-sm text-parchment-dim/80 line-through decoration-blood-bright/60"
              >
                <span aria-hidden="true" className="mt-0.5 text-blood-bright">
                  ✕
                </span>
                <span className="no-underline">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="relative overflow-hidden rounded-sm border border-brass/40 bg-charcoal/80 p-5">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-display text-lg text-parchment">{clueLayers.hidden.title}</h4>
            <span className="stamp shrink-0 rotate-3 border-brass-bright px-2 py-0.5 text-[0.6rem] text-brass-bright tracking-widest uppercase">
              Spur
            </span>
          </div>
          <p className="mt-1 font-report text-xs text-brass-bright/70 italic">
            {clueLayers.hidden.tagline}
          </p>
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 space-y-2"
          >
            {clueLayers.hidden.items.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                className="flex items-start gap-2 text-sm text-parchment/90"
              >
                <span aria-hidden="true" className="mt-0.5 text-brass-bright">
                  ✓
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  )
}

export default ClueLayers
