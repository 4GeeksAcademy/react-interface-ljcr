---
name: Voyage Minimalist
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5a403f'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#8e706f'
  outline-variant: '#e2bebc'
  surface-tint: '#b52330'
  primary: '#b52330'
  on-primary: '#ffffff'
  primary-container: '#ff5a5f'
  on-primary-container: '#61000e'
  inverse-primary: '#ffb3b0'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#006c4c'
  on-tertiary: '#ffffff'
  tertiary-container: '#00a879'
  on-tertiary-container: '#003423'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b0'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001b'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#78fac4'
  tertiary-fixed-dim: '#59ddaa'
  on-tertiary-fixed: '#002115'
  on-tertiary-fixed-variant: '#005139'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  surface-white: '#FFFFFF'
  border-subtle: '#DDDDDD'
  text-muted: '#717171'
typography:
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
  title-md:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 24px
---

## Brand & Style

The design system is centered on a "Human-Centric Minimalism" philosophy. It prioritizes clarity, ease of use, and a sense of belonging, specifically tailored for the high-trust environment of mobile hospitality. The aesthetic is clean and breathable, utilizing significant white space to allow high-quality photography—the "window" to the travel experience—to take center stage.

The style is **Modern/Minimalist** with a focus on tactile interactions. It avoids unnecessary ornamentation, relying instead on precise typography, subtle transitions, and a vibrant signature accent to guide user intent. The emotional response should be one of reliability, warmth, and effortless discovery.

## Colors

The palette is anchored by a high-energy coral primary color, used purposefully for calls to action and critical brand moments. The core of the interface is built on a spectrum of whites and ultra-light grays to create a "canvas" effect.

- **Primary (#FF5A5F):** Reserved for primary buttons, active states, and brand-identifying icons.
- **Secondary (#222222):** Used for maximum contrast in headings and primary body text to ensure WCAG AAA readability.
- **Neutral/Background (#F7F7F7):** Utilized for secondary groupings, input backgrounds, and subtle section dividers.
- **Surface White (#FFFFFF):** The default background for all cards and primary containers to maximize the impact of imagery.

## Typography

The design system utilizes **Be Vietnam Pro** across all levels to achieve a contemporary, friendly, and highly legible feel. The typographic scale is designed to create a clear hierarchy between property titles, pricing, and supporting metadata.

For mobile-specific views, large headlines scale down to ensure content remains "above the fold" while maintaining bold visual weight. Captions and labels use slightly increased letter spacing to ensure clarity at small sizes, particularly for utility information like "Superhost" badges or rating counts.

## Layout & Spacing

This design system employs a **Fluid Grid** model with a hard focus on mobile-first constraints. 

- **Grid:** A 4-column grid for mobile and 12-column for desktop. 
- **Margins:** 24px horizontal margins on mobile to provide breathing room and prevent thumb-crowding.
- **Rhythm:** An 8px linear scale governs all padding and margins. Vertical stacking follows a logic where related elements (e.g., title and subtitle) use 4px, while distinct sections use 24px or 32px to denote separation without the need for heavy lines.
- **Responsive Behavior:** Cards and image galleries should span the full width of the grid minus margins, with horizontal overflow patterns used for category browsing.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Ambient Shadows** rather than stark borders.

1.  **Level 0 (Base):** The main background (`#FFFFFF` or `#F7F7F7`).
2.  **Level 1 (Cards):** Floating cards use an extremely soft, diffused shadow (Blur: 15px, Opacity: 4%, Color: `#000000`) to appear lifted from the background without feeling heavy.
3.  **Level 2 (Modals/Overlays):** Full-screen takeovers or bottom sheets use a subtle backdrop blur (10px) on the layers beneath them to maintain context while focusing the user.
4.  **Interactive States:** On press, elements should slightly shrink (98% scale) rather than changing shadow depth, reinforcing a tactile, physical feel.

## Shapes

The shape language is consistently **Rounded**, reflecting an approachable and safe brand personality. 

- **Standard Elements:** Buttons, input fields, and search bars use a 0.5rem (8px) radius.
- **Containers:** Large property cards and featured banners use a more pronounced 1rem (16px) radius to create a soft, framed look for imagery.
- **Interactive Pill:** Elements like filters or "search" triggers use a fully rounded (Pill) shape to distinguish them from content cards.

## Components

- **Buttons:** Primary buttons are solid `#FF5A5F` with white text, utilizing a subtle gradient for a slightly "squishy" tactile feel. Secondary buttons use a thick 1px border of `#222222`.
- **Search Bar:** A prominent, floating pill-shaped component at the top of the viewport. It includes a shadow to denote its persistent availability.
- **Cards:** Property cards are borderless. The image is the primary focus (16px corner radius), followed by a title in `title-md` and secondary info in `text-muted`.
- **Chips/Filters:** Small, pill-shaped outlines that transition to a solid `#222222` background when selected.
- **Inputs:** Clean, 1px bordered boxes that transform. On focus, the border thickens to 2px in `#222222`.
- **Bottom Navigation:** A persistent, blurred-background bar with clear icon-and-label pairings. The active state is highlighted in the primary coral.
- **Badges:** Small, high-contrast tags (e.g., "Guest favorite") use a semi-bold font and are often placed as an overlay on the top-left of image components.