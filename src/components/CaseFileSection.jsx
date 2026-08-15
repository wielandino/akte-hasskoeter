import { motion } from 'framer-motion'
import { acts } from '../data/acts'
import ActFolder from './ActFolder'
import ActProse from './ActProse'
import SuspectDossierCard from './SuspectDossierCard'
import CaseTimeline from './CaseTimeline'

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function CaseFileSection() {
  return (
    <section id="ermittlungsakte" className="relative mx-auto max-w-4xl scroll-mt-20 px-6 py-24">
      <div className="mb-14 text-center">
        <p className="font-display text-sm tracking-[0.3em] text-blood-bright/80 uppercase">
          Fallakte Nr. 1892-B
        </p>
        <h2 className="mt-3 text-4xl text-parchment md:text-5xl">Die Ermittlungsakte</h2>
        <p className="mx-auto mt-4 max-w-2xl text-parchment-dim/80">
          Sechs Vorgänge, chronologisch abgeheftet. Alles, was Rudi Rotzmüller zusammengetragen
          hat - und einiges, das ihm entgangen ist.
        </p>
      </div>

      {acts.map((act) => (
        <ActFolder
          key={act.id}
          id={`akte-${act.roman}`}
          roman={act.roman}
          title={act.title}
          subtitle={act.subtitle}
        >
          {act.kind === 'prose' && <ActProse paragraphs={act.paragraphs} />}

          {act.kind === 'dossier' && (
            <motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {act.suspects.map((suspect) => (
                <SuspectDossierCard key={suspect.name} suspect={suspect} />
              ))}
            </motion.div>
          )}

          {act.kind === 'timeline' && <CaseTimeline events={act.events} />}
        </ActFolder>
      ))}
    </section>
  )
}

export default CaseFileSection
