import { useEffect, useState } from 'react'

function useActiveSection(ids, options) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return

        const topMost = visible.reduce((closest, entry) =>
          entry.boundingClientRect.top < closest.boundingClientRect.top ? entry : closest
        )
        setActiveId(topMost.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0, ...options }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids, options])

  return activeId
}

export default useActiveSection
