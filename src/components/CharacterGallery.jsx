import { motion } from 'framer-motion'
import { characters } from '../data/characters'
import CharacterCard from './CharacterCard'
import InvestigatorSpotlight from './InvestigatorSpotlight'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const investigator = characters.find((character) => character.rolle === 'ermittler')
const suspects = characters.filter((character) => character.rolle !== 'ermittler')

function CharacterGallery({ onSelectCharacter }) {
  return (
    <section id="charaktere" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      {investigator && (
        <InvestigatorSpotlight character={investigator} onSelect={onSelectCharacter} />
      )}

      <div className="mb-14 text-center">
        <p className="font-display text-sm tracking-[0.3em] text-blood-bright/80 uppercase">
          Verdächtige & Verwandte
        </p>
        <h2 className="mt-3 text-4xl text-parchment md:text-5xl">Das Personal der Akte</h2>
        <p className="mx-auto mt-4 max-w-2xl text-parchment-dim/80">
          Jeder im Hassköter-Anwesen hat etwas zu verbergen. Manche mehr, manche weniger
          geschickt.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {suspects.map((character) => (
          <CharacterCard key={character.id} character={character} onSelect={onSelectCharacter} />
        ))}
      </motion.div>
    </section>
  )
}

export default CharacterGallery
