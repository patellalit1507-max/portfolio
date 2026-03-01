'use client'

import { useEffect, useState } from 'react'

export default function Splash() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      // Signal page content to appear
      document.documentElement.setAttribute('data-loaded', 'true')

      // Remove splash from DOM after CSS transition completes
      setTimeout(() => setHidden(true), 700)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div
      className="splash"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-950)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      {/* Name reveal */}
      <div style={{ overflow: 'hidden' }}>
        <p
          style={{
            color: 'var(--text-50)',
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            fontWeight: 100,
            letterSpacing: '-0.03em',
            animation: 'Splash-text 0.8s cubic-bezier(0.68, 0, 0.1, 1) 0.2s both',
          }}
        >
          Lalit Patel
        </p>
      </div>

      {/* Dot loader */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: '0.4rem',
              height: '0.4rem',
              borderRadius: '50%',
              backgroundColor: 'var(--text-900)',
              animation: `Splash-loader 0.6s var(--ease) ${0.6 + i * 0.15}s both`,
              clipPath: 'inset(0 100% 0 0)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
