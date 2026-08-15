import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const eventVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function CaseTimeline({ events }) {
  return (
    <motion.ol
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative border-l border-brass/30 pl-8"
    >
      {events.map((event, index) => (
        <motion.li key={`${event.when}-${index}`} variants={eventVariants} className="relative pb-8 last:pb-0">
          <span className="absolute top-1.5 -left-[2.35rem] h-3 w-3 rounded-full border-2 border-brass-bright bg-abyss" />
          <span className="inline-block rounded-sm border border-brass/40 bg-charcoal px-2 py-0.5 font-report text-xs tracking-widest text-brass-bright uppercase">
            {event.when}
          </span>
          <p className="mt-2 max-w-2xl text-parchment-dim/90">{event.text}</p>
        </motion.li>
      ))}
    </motion.ol>
  )
}

export default CaseTimeline
