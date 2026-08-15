import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'hasskoeter:a11y-prefs:v1'

const FONT_SIZE_STEPS = ['87.5%', '100%', '112.5%', '125%', '137.5%']

const FONT_FAMILIES = {
  default: { label: 'Standard', value: 'var(--font-body)' },
  arial: { label: 'Arial', value: 'Arial, Helvetica, sans-serif' },
  robotoCondensed: { label: 'Roboto Condensed', value: "'Roboto Condensed', sans-serif" },
  roboto: { label: 'Roboto', value: 'Roboto, sans-serif' },
}

const FONT_COLORS = {
  default: { label: 'Pergament', value: '#ece3d0' },
  white: { label: 'Reinweiß', value: '#ffffff' },
  yellow: { label: 'Warmgelb', value: '#f5e3a1' },
  cyan: { label: 'Hellcyan', value: '#bfeaf0' },
}

const FONT_WEIGHTS = {
  400: 'Normal',
  600: 'Fett',
  700: 'Extra-fett',
}

const READING_MODE_COLOR = '#f5f1e6'

const DEFAULT_STATE = {
  fontSizeStep: 1,
  fontWeight: 400,
  fontColor: 'default',
  fontFamily: 'default',
  readingMode: false,
}

const AccessibilityContext = createContext(null)

function loadStoredState() {
  if (typeof window === 'undefined') return DEFAULT_STATE

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_STATE

    const parsed = JSON.parse(raw)
    return { ...DEFAULT_STATE, ...parsed }
  } catch {
    return DEFAULT_STATE
  }
}

function isAtDefaults(state) {
  return (
    state.fontSizeStep === DEFAULT_STATE.fontSizeStep &&
    state.fontWeight === DEFAULT_STATE.fontWeight &&
    state.fontColor === DEFAULT_STATE.fontColor &&
    state.fontFamily === DEFAULT_STATE.fontFamily &&
    !state.readingMode
  )
}

export function AccessibilityProvider({ children }) {
  const [state, setState] = useState(loadStoredState)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // localStorage unavailable (private mode, disabled) - preferences just won't persist
    }

    const root = document.documentElement
    root.style.setProperty('--a11y-font-size', FONT_SIZE_STEPS[state.fontSizeStep])
    root.style.setProperty('--a11y-font-weight', String(state.fontWeight))
    root.style.setProperty('--a11y-font-family', FONT_FAMILIES[state.fontFamily].value)

    // Only the two tokens used for regular body text are overridden here, never the
    // accent tokens (blood/brass/void/abyss/charcoal) - those must stay untouched.
    const effectiveColor = state.readingMode
      ? READING_MODE_COLOR
      : state.fontColor !== 'default'
        ? FONT_COLORS[state.fontColor].value
        : null

    if (effectiveColor) {
      root.style.setProperty('--color-parchment', effectiveColor)
      root.style.setProperty('--color-parchment-dim', effectiveColor)
    } else {
      root.style.removeProperty('--color-parchment')
      root.style.removeProperty('--color-parchment-dim')
    }

    root.toggleAttribute('data-a11y-active', !isAtDefaults(state))
    root.toggleAttribute('data-reading-mode', state.readingMode)
  }, [state])

  const setFontSizeStep = useCallback((step) => {
    setState((prev) => ({ ...prev, fontSizeStep: step, readingMode: false }))
  }, [])

  const setFontWeight = useCallback((weight) => {
    setState((prev) => ({ ...prev, fontWeight: weight, readingMode: false }))
  }, [])

  const setFontColor = useCallback((colorKey) => {
    setState((prev) => ({ ...prev, fontColor: colorKey, readingMode: false }))
  }, [])

  const setFontFamily = useCallback((familyKey) => {
    setState((prev) => ({ ...prev, fontFamily: familyKey, readingMode: false }))
  }, [])

  const toggleReadingMode = useCallback(() => {
    setState((prev) => ({ ...prev, readingMode: !prev.readingMode }))
  }, [])

  const resetAll = useCallback(() => {
    setState(DEFAULT_STATE)
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }, [])

  const value = useMemo(
    () => ({
      ...state,
      isDefault: isAtDefaults(state),
      fontSizeSteps: FONT_SIZE_STEPS,
      fontFamilies: FONT_FAMILIES,
      fontColors: FONT_COLORS,
      fontWeights: FONT_WEIGHTS,
      setFontSizeStep,
      setFontWeight,
      setFontColor,
      setFontFamily,
      toggleReadingMode,
      resetAll,
    }),
    [state, setFontSizeStep, setFontWeight, setFontColor, setFontFamily, toggleReadingMode, resetAll]
  )

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
  }
  return context
}
