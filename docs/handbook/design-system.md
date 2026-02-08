# Design System — Dark Interface
> Design System v2.0 — Dark Interface
## 10 tokens extracted from a dark interface
A comprehensive design system built on a refined dark palette — 7 neutrals and 3 blues. Designed for clarity, depth, and focus using Open Sans across all typographic roles.
### Meta
| Key | Value |
|---|---|
| Aesthetic | Dark Precision |
| Palette | 7 Neutrals · 3 Blues |
| Typeface | Open Sans |
| Surfaces | Layered Depth |

## Tokens
This document contains the exported design tokens (colors, typography, spacing, radius, shadows, and motion) plus usage guidance.

### Colors
| Token | Value |
|---|---|
| `--abyss` | `#1A3352` |
| `--cerulean` | `#3B82F6` |
| `--cloud` | `#D6DEE6` |
| `--error` | `#F87171` |
| `--gunmetal` | `#1E2A36` |
| `--ice` | `#60A5FA` |
| `--info` | `#60A5FA` |
| `--obsidian` | `#151C25` |
| `--pewter` | `#6B7D8E` |
| `--silver` | `#9BAAB8` |
| `--slate` | `#2E3C4A` |
| `--success` | `#34D399` |
| `--void` | `#0B0F14` |
| `--warning` | `#FBBF24` |

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
| `--space-10` | `2.5rem` |
| `--space-12` | `3rem` |
| `--space-16` | `4rem` |
| `--space-2` | `0.5rem` |
| `--space-20` | `5rem` |
| `--space-24` | `6rem` |
| `--space-3` | `0.75rem` |
| `--space-32` | `8rem` |
| `--space-4` | `1rem` |
| `--space-5` | `1.25rem` |
| `--space-6` | `1.5rem` |
| `--space-8` | `2rem` |

### Radius
| Token | Value |
|---|---|
| `--radius-full` | `9999px` |
| `--radius-lg` | `10px` |
| `--radius-md` | `6px` |
| `--radius-sm` | `2px` |
| `--radius-xl` | `16px` |

### Borders
| Token | Value |
|---|---|
| `--border-medium` | `2px` |
| `--border-thin` | `1px` |

### Shadows
| Token | Value |
|---|---|
| `--shadow-glow` | `0 0 20px rgba(59, 130, 246, 0.15)` |
| `--shadow-lg` | `0 8px 30px rgba(0,0,0,0.45)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.4)` |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.3)` |
| `--shadow-xl` | `0 20px 60px rgba(0,0,0,0.5)` |

### Motion
| Token | Value |
|---|---|
| `--duration-fast` | `150ms` |
| `--duration-normal` | `300ms` |
| `--duration-slow` | `500ms` |
| `--ease-in-out` | `cubic-bezier(0.42, 0, 0.58, 1)` |
| `--ease-out` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |

## 01 · Design Principles
These principles guide every design decision, ensuring consistency and clarity across the dark interface.

### I. Layered Depth
Use surface elevation through color — Void, Obsidian, Gunmetal — to create visual hierarchy. Each layer communicates importance through subtle tonal shifts, not heavy shadows.

### II. Blue as Signal
Cerulean is reserved for interactive elements: buttons, links, focus rings, and active states. It should draw the eye precisely where action is needed, never used decoratively.

### III. Readable Contrast
Cloud for headings, Silver for body, Pewter for secondary. Each text color is tuned for legibility against dark surfaces while maintaining a calm, low-fatigue reading experience.

## 02 · Color Palette
10 tokens extracted from a dark interface — 7 neutrals, 3 blues. Each token has a named role and clear usage context.

### Neutrals

| Token | Role | Hex | Usage |
|---|---|---|---|
| **Void** | Background | `#0B0F14` | Primary surface — deepest layer of the interface |
| **Obsidian** | Surface | `#151C25` | Cards, modals, and elevated containers |
| **Gunmetal** | Surface Alt | `#1E2A36` | Secondary surfaces, sidebar backgrounds |
| **Slate** | Border / Divider | `#2E3C4A` | Subtle separations between content areas |
| **Pewter** | Muted Text | `#6B7D8E` | Secondary labels, placeholders, captions |
| **Silver** | Body Text | `#9BAAB8` | Primary readable content on dark surfaces |
| **Cloud** | Heading Text | `#D6DEE6` | Titles, headings, high-emphasis text |

### Blues — Accent & Action

| Token | Role | Hex | Usage |
|---|---|---|---|
| **Cerulean** | Primary Action | `#3B82F6` | Buttons, links, active states, focus rings |
| **Ice** | Accent Light | `#60A5FA` | Hover states, badges, subtle highlights |
| **Abyss** | Accent Muted | `#1A3352` | Selected rows, active nav items, tinted cards |

### Semantic

| Token | Hex |
|---|---|
| **Success** | `#34D399` |
| **Warning** | `#FBBF24` |
| **Error** | `#F87171` |
| **Info** | `#60A5FA` |

## 03 · Typography
Open Sans serves all typographic roles — a versatile humanist sans-serif with excellent legibility on dark backgrounds.

### Font usage

| Role | Face | Notes | Sample |
|---|---|---|---|
| Display · Light 300 | **Open Sans Light** | Used for hero headlines and large display text. The thin weight creates elegant contrast against bold dark surfaces. | We give a voice to art in all its manifestations |
| Headings · Bold 700 | **Open Sans Bold** | Section headers and emphasis. Cloud color (#D6DEE6) ensures clear visual hierarchy on dark backgrounds. | Capital Letters Exhibition |
| Body · Regular 400 | **Open Sans Regular** | Body copy and general content. Silver color (#9BAAB8) is tuned for comfortable reading at length on dark surfaces. | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Designed for sustained readability. |
| UI · SemiBold 600 | **Open Sans SemiBold** | Navigation, buttons, labels, overlines. Used with wide letter-spacing and uppercase transforms for structural clarity. | Activities · Projects · News · Exhibitions |

### Type scale specimens

| Specimen | Token | Meta | Sample |
|---|---|---|---|
| **Hero / Display** | `--fs-hero` | Open Sans Light 300 clamp(3rem–4.5rem) / 1.1 --fs-hero | We give a voice to art |
| **Heading 1** | `--fs-h1` | Open Sans Bold 700 clamp(2.25rem–3.5rem) / 1.1 --fs-h1 | Capital Letters |
| **Heading 2** | `--fs-h2` | Open Sans SemiBold 600 clamp(1.75rem–2.5rem) / 1.25 --fs-h2 | Urban Art Exhibition |
| **Heading 3** | `--fs-h3` | Open Sans SemiBold 600 clamp(1.25rem–1.75rem) / 1.25 --fs-h3 | Collaborators & Partners |
| **Overline / Label** | `--fs-overline` | Open Sans Bold 700 0.6875rem / 0.15em tracking --fs-overline | Exhibitions · Activities · Projects |
| **Navigation** | `--fs-body-sm` | Open Sans SemiBold 600 0.875rem / 0.06em tracking --fs-body-sm | Activities    Projects    News    Exhibitions    About |
| **Body** | `--fs-body` | Open Sans Regular 400 1rem / 1.5 line-height --fs-body | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. |
| **Caption / Muted** | `--fs-body-sm` | Open Sans Regular 400 0.875rem / 1.5 line-height --fs-body-sm | Supporting text for additional context, dates, metadata, and secondary information. |

## 04 · Spacing Scale
A 4px base unit spacing scale. Generous padding around cards and sections reinforces the layered depth model.

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
Six button variants for different levels of emphasis. Primary uses Cerulean, with muted and surface variants for lower-priority actions.

### Primary — Cerulean Fill
| Label | Size | Variant class |
|---|---|---|
| Get Started | LG | `primary` |
| Get Started | MD | `primary` |
| Get Started | SM | `primary` |

### Outline — Blue Border
| Label | Size | Variant class |
|---|---|---|
| Explore | LG | `outline-blue` |
| Explore | MD | `outline-blue` |
| Explore | SM | `outline-blue` |

### Outline — Neutral Border
| Label | Size | Variant class |
|---|---|---|
| View More | LG | `outline` |
| View More | MD | `outline` |
| View More | SM | `outline` |

### Muted — Abyss Tint
| Label | Size | Variant class |
|---|---|---|
| Secondary | LG | `muted` |
| Secondary | MD | `muted` |
| Secondary | SM | `muted` |

### Surface — Gunmetal Fill
| Label | Size | Variant class |
|---|---|---|
| Tertiary | LG | `surface` |
| Tertiary | MD | `surface` |

### Ghost — Text Link
| Label | Size | Variant class |
|---|---|---|
| Learn More | LG | `ghost` |
| Learn More | MD | `ghost` |

## 06 · Shadows & Elevation
Deep, dark shadows for true depth. The glow variant uses Cerulean for focus states and interactive emphasis.

| Level | Token |
|---|---|
| Small | `--shadow-sm` |
| Medium | `--shadow-md` |
| Large | `--shadow-lg` |
| XL | `--shadow-xl` |
| Glow | `--shadow-glow` |

## 07 · Motion & Interaction
Subtle, professional interactions. The glow effect is unique to the dark theme — drawing attention through light emission.

### Interaction patterns
- Lift
- Scale
- Fade
- Glow

### Timing tokens
- Fast · 150ms
- Normal · 300ms
- Slow · 500ms

## 08 · Layout & Grid
12-column grid with generous gutters. Surface layering (Void → Obsidian → Gunmetal) defines spatial hierarchy.

**Specs:** Container: max-width 1200px · Gutter: 24px · Side padding: 32px–80px · Border radius: 10–16px

## 09 · Component Patterns
Core UI patterns adapted for the dark interface. Each component uses the layered depth model for visual elevation.

| Component | Notes |
|---|---|
| **Navigation Bar** | Open Sans SemiBold links. Active state uses Cerulean with bottom border accent. |
| **Content Card** | Obsidian surface with Slate border. Badge uses Abyss background with Ice text. |
| **Text Input** | Void background, Slate border. Focus state uses Cerulean border with subtle blue glow ring. |
| **Toggle Switch** | Slate track when off, Cerulean when on. Cloud thumb for contrast on both states. |

## 10 · Usage Guidelines
### ✓ Do
- Use the 3-tier surface system: Void → Obsidian → Gunmetal for depth
- Reserve Cerulean exclusively for interactive elements
- Use Abyss for selected/active states and tinted backgrounds
- Apply Cloud (#D6DEE6) for headings, Silver for body text
- Use Slate borders for subtle structural separation
- Add the blue glow shadow for focus and hover emphasis
- Keep Open Sans weights consistent: 300 display, 700 headings, 400 body, 600 UI

### ✕ Don't
- Use pure white (#FFF) for text — Cloud is the brightest text token
- Overuse Cerulean for decoration — it's a signal color
- Place Silver body text on Gunmetal (insufficient contrast)
- Mix surface levels incorrectly (e.g., Obsidian card on Obsidian bg)
- Use heavy drop shadows on dark surfaces — prefer subtle or glow
- Introduce additional accent hues outside the blue family
- Reduce border-radius below 6px — the system favors soft edges

---
Dark Interface Design System · Version 2.0 · 10 Color Tokens · Open Sans
