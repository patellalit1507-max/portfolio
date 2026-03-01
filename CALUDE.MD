# Website Blueprint — Based on joonassandell.com

> **Reference:** https://joonassandell.com
> **Aesthetic:** Minimalist, sophisticated, craftsmanship-focused — "designer who codes"
> **Tone:** Every detail is deliberate. Calm confidence, no decoration for decoration's sake.

---

## 1. Color System

### CSS Variables (from :root)

| Variable | Value | Usage |
|---|---|---|
| `--bg-50` | `#ffffff` | Pure white |
| `--bg-100` | `#fbfbfb` | Default page background (off-white) |
| `--bg-200` | `#e5e5e5` | Light gray, dividers |
| `--bg-800` | `#1a1a1a` | Dark section backgrounds |
| `--bg-950` | near-black | Darkest backgrounds |
| `--primary-hsl` | `25 100% 50%` | Orange accent |
| `--text-950` | `#4d4d4d` | Primary body text (dark gray) |
| `--text-900` | `#666` | Secondary / muted text |
| `--text-50` | `#ffffff` | Text on dark backgrounds |
| `--text-900-blend` | semi-transparent white | Overlay text |
| `--border-100` | `#e2e8f0` | Light borders |
| `--border-950` | `#111` | Dark borders / near-black |

### Project Accent Colors (per-card theming)

| Project | Background | Primary |
|---|---|---|
| Biocode | `#00081f` (dark navy) | `#3959f9` (blue) |
| Mediasignal | `#00aae7` | cyan |
| Sandbox | `#e1bca7` | warm beige |

---

## 2. Typography

### Font Families
```css
/* Sans-serif (all body and heading text) */
font-family: "Px Grotesk", ui-sans-serif, system-ui, sans-serif;

/* Monospace (code / labels) */
font-family: SFMono-Regular, Menlo, Monaco, Consolas;
```

### Font Weights
```css
--font-weight-400: 400;   /* Regular - body text */
--font-weight-100: 100;   /* Thin - display headings */
```

### Type Scale (responsive clamp)
```css
/* Root font size */
font-size: clamp(16px, 1.25vw, 999px);

/* Headings */
h1:   clamp(2.5rem,    2.5rem + 1vw,        6.375rem);
h2:   clamp(2rem,      2rem + 1vw,          3rem);
h3:   clamp(1.6875rem, 1.6875rem + 1vw,     2.5rem);
h5:   clamp(1.125rem,  1.125rem + 1vw,      1.5rem);

/* Hero display text - ultra-large */
.Heading--xl: clamp(1.1875rem, 1.1875rem + 20vw, 62.4375rem);

/* Small / label text */
.text-s: 0.875rem;   /* line-height: 1.4285714286 */
```

### Heading Styles
```css
letter-spacing: -0.015em;   /* tight tracking on all headings */
line-height: 1.1;            /* h1 */
line-height: 1.125;          /* h2 */
line-height: 1.185;          /* h3 */
line-height: 1.5;            /* body */
```

---

## 3. Animation System

### Custom Easing
```css
--ease: cubic-bezier(0.68, 0, 0.1, 1);
```

### Transition Durations
```css
--trans-primary-fastest: 0.3s;
--trans-primary-fast:    0.6s;
--trans-primary:         1.3s;
```

### Keyframes
```css
/* Splash screen - text reveal (slides up + unskews) */
@keyframes Splash-text {
  0%   { opacity: 0; transform: translateY(100%) skewX(-50deg); }
  100% { opacity: 1; transform: translateY(0)    skewX(0deg);   }
}

/* Splash screen - dot loader (clip-path wipe) */
@keyframes Splash-loader {
  to { clip-path: inset(0 -33.333% 0 0); }
}

/* Badge beacon - pulsing availability dot */
@keyframes Badge-beacon-fade {
  50% { opacity: 0.2; }
  to  { opacity: 1;   }
}
/* usage: animation: Badge-beacon-fade 1.3s linear infinite; */
```

### Animation Rules
- All transitions use `--ease: cubic-bezier(0.68, 0, 0.1, 1)` - not `ease` or `ease-in-out`
- Buttons: `translate: 0 1px` on `:active` (subtle press feel)
- Scroll reveal: slide-up on enter viewport
- Page load: soft fade-in via `.is-loading` -> loaded state class swap
- No auto-playing video, no parallax, no jarring motion

---

## 4. Layout System

### Grid
```css
grid-template-columns: repeat(12, 1fr);
--grid-gap-m:     1.5rem;
--grid-gap-l:     1.5rem;
--grid-gap-row-l: 2rem;

/* Common column spans */
/* grid-col:6 = 50% (half) */
/* grid-col:3 = 25% (quarter) */
/* grid-col:9 = 75% (three-quarter) */
```

### Spacing / Padding
```css
/* Page-level horizontal padding */
--wrap-space: max(env(safe-area-inset-left), 6.25%);  /* mobile */
              /* max(4rem) at 120em+ (wide screens) */
```

### Max Widths
```css
--text-max-width:    56ch;   /* body paragraph columns */
--heading-max-width: 30ch;   /* heading line length cap */
```

### Header Heights
```css
/* mobile:  3.75rem */
/* desktop: 5.5rem  (at 64em / 1024px+) */
```

### Hero Heights
```css
--Hero-height:     100vw;
--Hero-min-height: 33rem;
/* --Hero-max-height: 75vh -> 48rem at 48em+ -> 100svh at 64em+ */
```

### Border Radius
```css
--border-radius-m:    8px;
--border-radius-l:    16px;
--border-radius-full: 999px;            /* pills / badges */
--border-radius-app:  4px 4px 8px 8px; /* app-style cards */
```

### Breakpoints (mobile-first, min-width)
```
30em    (480px)   small phones
37.5em  (600px)
48em    (768px)   tablets — major layout shift
56.25em (900px)
64em    (1024px)  large desktop — major layout shift
71.25em (1140px)
95.5em  (1536px)
105em   (1680px)
120em   (1920px)  wide screen wrap padding changes
160em   (2560px)  ultra-wide
```

---

## 5. Page Sections (in order)

### Section 1 — Splash / Loading Screen
- Full-viewport overlay shown on first load
- Text animates in with `Splash-text` (slides up, de-skews)
- Three dots loader using `Splash-loader` (clip-path wipe)
- Disappears once page assets are ready
- State toggle: `.is-loading` class on `<body>` or root element

### Section 2 — Header / Navigation
- **Height:** 3.75rem (mobile) → 5.5rem (1024px+)
- **`mix-blend-mode: difference`** — header color inverts against background (white text over light, dark text over dark)
- **Layout:** Logo/name left · Nav links right
- **Nav links:** About · Feed · UI Lab (or your equivalent sections)
- **Menu button:** Circular expand animation on click; reveals navigation overlay
- **Navigation overlay:** Slides/scales in from top (`transform: scaleY(6) translateY(-3rem)`)
- **Scroll:** Stays sticky at top; `scroll-padding-top: var(--Header-height)` for anchor links

### Section 3 — Hero
- **Height:** 100svh (full viewport)
- **Profile image:** Dashed animated border; draggable (mouse/touch bound interaction)
- **Heading:** `.Heading--xl` display text — ultra-large, thin weight (100), tight tracking
- **Status badge:** Small pill with animated pulsing beacon dot + "Currently crafting..." label
- **CTA:** "About me" link with animated SVG pointer path that draws on hover (enter button style)
- **Load state:** Content fades in softly after splash screen exits

### Section 4 — Selected Works (Projects)
- Full-width cards stacked vertically, each taking significant screen height
- **Per-card:** Unique gradient/solid background color (CSS var swap)
- **Per-card contents:**
  - Project name (H2, large)
  - Role badges: e.g. "Product design" · "App dev" · "Web dev"
  - Decorative figure / screenshot image
  - Absolute-positioned **Stamp** (circular SVG logo with animated iris/fill)
  - CTA link to case study or live project
- **Scroll reveal:** Cards slide up as they enter the viewport

### Section 5 — Footer
- Multi-column link grid: About · Resume · Approach · Contact
- Project links column
- Social links (GitHub, LinkedIn, Twitter/X, etc.)
- Copyright notice + "Last updated: [date]"
- Minimal styling — thin divider line at top, no heavy background

---

## 6. Component Catalogue

### Badge
```css
display: inline-flex;
align-items: center;
font-size: 0.875rem;          /* .text-s */
border-radius: 999px;         /* --border-radius-full */
gap: 0.5rem;
/* Beacon dot: animation: Badge-beacon-fade 1.3s linear infinite; */
```

### Button — Default
```css
/* Subtle press effect */
/* &:active { translate: 0 1px; } */
transition: all var(--trans-primary-fastest) var(--ease);
```

### Button — Enter Style
- SVG pointer-path that draws itself on hover
- Used for primary CTAs ("About me", case study links)

### Figure (image container)
```css
object-fit: cover;
/* Responsive: fills grid column, scales with container */
```

### Stamp
```css
position: absolute;  /* overlaid on project card */
/* Circular SVG with animated fill - unique per project */
/* Iris/reveal animation on scroll or hover */
```

### TextReveal
- Text is masked at block level
- Unmasks (slides in) as section enters viewport on scroll
- Applied to section headings and key body lines

---

## 7. Key UX Patterns

| Pattern | Implementation |
|---|---|
| Smooth scroll | `scroll-behavior: smooth` + `scroll-padding-top: var(--Header-height)` |
| Custom scrollbar | Thin CSS scrollbar with `--border-950` color |
| Keyboard accessibility | `:focus-visible` outlines on all interactive elements |
| Skip nav | Hidden skip-to-content link, appears on focus |
| Per-project theming | CSS variables swapped per `.Hero--projectname` section |
| Responsive images | WebP/PNG with `srcset`, Next.js Image optimization pattern |
| Off-thread scripts | Partytown pattern for analytics/third-party without blocking |
| Draggable element | Mouse/touch position binding on hero profile image |
| Blend mode header | `mix-blend-mode: difference` on header for always-visible nav |

---

## 8. Reusability Notes

- Replace all project names, descriptions, and role badges with your own
- Swap per-project accent colors using CSS variable overrides per section
- The Stamp SVG can be replaced with your own project logos
- The `.Heading--xl` display text is your name or tagline
- The beacon badge status text = your current work/availability
- The footer columns = your own navigation and social links
- All `clamp()` values are viewport-responsive — no media query overrides needed for type

---

*End of Blueprint*
