import { useState } from 'react'
import { motion } from 'framer-motion'
import { loopSteps, loopClosing } from '../data/gameplay'

const RADIUS = 42
const CENTER = 50

function nodePosition(index, total) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2
  return {
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  }
}

const wheelVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

function GameLoopWheel() {
  const [active, setActive] = useState(null)

  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="var(--color-blood-bright)"
          strokeOpacity="0.55"
          strokeWidth="0.4"
          strokeDasharray="2.5 2.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
        />
        {loopSteps.map((step, index) => {
          const pos = nodePosition(index, loopSteps.length)
          return (
            <line
              key={`spoke-${step.id}`}
              x1={CENTER}
              y1={CENTER}
              x2={pos.x}
              y2={pos.y}
              stroke="var(--color-brass)"
              strokeOpacity={active === step.id ? '0.5' : '0.12'}
              strokeWidth="0.3"
              className="transition-[stroke-opacity] duration-300"
            />
          )
        })}
      </svg>

      <motion.div
        variants={wheelVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="absolute inset-0"
      >
        {loopSteps.map((step, index) => {
          const pos = nodePosition(index, loopSteps.length)
          const isActive = active === step.id
          return (
            <motion.button
              key={step.id}
              type="button"
              variants={nodeVariants}
              onMouseEnter={() => setActive(step.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(step.id)}
              onBlur={() => setActive(null)}
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            >
              <span
                className={`stamp flex h-11 w-11 bg-abyss items-center justify-center rounded-full font-report text-sm transition-transform duration-300 sm:h-14 sm:w-14 sm:text-base ${
                  isActive ? 'scale-110' : ''
                }`}
              >
                {step.id}
              </span>
              <span className="absolute top-full left-1/2 mt-2 w-max max-w-[9rem] -translate-x-1/2 text-center font-display text-[0.65rem] tracking-[0.1em] text-parchment uppercase sm:text-xs">
                {step.title}
              </span>

              <span
                role="tooltip"
                className={`absolute bottom-full left-1/2 z-20 mb-3 w-48 -translate-x-1/2 rounded-sm border border-brass/40 bg-charcoal px-3 py-2 font-report text-xs leading-relaxed text-parchment-dim/90 shadow-lg shadow-black/50 transition-opacity duration-200 ${
                  isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                {step.text}
              </span>
            </motion.button>
          )
        })}

        <div className="absolute top-1/2 left-1/2 w-40 -translate-x-1/2 -translate-y-1/2 text-center sm:w-56">
          <p className="font-report text-[0.6rem] tracking-[0.2em] text-brass-bright/70 uppercase sm:text-[0.65rem]">
            Der Kernloop
          </p>
          <p className="mt-2 text-xs leading-snug text-parchment-dim/80 sm:text-sm">
            Endet nie durch Mechanik - nur durch deine Anklage.
          </p>
        </div>
      </motion.div>

      <p className="sr-only">{loopClosing}</p>
    </div>
  )
}

export default GameLoopWheel
