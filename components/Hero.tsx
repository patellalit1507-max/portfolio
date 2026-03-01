'use client'

import Badge from './Badge'
import Button from './Button'

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'calc(var(--header-height) + 3rem) var(--wrap-x) 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Status badge — top left */}
      <div style={{ marginBottom: '3rem' }}>
        <Badge text="Currently building" />
      </div>

      {/* Main content grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'end',
        }}
        className="lg:grid-cols-[1fr_auto]"
      >
        {/* Left — text */}
        <div>
          {/* Display name */}
          <h1
            className="heading-xl"
            style={{
              color: 'var(--bg-950)',
              marginBottom: '2rem',
              maxWidth: 'none',
            }}
          >
            Lalit
            <br />
            Patel
          </h1>

          {/* Role + tagline */}
          <div style={{ maxWidth: '48ch', marginBottom: '2.5rem' }}>
            <p
              style={{
                fontSize: '1.125rem',
                fontWeight: 400,
                color: 'var(--bg-950)',
                marginBottom: '0.6rem',
                letterSpacing: '-0.01em',
              }}
            >
              Good Human
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-900)',
                lineHeight: 1.6,
              }}
            >
              Building thoughtful applications that improve everyday life and
              human well-being.
            </p>
          </div>

          {/* CTA */}
          <Button href="#projects">See my work</Button>
        </div>

        {/* Right — profile photo */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <div
            title="Profile photo"
            style={{
              width: 'clamp(140px, 20vw, 260px)',
              height: 'clamp(140px, 20vw, 260px)',
              borderRadius: '50%',
              border: '2px dashed var(--border-200, #ccc)',
              overflow: 'hidden',
              cursor: 'grab',
              flexShrink: 0,
              position: 'relative',
              backgroundColor: 'var(--bg-200)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/*
              TODO: Replace this SVG avatar with your real photo.
              1. Add your image to /public/avatar.jpg (or .webp)
              2. Replace the <img> tag below:
                 <img src="/avatar.jpg" alt="Lalit Patel" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            */}
            <img
              src="/avatar-placeholder.svg"
              alt="Lalit Patel"
              style={{ width: '65%', height: '65%', opacity: 0.4 }}
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: 'var(--wrap-x)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--text-900)',
          fontSize: '0.8125rem',
          fontFamily: 'var(--font-geist-mono)',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '1.5rem',
            height: '1px',
            backgroundColor: 'var(--border-100)',
          }}
        />
        Scroll to explore
      </div>
    </section>
  )
}
