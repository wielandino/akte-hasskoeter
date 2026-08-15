import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAccessibility } from '../context/AccessibilityContext'

function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const {
    fontSizeStep,
    fontWeight,
    fontColor,
    fontFamily,
    readingMode,
    isDefault,
    fontSizeSteps,
    fontFamilies,
    fontColors,
    fontWeights,
    setFontSizeStep,
    setFontWeight,
    setFontColor,
    setFontFamily,
    toggleReadingMode,
    resetAll,
  } = useAccessibility()

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Lesbarkeits-Einstellungen öffnen"
        className="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-sm border border-brass/30 bg-abyss/90 text-brass shadow-lg shadow-black/40 transition-colors hover:border-brass-bright hover:text-brass-bright"
      >
        <span aria-hidden="true" className="text-lg leading-none">
          Aa
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-void/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            role="presentation"
          >
            <motion.div
              className="relative flex max-h-[85vh] w-full max-w-md flex-col overflow-y-auto rounded-sm border border-brass/30 bg-abyss p-6 shadow-2xl shadow-black/60 md:p-8"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Lesbarkeits-Einstellungen"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Schließen"
                className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-brass/30 bg-void/70 text-parchment transition-colors hover:border-brass hover:text-brass-bright"
              >
                ✕
              </button>

              <h3 className="font-display pr-10 text-xl text-parchment">Lesbarkeit</h3>
              <p className="mt-1 text-sm text-parchment-dim/80">
                Passe Schriftgröße, -dicke, -farbe und -art an deine Bedürfnisse an.
              </p>

              <div className="mt-6 space-y-6">
                <fieldset disabled={readingMode} className="disabled:opacity-40">
                  <legend className="mb-2 text-xs tracking-widest text-brass-bright uppercase">
                    Schriftgröße
                  </legend>
                  <div className="flex gap-2">
                    {fontSizeSteps.map((size, index) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFontSizeStep(index)}
                        aria-pressed={fontSizeStep === index}
                        className={`flex h-9 flex-1 items-center justify-center rounded-sm border text-xs transition-colors ${
                          fontSizeStep === index
                            ? 'border-blood-bright bg-blood/20 text-blood-bright'
                            : 'border-brass/30 text-parchment-dim/70 hover:border-brass hover:text-brass-bright'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset disabled={readingMode} className="disabled:opacity-40">
                  <legend className="mb-2 text-xs tracking-widest text-brass-bright uppercase">
                    Schriftdicke
                  </legend>
                  <div className="flex gap-2">
                    {Object.entries(fontWeights).map(([weight, label]) => (
                      <button
                        key={weight}
                        type="button"
                        onClick={() => setFontWeight(Number(weight))}
                        aria-pressed={fontWeight === Number(weight)}
                        className={`flex h-9 flex-1 items-center justify-center rounded-sm border text-xs transition-colors ${
                          fontWeight === Number(weight)
                            ? 'border-blood-bright bg-blood/20 text-blood-bright'
                            : 'border-brass/30 text-parchment-dim/70 hover:border-brass hover:text-brass-bright'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset disabled={readingMode} className="disabled:opacity-40">
                  <legend className="mb-2 text-xs tracking-widest text-brass-bright uppercase">
                    Schriftfarbe
                  </legend>
                  <div className="flex gap-2">
                    {Object.entries(fontColors).map(([key, color]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setFontColor(key)}
                        aria-pressed={fontColor === key}
                        aria-label={color.label}
                        title={color.label}
                        className={`flex h-9 flex-1 items-center justify-center rounded-sm border transition-colors ${
                          fontColor === key ? 'border-blood-bright' : 'border-brass/30 hover:border-brass'
                        }`}
                      >
                        <span
                          className="h-4 w-4 rounded-full border border-void/40"
                          style={{ backgroundColor: color.value }}
                        />
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset disabled={readingMode} className="disabled:opacity-40">
                  <legend className="mb-2 text-xs tracking-widest text-brass-bright uppercase">
                    Schriftart
                  </legend>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(fontFamilies).map(([key, family]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setFontFamily(key)}
                        aria-pressed={fontFamily === key}
                        className={`flex h-9 items-center justify-center rounded-sm border text-xs transition-colors ${
                          fontFamily === key
                            ? 'border-blood-bright bg-blood/20 text-blood-bright'
                            : 'border-brass/30 text-parchment-dim/70 hover:border-brass hover:text-brass-bright'
                        }`}
                      >
                        {family.label}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="mt-8 space-y-2 border-t border-brass/15 pt-6">
                <button
                  type="button"
                  onClick={toggleReadingMode}
                  aria-pressed={readingMode}
                  className={`flex h-11 w-full items-center justify-center rounded-sm border text-sm font-medium tracking-wide uppercase transition-colors ${
                    readingMode
                      ? 'border-brass-bright bg-brass-bright text-void'
                      : 'border-brass-bright/60 text-brass-bright hover:bg-brass-bright/10'
                  }`}
                >
                  {readingMode ? 'Lesemodus aktiv' : 'Lesemodus aktivieren'}
                </button>

                <button
                  type="button"
                  onClick={resetAll}
                  disabled={isDefault}
                  className="flex h-10 w-full items-center justify-center rounded-sm border border-parchment-dim/30 text-xs tracking-widest text-parchment-dim/70 uppercase transition-colors hover:border-parchment-dim hover:text-parchment disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Zurücksetzen
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AccessibilityPanel
