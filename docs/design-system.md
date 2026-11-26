# Haliyora UI design system

UI follows the supplied Stitch reference and uses semantic CSS classes instead
of a runtime Tailwind CDN dependency.

## Foundations

| Token | Value | Use |
| --- | --- | --- |
| Brand teal | `#1699A1` | Primary accents, links, consultation highlights |
| Deep indigo | `#353578` | Headings, navigation, dark section backgrounds |
| Warm orange | `#EA580C` | Primary actions and emphasis |
| Ink | `#0F172A` | Body text and footer background |
| Soft surface | `#F8FAFC` | Alternating section backgrounds |
| Brand mint | `#CCFBF1` | Soft emphasis and supporting icons |

Typography uses Inter for display/UI labels and Source Sans 3 for body copy.
Spacing and color values are centralized as custom properties in
`src/app/globals.css`.

## Component conventions

- Keep page sections semantic and give in-page navigation targets stable IDs.
- Reuse `.button`, `.eyebrow`, `.section-container`, and `.section-space` for
  consistent action, label, and layout treatments.
- Keep content collections in `src/data/site-content.ts`; interactive controls
  belong in focused client components under `src/app/components/`.
- Preserve visible keyboard focus, descriptive image text, and reduced-motion
  support when extending the interface.
