import { motion } from 'framer-motion'
import GameLoopWheel from './GameLoopWheel'
import NotebookPanel from './NotebookPanel'
import ClueLayers from './ClueLayers'
import EndingStamp from './EndingStamp'
import { openingTutorial } from '../data/gameplay'

function GameplaySection() {
  return (
    <section id="gameplay-mechaniken" className="relative overflow-hidden scroll-mt-20 py-24">
      <div className="bg-corkgrid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <p className="font-display text-sm tracking-[0.3em] text-blood-bright/80 uppercase">
            Ermittlungsmethode
          </p>
          <h2 className="mt-3 text-4xl text-parchment md:text-5xl">Gameplay & Mechaniken</h2>
          <p className="mx-auto mt-4 max-w-2xl text-parchment-dim/80">
            Kein linearer Fall, sondern ein Loop aus freier Erkundung, Notizbuch und Konfrontation
            - bei dem der Spieler am Ende mehr weiß als Rudi Rotzmüller je verstehen wird.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-8"
        >
          <GameLoopWheel />
        </motion.div>

        <p className="mx-auto mb-16 max-w-xl text-center text-sm text-parchment-dim/60 italic">
          {openingTutorial}
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <NotebookPanel />
          <ClueLayers />
        </div>

        <div className="mt-16">
          <EndingStamp />
        </div>
      </div>
    </section>
  )
}

export default GameplaySection
