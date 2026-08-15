import { motion } from 'framer-motion'

const folderVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function ActFolder({ id, roman, title, subtitle, children }) {
  return (
    <motion.article
      id={id}
      variants={folderVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative mb-16 scroll-mt-28 last:mb-0"
    >
      <div className="pointer-events-none absolute -top-6 left-6 flex h-12 w-12 -rotate-6 items-center justify-center rounded-sm border border-brass/60 bg-abyss font-report text-lg text-brass-bright shadow-lg shadow-black/40 sm:-left-2">
        {roman}
      </div>

      <div className="rounded-sm border border-brass/20 bg-abyss/80 p-6 pt-10 shadow-lg shadow-black/30 sm:p-8 sm:pt-10">
        <p className="font-report text-xs tracking-[0.25em] text-parchment-dim/50 uppercase">
          Akte {roman} · {subtitle}
        </p>
        <h3 className="mt-2 text-3xl text-parchment md:text-4xl">{title}</h3>
        <div className="mt-6 h-px w-full bg-gradient-to-r from-brass/50 via-brass/10 to-transparent" />

        <div className="mt-6">{children}</div>
      </div>
    </motion.article>
  )
}

export default ActFolder
