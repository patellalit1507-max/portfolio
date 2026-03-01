'use client'

import { useEffect, useRef } from 'react'
import Button from './Button'

/*
 * TODO — Replace this placeholder data with your real projects.
 * Each project needs:
 *   - title:       Project name
 *   - role:        Array of role tags (e.g. ['Frontend', 'Design'])
 *   - description: 1–2 sentence summary
 *   - href:        Link to live project or case study
 *   - bg:          Background color for the card (pick from CALUDE.MD project colors or your own)
 *   - accent:      Text/tag color on dark backgrounds
 */
const projects = [
  {
    id: '#01',
    title: 'nine2five',
    role: ['App dev', 'full stack'],
    description:
      'Application is an initiative to solve traffic problem in meteros using deep analytics',
    href: '#',
    bg: '#00081f',
    accent: '#3959f9',
    textColor: '#ffffff',
    logo: '/nine2five-logo..png',
  },
  {
    id: '#02',
    title: 'calmVritti',
    role: ['App dev', 'full stack'],
    description:
      'A application which will provide you best personalized yoga session.',
    href: '#',
    bg: '#f5f0e8',
    accent: '#b85c00',
    textColor: '#1a0a00',
    logo: '/calmvritti-logo.png',
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={cardRef}
      className="reveal"
      style={{
        minHeight: '80vh',
        backgroundColor: project.bg,
        padding: 'clamp(3rem, 8vw, 7rem) var(--wrap-x)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
        overflow: 'hidden',
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {/* Project number */}
      <span
        style={{
          position: 'absolute',
          top: 'clamp(2rem, 5vw, 4rem)',
          right: 'var(--wrap-x)',
          fontFamily: 'var(--font-geist-mono)',
          fontSize: '0.8125rem',
          color: project.textColor,
          opacity: 0.3,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Logo — upper area */}
      {project.logo && (
        <div
          style={{
            position: 'absolute',
            top: 'clamp(3rem, 8vw, 7rem)',
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img
            src={project.logo}
            alt={project.title}
            draggable={false}
            style={{
              width: 'clamp(140px, 22vw, 280px)',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      )}

      {/* Role badges */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.5rem',
        }}
      >
        {project.role.map((r) => (
          <span
            key={r}
            style={{
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              border: `1px solid ${project.accent}`,
              color: project.accent,
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-geist-mono)',
            }}
          >
            {r}
          </span>
        ))}
      </div>

      {/* Title */}
      <h2
        style={{
          color: project.textColor,
          marginBottom: '1.25rem',
          maxWidth: '14ch',
        }}
      >
        {project.title}
      </h2>

      {/* Description */}
      <p
        style={{
          color: project.textColor,
          opacity: 0.65,
          fontSize: '1rem',
          lineHeight: 1.65,
          marginBottom: '2.5rem',
          maxWidth: '44ch',
        }}
      >
        {project.description}
      </p>

      {/* CTA */}
      <div>
        <a
          href={project.href}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: project.textColor,
            fontSize: '0.9375rem',
            fontWeight: 300,
            letterSpacing: '-0.01em',
            transition: `opacity var(--trans-fastest) var(--ease)`,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.7')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
        >
          View project
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <line x1="2" y1="14" x2="14" y2="2" />
            <polyline points="6,2 14,2 14,10" />
          </svg>
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      {/* Section header */}
      <div
        className="wrap"
        style={{
          paddingTop: '5rem',
          paddingBottom: '3rem',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(0.875rem, 1vw, 1rem)',
            fontWeight: 400,
            color: 'var(--text-900)',
            fontFamily: 'var(--font-geist-mono)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            maxWidth: 'none',
          }}
        >
          Selected Work
        </h2>
        <span
          style={{
            fontSize: '0.8125rem',
            color: 'var(--text-900)',
            fontFamily: 'var(--font-geist-mono)',
          }}
        >
          {projects.length} projects
        </span>
      </div>

      {/* Cards */}
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </section>
  )
}
