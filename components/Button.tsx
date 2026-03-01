'use client'

import { useState } from 'react'

interface ButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'enter' | 'default'
  onClick?: () => void
}

export default function Button({
  href,
  children,
  variant = 'enter',
  onClick,
}: ButtonProps) {
  const [hovered, setHovered] = useState(false)

  const inner = (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.9375rem',
        fontWeight: 400,
        color: 'var(--bg-950)',
        transition: `all var(--trans-fastest) var(--ease)`,
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(1px)'
      }}
      onMouseUp={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = ''
      }}
    >
      {children}

      {/* Animated SVG arrow */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        style={{
          transition: `transform var(--trans-fastest) var(--ease)`,
          transform: hovered ? 'translate(3px, -3px)' : 'translate(0, 0)',
        }}
      >
        {/* Arrow shaft */}
        <line
          x1="3"
          y1="15"
          x2="15"
          y2="3"
          strokeDasharray="18"
          strokeDashoffset={hovered ? '0' : '18'}
          style={{ transition: `stroke-dashoffset 0.3s var(--ease)` }}
        />
        {/* Arrowhead */}
        <polyline
          points="7,3 15,3 15,11"
          strokeDasharray="24"
          strokeDashoffset={hovered ? '0' : '24'}
          style={{ transition: `stroke-dashoffset 0.3s var(--ease) 0.05s` }}
        />
      </svg>
    </span>
  )

  if (href) {
    return (
      <a href={href} style={{ display: 'inline-flex' }} onClick={onClick}>
        {inner}
      </a>
    )
  }

  return (
    <button
      type="button"
      style={{ background: 'none', border: 'none', padding: 0 }}
      onClick={onClick}
    >
      {inner}
    </button>
  )
}
