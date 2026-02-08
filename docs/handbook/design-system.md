# Design System — Dynamic Creative
> Design System v3.0 — Dynamic Creative
## 13 tokens extracted from a warm, expressive light interface
A comprehensive design system built on a white foundation with dual accents — blue for action, warm orange for personality. Designed for energy, warmth, and creative confidence using Open Sans across all typographic roles.
### Meta
| Key | Value |
|---|---|
| Aesthetic | Dynamic Creative |
| Palette | 7 Neutrals · 3 Blues · 3 Warms |
| Typeface | Open Sans |
| Surfaces | White with warm accents & motion |

## Tokens
This document contains the exported design tokens (colors, typography, spacing, radius, shadows, motion, and animations) plus usage guidance.

### Colors
| Token | Value |
|---|---|
| `--void` | `#FFFFFF` |
| `--obsidian` | `#FAFAFA` |
| `--gunmetal` | `#F5F5F5` |
| `--slate` | `#E5E5E5` |
| `--pewter` | `#737373` |
| `--silver` | `#525252` |
| `--cloud` | `#171717` |
| `--cerulean` | `#3B82F6` |
| `--ice` | `#2563EB` |
| `--abyss` | `#EFF6FF` |
| `--warm` | `#E97316` |
| `--warm-light` | `#FFF7ED` |
| `--warm-deep` | `#C2410C` |
| `--error` | `#F87171` |
| `--success` | `#34D399` |
| `--warning` | `#FBBF24` |
| `--info` | `#2563EB` |

### Typography
| Token | Value |
|---|---|
| `--font-primary` | `'Open Sans', -apple-system, 'Segoe UI', sans-serif` |
| `--fs-body` | `1rem` |
| `--fs-body-sm` | `0.875rem` |
| `--fs-caption` | `0.75rem` |
| `--fs-h1` | `clamp(2.25rem, 4vw, 3.5rem)` |
| `--fs-h2` | `clamp(1.75rem, 3vw, 2.5rem)` |
| `--fs-h3` | `clamp(1.25rem, 2vw, 1.75rem)` |
| `--fs-h4` | `1.25rem` |
| `--fs-hero` | `clamp(3rem, 5vw, 4.5rem)` |
| `--fs-overline` | `0.6875rem` |
| `--lh-normal` | `1.5` |
| `--lh-relaxed` | `1.75` |
| `--lh-snug` | `1.25` |
| `--lh-tight` | `1.1` |
| `--ls-normal` | `0` |
| `--ls-tight` | `-0.02em` |
| `--ls-ultra` | `0.15em` |
| `--ls-wide` | `0.06em` |

### Spacing
| Token | Value |
|---|---|
| `--space-1` | `0.25rem` |
| `--space-2` | `0.5rem` |
| `--space-3` | `0.75rem` |
| `--space-4` | `1rem` |
| `--space-5` | `1.25rem` |
| `--space-6` | `1.5rem` |
| `--space-8` | `2rem` |
| `--space-10` | `2.5rem` |
| `--space-12` | `3rem` |
| `--space-16` | `4rem` |
| `--space-20` | `5rem` |
| `--space-24` | `6rem` |
| `--space-32` | `8rem` |

### Radius
| Token | Value |
|---|---|
| `--radius-sm` | `2px` |
| `--radius-md` | `6px` |
| `--radius-lg` | `10px` |
| `--radius-xl` | `16px` |
| `--radius-full` | `9999px` |

### Borders
| Token | Value |
|---|---|
| `--border-thin` | `1px` |
| `--border-medium` | `2px` |

### Shadows
| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.04)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.06)` |
| `--shadow-lg` | `0 8px 30px rgba(0,0,0,0.08)` |
| `--shadow-xl` | `0 20px 60px rgba(0,0,0,0.1)` |
| `--shadow-glow` | `0 0 30px rgba(59,130,246,0.08)` |

### Motion
| Token | Value |
|---|---|
| `--duration-fast` | `150ms` |
| `--duration-normal` | `300ms` |
| `--duration-slow` | `500ms` |
| `--ease-in-out` | `cubic-bezier(0.42, 0, 0.58, 1)` |
| `--ease-out` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |
| `--ease-smooth` | `cubic-bezier(0.33, 1, 0.68, 1)` |

## 01 · Design Principles
These principles guide every design decision, ensuring consistency and creative energy across the interface.

### I. White Canvas, Warm Soul
White backgrounds provide a clean stage. Personality comes from warm orange accents, bold typography, asymmetric layouts, and motion -- not from surface color variation. The design should feel alive and confident, never sterile.

### II. Dual Accent System
Cerulean (#3B82F6) is reserved for interactive elements: buttons, links, focus rings, and active states. Warm (#E97316) is the personality color: highlights in hero text, hover states, selection highlights, link underlines, timeline markers, and decorative touches. These two accents create dynamic tension without clashing.

### III. Motion as Character
Animations are not decorative afterthoughts -- they are part of the brand. The scrolling marquee, hover-zoom on images, fade-up reveals, and the link-draw underline animation all reinforce a sense of creative energy and craftsmanship.

### IV. Readable Contrast
Cloud (#171717) for headings, Silver (#525252) for body, Pewter (#737373) for secondary. Dark text on white surfaces ensures legibility while the near-black Cloud keeps headings bold and confident.

## 02 · Color Palette
13 tokens -- 7 neutrals, 3 blues, 3 warms. Each token has a named role and clear usage context.

### Neutrals

| Token | Role | Hex | Usage |
|---|---|---|---|
| **Void** | Background | `#FFFFFF` | Primary surface -- clean white base |
| **Obsidian** | Surface | `#FAFAFA` | Cards, modals, and subtle elevated containers |
| **Gunmetal** | Surface Alt | `#F5F5F5` | Section alternates, sidebar backgrounds |
| **Slate** | Border / Divider | `#E5E5E5` | Light gray separations between content areas |
| **Pewter** | Muted Text | `#737373` | Secondary labels, placeholders, captions |
| **Silver** | Body Text | `#525252` | Primary readable content |
| **Cloud** | Heading Text | `#171717` | Titles, headings, high-emphasis text |

### Blues -- Action & Interface

| Token | Role | Hex | Usage |
|---|---|---|---|
| **Cerulean** | Primary Action | `#3B82F6` | Buttons, links, active states, focus rings |
| **Ice** | Accent Dark | `#2563EB` | Hover states on blue elements, emphasis |
| **Abyss** | Accent Tint | `#EFF6FF` | Selected rows, active nav items, blue tinted backgrounds |

### Warms -- Personality & Expression

| Token | Role | Hex | Usage |
|---|---|---|---|
| **Warm** | Personality Accent | `#E97316` | Hero text highlights, link underlines, timeline dots, hover accents |
| **Warm Light** | Warm Tint | `#FFF7ED` | Selection background, warm-tinted card hovers |
| **Warm Deep** | Warm Emphasis | `#C2410C` | Selection text color, deeper warm accents |

### Semantic

| Token | Hex |
|---|---|
| **Success** | `#34D399` |
| **Warning** | `#FBBF24` |
| **Error** | `#F87171` |
| **Info** | `#2563EB` |

## 03 · Typography
Open Sans serves all typographic roles -- a versatile humanist sans-serif with excellent legibility on white backgrounds. The key to avoiding a corporate feel is using bold weight contrasts and oversized hero text.

### Font usage

| Role | Face | Notes | Sample |
|---|---|---|---|
| Display / Light 300 | **Open Sans Light** | Hero headlines and large display text. Thin weight at oversized scale (5xl-7xl) creates editorial impact. Pair with warm-colored accent words. | I design **experience.** |
| Headings / Bold 700 | **Open Sans Bold** | Section headers and emphasis. Cloud color (#171717) for bold visual hierarchy. | Capital Letters Exhibition |
| Body / Regular 400 | **Open Sans Regular** | Body copy and general content. Silver (#525252) for sustained readability. Max width constrained for comfortable line lengths. | Lorem ipsum dolor sit amet, consectetur adipiscing elit. |
| UI / SemiBold 600 | **Open Sans SemiBold** | Navigation, buttons, labels, overlines. Wide letter-spacing and uppercase transforms for structural clarity. | Activities / Projects / News |

### Type scale specimens

| Specimen | Token | Meta |
|---|---|---|
| **Hero / Display** | `--fs-hero` | Open Sans Light 300 clamp(3rem-4.5rem) / 1.1 |
| **Heading 1** | `--fs-h1` | Open Sans Bold 700 clamp(2.25rem-3.5rem) / 1.1 |
| **Heading 2** | `--fs-h2` | Open Sans SemiBold 600 clamp(1.75rem-2.5rem) / 1.25 |
| **Heading 3** | `--fs-h3` | Open Sans SemiBold 600 clamp(1.25rem-1.75rem) / 1.25 |
| **Overline / Label** | `--fs-overline` | Open Sans Bold 700 0.6875rem / 0.15em tracking |
| **Navigation** | `--fs-body-sm` | Open Sans SemiBold 600 0.875rem / 0.06em tracking |
| **Body** | `--fs-body` | Open Sans Regular 400 1rem / 1.5 line-height |
| **Caption / Muted** | `--fs-body-sm` | Open Sans Regular 400 0.875rem / 1.5 line-height |

## 04 · Spacing Scale
A 4px base unit spacing scale. Generous padding around cards and sections reinforces breathing room and editorial feel.

| Token | Example value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |
| `--space-32` | 128px |

## 05 · Buttons
Button variants use the dual accent system. Primary actions are Cerulean (blue), personality CTAs can use the Warm (orange) accent. Hover states on dark buttons use white text.

### Primary -- Cerulean Fill
| Label | Size | Variant class |
|---|---|---|
| Get Started | LG | `primary` |
| Get Started | MD | `primary` |
| Get Started | SM | `primary` |

### Warm -- Orange Fill
| Label | Size | Variant class |
|---|---|---|
| Let's Connect | LG | `warm` |
| Let's Connect | MD | `warm` |

### Outline -- Blue Border
| Label | Size | Variant class |
|---|---|---|
| Explore | LG | `outline-blue` |
| Explore | MD | `outline-blue` |
| Explore | SM | `outline-blue` |

### Outline -- Neutral Border
| Label | Size | Variant class |
|---|---|---|
| View More | LG | `outline` |
| View More | MD | `outline` |
| View More | SM | `outline` |

### Dark -- Cloud Fill
| Label | Size | Variant class |
|---|---|---|
| Connect | MD | `dark` |

### Ghost -- Text Link
| Label | Size | Variant class |
|---|---|---|
| Learn More | LG | `ghost` |
| Learn More | MD | `ghost` |

## 06 · Shadows & Elevation
Very soft shadows for gentle elevation. Opacity is kept low to maintain the airy, creative feel. The glow variant uses Cerulean for focus states.

| Level | Token | Value |
|---|---|---|
| Small | `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.04)` |
| Medium | `--shadow-md` | `0 4px 12px rgba(0,0,0,0.06)` |
| Large | `--shadow-lg` | `0 8px 30px rgba(0,0,0,0.08)` |
| XL | `--shadow-xl` | `0 20px 60px rgba(0,0,0,0.1)` |
| Glow | `--shadow-glow` | `0 0 30px rgba(59,130,246,0.08)` |

## 07 · Motion & Interaction
Motion is a core part of the brand identity. Animations add life and creative energy.

### Custom animations

| Animation | Class | Description |
|---|---|---|
| **Marquee** | `.animate-marquee` | Continuous horizontal scroll (30s loop). Used for skill/interest tickers. |
| **Fade Up** | `.animate-fade-up` | Elements fade in while translating up 24px (0.6s ease-out). Used for scroll reveals. |
| **Hover Zoom** | `.hover-zoom` | Images scale to 1.05x on hover with smooth cubic-bezier easing (0.5s). Applied to parent container. |
| **Link Draw** | `.link-draw` | A warm orange underline expands from left to right on hover (0.3s). Used for text links. |

### Interaction patterns
- **Lift** -- Cards translate up on hover with shadow increase
- **Warm border** -- Cards shift border color to warm on hover
- **Color shift** -- Text transitions to warm or accent on hover
- **Zoom** -- Images gently scale up within their overflow-hidden container

### Timing tokens
- Fast: 150ms -- micro-interactions, color changes
- Normal: 300ms -- link underlines, border transitions
- Slow: 500ms -- image zoom, layout transitions

### Easing
- `--ease-out` for most UI transitions
- `--ease-smooth` (`cubic-bezier(0.33, 1, 0.68, 1)`) for image zoom

## 08 · Layout & Grid
12-column grid with generous gutters. Asymmetric layouts preferred over rigid uniformity to create visual interest.

**Specs:** Container: max-width 1200px / Gutter: 24px / Side padding: 24px-80px / Border radius: 10-16px

### Layout patterns
- **Asymmetric hero** -- Text on left (60%), image on right (40%) with overlapping badge element
- **Marquee strip** -- Full-bleed scrolling ticker between sections
- **Featured + grid** -- One large featured card spanning full width, remaining items in 2-3 column grid
- **Timeline** -- Vertical line with alternating dot colors (warm for current, blue for leadership, gray for past)
- **Dark inversion sections** -- Occasional dark (Cloud bg, white text) sections for dramatic contrast

## 09 · Component Patterns
Core UI patterns reflecting the dynamic creative direction. Components use a mix of borders, shadows, warm accents, and motion.

| Component | Notes |
|---|---|
| **Navigation Bar** | "Cody." branding with warm orange dot. SemiBold links with `.link-draw` underline animation. Dark "Connect" button. |
| **Content Card** | Obsidian surface with Slate border. Hover transitions border to warm. `.hover-zoom` on image containers. |
| **Featured Card** | Full-width, dark background (Cloud). Side-by-side image and text. Warm-colored tags. |
| **Project Card** | Cover image with hover zoom, warm-tinted tag pills, title shifts to warm on hover. |
| **Timeline Item** | Vertical line with colored dot (warm/blue/gray). Card lifts and warms border on hover. |
| **Marquee** | Full-bleed, continuous scroll. Items separated by warm-colored dot dividers. |
| **Footer** | Social icons in circular buttons with warm hover. `.link-draw` underline on nav links. Personal tagline. |
| **Dark CTA Section** | Cloud background, white text, warm accent button. Creates dramatic visual break. |
| **Text Selection** | Warm Light background (#FFF7ED) with Warm Deep text (#C2410C). |

## 10 · Usage Guidelines
### Do
- Use white backgrounds as the foundation, with Obsidian (#FAFAFA) and Gunmetal (#F5F5F5) for subtle surface variation
- Use Cerulean exclusively for interactive/functional elements (buttons, links, focus rings)
- Use Warm (#E97316) for personality and expression (highlights, hover states, underlines, decorative touches)
- Apply asymmetric layouts and varied section rhythms to avoid monotony
- Use the marquee, hover-zoom, and link-draw animations to add life
- Invert to dark sections (Cloud bg) sparingly for dramatic contrast
- Keep Open Sans weights consistent: 300 display, 700 headings, 400 body, 600 UI
- Let images breathe with overflow-hidden containers and hover-zoom
- Use oversized hero typography with warm-colored accent words

### Don't
- Use pure black (#000) for text -- Cloud (#171717) is the darkest text token
- Mix warm and blue accents on the same interactive element
- Overuse dark inverted sections -- one per page maximum
- Apply the marquee animation to anything other than horizontal tickers
- Use heavy drop shadows -- keep opacity under 0.1
- Create uniform, rigid grid layouts -- asymmetry is intentional
- Introduce additional accent hues outside the blue and warm families
- Reduce border-radius below 6px -- the system favors soft edges

---
Dynamic Creative Design System / Version 3.0 / 13 Color Tokens / Open Sans
