import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PortraitPlaceholder from './PortraitPlaceholder'

function CharacterModal({ character, onClose }) {
  useEffect(() => {
    if (!character) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [character, onClose])

  return (
    <AnimatePresence>
      {character && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-void/85 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-sm border border-brass/30 bg-abyss shadow-2xl shadow-black/60 md:flex-row"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={character.name}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Schließen"
              className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-brass/30 bg-void/70 text-parchment transition-colors hover:border-brass hover:text-brass-bright"
            >
              ✕
            </button>

            <div className="relative aspect-[3/4] w-full shrink-0 md:aspect-auto md:w-2/5">
              {character.portrait ? (
                <img
                  src={character.portrait}
                  alt={`Portrait von ${character.name}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <PortraitPlaceholder className="h-full w-full" />
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <h3 className="font-display text-2xl text-parchment md:text-3xl">
                {character.name}
              </h3>
              <p className="mt-1 text-brass-bright/90 italic">{character.merkmal}</p>
              <p className="mt-1 text-xs tracking-widest text-parchment-dim/60 uppercase">
                Alter: {character.alter}
              </p>

              <div className="mt-5 space-y-4 border-t border-brass/15 pt-5">
                {character.beschreibung.map((absatz, index) => (
                  <p key={index} className="text-[0.95rem] leading-relaxed text-parchment-dim">
                    {absatz}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CharacterModal
