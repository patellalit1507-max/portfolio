'use client'

/*
 * TODO — Replace all href="#" and "YOUR_USERNAME" placeholders with your real links.
 */

const currentYear = new Date().getFullYear()

const columns = [
  {
    heading: 'Navigate',
    links: [
      { label: 'About',    href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Blog',     href: '#blog' },
      { label: 'Contact',  href: '#contact' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'GitHub',    href: 'https://github.com/patellalit1507-max/' },
      { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/lalitpatel1507/' },
      { label: 'Twitter/X', href: 'https://x.com/YOUR_USERNAME' },
      { label: 'Email',     href: 'mailto:patellalit1507@gmail.com' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        borderTop: '1px solid var(--border-100)',
        backgroundColor: 'var(--bg-100)',
        padding: 'clamp(3rem, 8vw, 6rem) var(--wrap-x) 2.5rem',
      }}
    >
      {/* Link columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}
      >
        {/* Brand column */}
        <div>
          <p
            style={{
              fontWeight: 100,
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              letterSpacing: '-0.03em',
              color: 'var(--bg-950)',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Lalit
            <br />
            Patel
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--text-900)',
              lineHeight: 1.6,
              maxWidth: '22ch',
            }}
          >
            Good Human — building thoughtful applications.
          </p>
        </div>

        {/* Nav + social columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <p
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-geist-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-900)',
                marginBottom: '1.25rem',
              }}
            >
              {col.heading}
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-950)',
                      transition: `color var(--trans-fastest) var(--ease)`,
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = 'var(--primary)')
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = 'var(--text-950)')
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div
        style={{
          borderTop: '1px solid var(--border-100)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--text-900)',
            fontFamily: 'var(--font-geist-mono)',
          }}
        >
          © {currentYear} Lalit Patel
        </p>
        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--text-900)',
            fontFamily: 'var(--font-geist-mono)',
          }}
        >
          Last updated: March 2026
        </p>
      </div>
    </footer>
  )
}
