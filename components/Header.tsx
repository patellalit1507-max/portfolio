'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog',     href: '#blog' },
  { label: 'Contact',  href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          height: 'var(--header-height)',
          display: 'flex',
          alignItems: 'center',
          paddingLeft:  'var(--wrap-x)',
          paddingRight: 'var(--wrap-x)',
          mixBlendMode: 'difference',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            color: '#fff',
            fontWeight: 100,
            fontSize: '1rem',
            letterSpacing: '-0.02em',
            marginRight: 'auto',
            textDecoration: 'none',
          }}
        >
          LP
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: '#fff',
                fontSize: '0.875rem',
                letterSpacing: '0.01em',
                transition: 'opacity var(--trans-fastest) var(--ease)',
                opacity: 0.7,
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '1')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '0.7')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                backgroundColor: '#fff',
                borderRadius: '1px',
                transformOrigin: 'center',
                transition: `transform var(--trans-fastest) var(--ease), opacity var(--trans-fastest) var(--ease)`,
                transform:
                  menuOpen
                    ? i === 0 ? 'rotate(45deg) translateY(6.5px)' :
                      i === 1 ? 'scaleX(0)'                         :
                                 'rotate(-45deg) translateY(-6.5px)'
                    : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </header>

      {/* Mobile full-screen nav overlay */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 39,
          backgroundColor: 'var(--bg-950)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 'var(--wrap-x)',
          transform: menuOpen ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'top',
          transition: `transform var(--trans-fast) var(--ease)`,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                color: 'var(--text-50)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 100,
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                paddingBlock: '0.3rem',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(1rem)',
                transition: `opacity var(--trans-fast) var(--ease) ${0.1 + i * 0.07}s,
                             transform var(--trans-fast) var(--ease) ${0.1 + i * 0.07}s`,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
