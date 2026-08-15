function PortraitPlaceholder({ className = '' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-charcoal ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-1/2 w-1/2 text-brass/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="50" cy="36" r="18" />
        <path d="M18 88c4-20 14-30 32-30s28 10 32 30" />
      </svg>
      <span className="font-display text-[0.6rem] tracking-[0.2em] text-brass/60 uppercase">
        Portrait folgt in Kürze
      </span>
    </div>
  )
}

export default PortraitPlaceholder
