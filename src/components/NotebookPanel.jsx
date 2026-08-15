import { motion } from 'framer-motion'
import { notebookTabs, notebookTotal, vorlegenText } from '../data/gameplay'

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const tilt = [-2, 1.5, -1, 2, -1.5, 1, -2.5]
const maxTabTotal = Math.max(...notebookTabs.map((tab) => tab.total))

function NotebookPanel() {
  return (
    <div className="relative rounded-sm border border-brass/25 bg-abyss/80 p-6 shadow-lg shadow-black/30 sm:p-8">
      <div className="pointer-events-none absolute top-6 -right-2 bottom-6 hidden w-1 rounded-full bg-gradient-to-b from-transparent via-brass/25 to-transparent sm:block" />

      <p className="font-report text-xs tracking-[0.25em] text-parchment-dim/50 uppercase">
        Das Notizbuch-System
      </p>
      <h3 className="mt-2 text-2xl text-parchment md:text-3xl">Sieben Reiter, ein Fall</h3>
      <p className="mt-4 text-sm leading-relaxed text-parchment-dim/80">
        Fortschrittsanzeige, Nachschlagewerk und Wegweiser in einem. Jeder gefundene Hinweis wird
        automatisch der passenden Person zugeordnet - ungenutzte Funde bleiben sichtbar markiert.
      </p>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 space-y-3"
      >
        {notebookTabs.map((tab, index) => (
          <motion.li
            key={tab.name}
            variants={rowVariants}
            style={{ transform: `rotate(${tilt[index % tilt.length]}deg)` }}
            className="rounded-sm border border-brass/20 bg-charcoal/80 px-3 py-2"
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-display text-sm text-parchment sm:text-base">
                {tab.name}
                {tab.note && (
                  <span className="ml-2 font-report text-[0.6rem] tracking-widest text-parchment-dim/50 uppercase">
                    {tab.note}
                  </span>
                )}
              </span>
              <span className="shrink-0 font-report text-xs text-brass-bright/80">0/{tab.total}</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-void">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(tab.total / maxTabTotal) * 100}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 * index }}
                className="h-full rounded-full bg-gradient-to-r from-brass to-brass-bright"
                style={{ maxWidth: '100%' }}
              />
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mt-6 flex items-center justify-between border-t border-brass/15 pt-4">
        <span className="font-report text-[0.65rem] tracking-[0.2em] text-parchment-dim/50 uppercase">
          Gesamtfortschritt
        </span>
        <span className="stamp -rotate-3 px-2 py-0.5 text-xs">0 / {notebookTotal}</span>
      </div>

      <p className="mt-6 border-t border-brass/15 pt-4 text-sm leading-relaxed text-parchment-dim/70 italic">
        {vorlegenText}
      </p>
    </div>
  )
}

export default NotebookPanel
