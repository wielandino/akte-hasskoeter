import { motion } from 'framer-motion'
import PortraitPlaceholder from './PortraitPlaceholder'

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function CharacterCard({ character, onSelect }) {
  return (
    <motion.button
      type="button"
      variants={cardVariants}
      whileHover={{ y: -6 }}
      onClick={() => onSelect(character)}
      className="cursor-pointer group relative flex flex-col overflow-hidden rounded-sm border border-brass/20 bg-abyss text-left shadow-lg shadow-black/40 transition-colors duration-300 hover:border-brass/60"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        {character.portrait ? (
          <img
            src={character.portrait}
            alt={`Portrait von ${character.name}`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <PortraitPlaceholder className="h-full w-full" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-display text-lg text-parchment">{character.name}</h3>
        <p className="text-sm text-brass-bright/80 italic">{character.merkmal}</p>
        <p className="mt-auto pt-2 text-xs tracking-widest text-parchment-dim/60 uppercase">
          Alter: {character.alter}
        </p>
      </div>

      <span className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(184,135,63,0)] transition-shadow duration-300 group-hover:shadow-[inset_0_0_0_1px_rgba(184,135,63,0.4)]" />
    </motion.button>
  )
}

export default CharacterCard
