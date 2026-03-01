interface BadgeProps {
  text: string
  color?: string
}

export default function Badge({ text, color = '#22c55e' }: BadgeProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.35rem 0.75rem',
        borderRadius: '999px',
        border: `1px solid var(--border-100)`,
        fontSize: '0.8125rem',
        color: 'var(--text-900)',
        backgroundColor: 'var(--bg-50)',
        fontFamily: 'var(--font-geist-mono)',
        letterSpacing: '0.01em',
      }}
    >
      {/* Beacon dot */}
      <span
        style={{
          display: 'inline-block',
          width: '0.5rem',
          height: '0.5rem',
          borderRadius: '50%',
          backgroundColor: color,
          animation: 'Badge-beacon-fade 1.3s linear infinite',
          flexShrink: 0,
        }}
      />
      {text}
    </span>
  )
}
