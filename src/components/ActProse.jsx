function ActProse({ paragraphs }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="leading-relaxed text-parchment-dim/90">
          {index === 0 && (
            <span className="float-left mr-2 font-display text-5xl leading-[0.85] text-brass-bright">
              {paragraph.charAt(0)}
            </span>
          )}
          {index === 0 ? paragraph.slice(1) : paragraph}
        </p>
      ))}
    </div>
  )
}

export default ActProse
