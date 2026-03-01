'use client'

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(3rem, 8vw, 6rem) var(--wrap-x) 5rem',
        position: 'relative',
      }}
    >
      {/* ── Top row: avatar left · "Now" panel right ── */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '3rem',
          gap: '2rem',
        }}
      >
        {/* Avatar — top left, rounded square */}
        <div
          style={{
            width: 'clamp(120px, 14vw, 180px)',
            height: 'clamp(120px, 14vw, 180px)',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-200)',
            flexShrink: 0,
            border: '1px solid var(--border-100)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/avatar.png"
            alt="Lalit Patel"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            draggable={false}
          />
        </div>

        {/* Now panel — top right */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            maxWidth: '22ch',
            textAlign: 'right',
          }}
        >
          {/* Beacon badge */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '0.4rem',
              fontSize: '0.8125rem',
              color: 'var(--text-900)',
            }}
          >
            <span
              style={{
                width: '0.45rem',
                height: '0.45rem',
                borderRadius: '50%',
                backgroundColor: '#f97316',
                animation: 'Badge-beacon-fade 1.3s linear infinite',
                flexShrink: 0,
              }}
            />
            Now
          </span>

          {/* Status description */}
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--text-900)',
              lineHeight: 1.55,
            }}
          >
            Currently building{' '}
            <em>nine2five</em>{' '}
            and{' '}
            <em>calmVritti</em>.{' '}
            Visit{' '}
            <a
              href="#projects"
              style={{
                color: 'var(--bg-950)',
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              }}
            >
              projects
            </a>{' '}
            for latest work.
          </p>
        </div>
      </div>

      {/* ── Main heading ── */}
      <h1
        style={{
          fontSize: 'clamp(2.75rem, 2.75rem + 4.5vw, 7.5rem)',
          fontWeight: 100,
          letterSpacing: '-0.03em',
          lineHeight: 1.0,
          color: 'var(--bg-950)',
          maxWidth: 'none',
          marginBottom: '2.5rem',
        }}
      >
        I build thoughtful
        <br />
        applications for
        <br />
        everyday life.
      </h1>

      {/* ── Pill CTA buttons ── */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <a
          href="#projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.6rem 1.375rem',
            borderRadius: '999px',
            border: '1px solid var(--border-950)',
            fontSize: '0.9375rem',
            color: 'var(--bg-950)',
            fontWeight: 400,
            transition: `background var(--trans-fastest) var(--ease), color var(--trans-fastest) var(--ease)`,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'var(--bg-950)'
            el.style.color = 'var(--text-50)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.background = 'transparent'
            el.style.color = 'var(--bg-950)'
          }}
        >
          Selected Works
        </a>

        <a
          href="#about"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.6rem 1.375rem',
            borderRadius: '999px',
            border: '1px solid var(--border-100)',
            fontSize: '0.9375rem',
            color: 'var(--text-950)',
            fontWeight: 400,
            transition: `border-color var(--trans-fastest) var(--ease)`,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-950)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border-100)')
          }
        >
          About me
        </a>
      </div>
    </section>
  )
}
