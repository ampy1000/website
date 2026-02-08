# Design System — Light Interface
> Design System v2.1 — Light Interface
## 10 tokens extracted from a light interface
A comprehensive design system built on a clean white palette — 7 neutrals and 3 blues. Designed for clarity, openness, and focus using Open Sans across all typographic roles.
### Meta
| Key | Value |
|---|---|
| Aesthetic | Light Precision |
| Palette | 7 Neutrals · 3 Blues |
| Typeface | Open Sans |
| Surfaces | White & Borders |

## Tokens
This document contains the exported design tokens (colors, typography, spacing, radius, shadows, and motion) plus usage guidance.

### Colors
| Token | Value |
|---|---|
| `--abyss` | `#EBF4FF` |
| `--cerulean` | `#3B82F6` |
| `--cloud` | `#1A2332` |
| `--error` | `#F87171` |
| `--gunmetal` | `#FFFFFF` |
| `--ice` | `#2563EB` |
| `--info` | `#2563EB` |
| `--obsidian` | `#FFFFFF` |
| `--pewter` | `#6B7D8E` |
| `--silver` | `#4B5563` |
| `--slate` | `#D8DFE8` |
| `--success` | `#34D399` |
| `--void` | `#FFFFFF` |
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
| `--shadow-glow` | `0 0 20px rgba(59, 130, 246, 0.1)` |
| `--shadow-lg` | `0 8px 30px rgba(0,0,0,0.1)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.06)` |
| `--shadow-xl` | `0 20px 60px rgba(0,0,0,0.12)` |

### Motion
| Token | Value |
|---|---|
| `--duration-fast` | `150ms` |
| `--duration-normal` | `300ms` |
| `--duration-slow` | `500ms` |
| `--ease-in-out` | `cubic-bezier(0.42, 0, 0.58, 1)` |
| `--ease-out` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` |

## 01 · Design Principles
These principles guide every design decision, ensuring consistency and clarity across the light interface.

### I. White Space & Borders
Use a clean white background throughout. Visual hierarchy is created through borders, spacing, and subtle shadows rather than surface color variation. All surfaces are white.

### II. Blue as Signal
Cerulean is reserved for interactive elements: buttons, links, focus rings, and active states. It should draw the eye precisely where action is needed, never used decoratively.

### III. Readable Contrast
Cloud (#1A2332) for headings, Silver (#4B5563) for body, Pewter for secondary. Each text color is tuned for legibility against white surfaces while maintaining a calm, professional reading experience.

## 02 · Color Palette
10 tokens extracted from a light interface — 7 neutrals, 3 blues. Each token has a named role and clear usage context.

### Neutrals

| Token | Role | Hex | Usage |
|---|---|---|---|
| **Void** | Background | `#FFFFFF` | Primary surface — clean white base |
| **Obsidian** | Surface | `#FFFFFF` | Cards, modals, and elevated containers (white, separated by borders/shadows) |
| **Gunmetal** | Surface Alt | `#FFFFFF` | Secondary surfaces, sidebar backgrounds (white, separated by borders) |
| **Slate** | Border / Divider | `#D8DFE8` | Light gray separations between content areas |
| **Pewter** | Muted Text | `#6B7D8E` | Secondary labels, placeholders, captions |
| **Silver** | Body Text | `#4B5563` | Primary readable content on white surfaces |
| **Cloud** | Heading Text | `#1A2332` | Titles, headings, high-emphasis text |

### Blues — Accent & Action

| Token | Role | Hex | Usage |
|---|---|---|---|
| **Cerulean** | Primary Action | `#3B82F6` | Buttons, links, active states, focus rings |
| **Ice** | Accent Dark | `#2563EB` | Hover states, badges, emphasis highlights |
| **Abyss** | Accent Tint | `#EBF4FF` | Selected rows, active nav items, tinted backgrounds |

### Semantic

| Token | Hex |
|---|---|
| **Success** | `#34D399` |
| **Warning** | `#FBBF24` |
| **Error** | `#F87171` |
| **Info** | `#60A5FA` |

## 03 · Typography
Open Sans serves all typographic roles — a versatile humanist sans-serif with excellent legibility on white backgrounds.

### Font usage

| Role | Face | Notes | Sample |
|---|---|---|---|
| Display · Light 300 | **Open Sans Light** | Used for hero headlines and large display text. The thin weight creates elegant contrast against clean white surfaces. | We give a voice to art in all its manifestations |
| Headings · Bold 700 | **Open Sans Bold** | Section headers and emphasis. Cloud color (#1A2332) ensures clear visual hierarchy on white backgrounds. | Capital Letters Exhibition |
| Body · Regular 400 | **Open Sans Regular** | Body copy and general content. Silver color (#4B5563) is tuned for comfortable reading at length on white surfaces. | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Designed for sustained readability. |
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
Soft, subtle shadows for gentle elevation. The glow variant uses Cerulean for focus states and interactive emphasis.

| Level | Token |
|---|---|
| Small | `--shadow-sm` |
| Medium | `--shadow-md` |
| Large | `--shadow-lg` |
| XL | `--shadow-xl` |
| Glow | `--shadow-glow` |

## 07 · Motion & Interaction
Subtle, professional interactions. The glow effect draws attention through soft blue emission on white surfaces.

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
12-column grid with generous gutters. White surfaces with borders and spacing define spatial hierarchy.

**Specs:** Container: max-width 1200px · Gutter: 24px · Side padding: 32px–80px · Border radius: 10–16px

## 09 · Component Patterns
Core UI patterns adapted for the light interface. Each component uses borders and shadows for visual separation.

| Component | Notes |
|---|---|
| **Navigation Bar** | Open Sans SemiBold links. Active state uses Cerulean with bottom border accent. |
| **Content Card** | White surface with Slate border. Badge uses Abyss (#EBF4FF) background with Ice text. |
| **Text Input** | White background, Slate border. Focus state uses Cerulean border with subtle blue glow ring. |
| **Toggle Switch** | Slate track when off, Cerulean when on. White thumb for contrast on both states. |

## 10 · Usage Guidelines
### Do
- Use white backgrounds throughout, separated by borders and spacing
- Reserve Cerulean exclusively for interactive elements
- Use Abyss (#EBF4FF) for selected/active states and tinted backgrounds
- Apply Cloud (#1A2332) for headings, Silver (#4B5563) for body text
- Use Slate (#D8DFE8) borders for subtle structural separation
- Add the blue glow shadow for focus and hover emphasis
- Keep Open Sans weights consistent: 300 display, 700 headings, 400 body, 600 UI

### Don't
- Use pure black (#000) for text — Cloud (#1A2332) is the darkest text token
- Overuse Cerulean for decoration — it's a signal color
- Use colored or gray backgrounds for surfaces — keep them white
- Use heavy drop shadows — prefer subtle, low-opacity shadows
- Introduce additional accent hues outside the blue family
- Reduce border-radius below 6px — the system favors soft edges

---
Light Interface Design System · Version 2.1 · 10 Color Tokens · Open Sans
