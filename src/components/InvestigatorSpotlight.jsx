import { motion } from 'framer-motion'
import PortraitPlaceholder from './PortraitPlaceholder'

function InvestigatorSpotlight({ character, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative mx-auto mb-20 max-w-4xl"
    >
      <div className="pointer-events-none absolute -inset-px rounded-sm bg-gradient-to-r from-blood-bright/40 via-brass/40 to-blood-bright/40 opacity-40 blur-[2px]" />

      <button
        type="button"
        onClick={() => onSelect(character)}
        className="group relative flex w-full flex-col overflow-hidden rounded-sm border border-brass/50 bg-abyss text-left shadow-2xl shadow-black/50 sm:flex-row cursor-pointer"
      >
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-auto sm:w-64">
          {character.portrait ? (
            <img
              src={character.portrait}
              alt={`Portrait von ${character.name}`}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <PortraitPlaceholder className="h-full w-full" />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent sm:bg-gradient-to-l" />
        </div>

        <div className="flex flex-1 flex-col justify-center gap-2 p-6 sm:p-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blood-bright/50 bg-blood/20 px-3 py-1 font-display text-[0.65rem] tracking-[0.25em] text-blood-bright uppercase">
            Sie ermitteln als
          </span>
          <h3 className="mt-2 font-display text-2xl text-parchment md:text-3xl">
            {character.name}
          </h3>
          <p className="text-sm text-brass-bright/80 italic">{character.merkmal}</p>
          <p className="mt-2 max-w-md text-sm text-parchment-dim/80">
            Rudi ist der Mann, dessen Klettverschluss-Schuhe
            Sie durchs Anwesen tragen. Ob er dem Fall gewachsen ist, steht auf einem anderen
            Blatt. Anton hat da so seine Zweifel.
          </p>
        </div>
      </button>
    </motion.div>
  )
}

export default InvestigatorSpotlight
