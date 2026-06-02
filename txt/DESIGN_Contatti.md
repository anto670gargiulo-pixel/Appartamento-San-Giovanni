---
name: San Giovanni Heritage Design System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#42474c'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#73787c'
  outline-variant: '#c2c7cc'
  surface-tint: '#486173'
  primary: '#486173'
  on-primary: '#ffffff'
  primary-container: '#8fa9bc'
  on-primary-container: '#253e4e'
  inverse-primary: '#b0cade'
  secondary: '#77574d'
  on-secondary: '#ffffff'
  secondary-container: '#fed3c7'
  on-secondary-container: '#795950'
  tertiary: '#625e56'
  on-tertiary: '#ffffff'
  tertiary-container: '#aba59c'
  on-tertiary-container: '#3e3b34'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbe6fa'
  primary-fixed-dim: '#b0cade'
  on-primary-fixed: '#011e2d'
  on-primary-fixed-variant: '#304a5a'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#e7bdb1'
  on-secondary-fixed: '#2c160e'
  on-secondary-fixed-variant: '#5d4037'
  tertiary-fixed: '#e8e2d8'
  tertiary-fixed-dim: '#ccc6bc'
  on-tertiary-fixed: '#1e1b15'
  on-tertiary-fixed-variant: '#4a463f'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-mobile: 24px
  container-padding-desktop: 80px
  section-gap-mobile: 48px
  section-gap-desktop: 96px
  gutter: 16px
---

## Brand & Style

The design system is crafted for a luxury boutique stay in Parma, blending the historical charm of Italian heritage with contemporary minimalist elegance. The brand personality is welcoming, professional, and premium, evoking the feeling of a private gallery within a home.

The visual style is a mix of **Modern Minimalism** and **Boutique Hotel Chic**. It prioritizes high-quality whitespace to reflect the spaciousness and cleanliness of the property. The aesthetic is "warm-modern," avoiding the clinical feel of standard hotels by introducing tactile textures and earth tones inspired by the apartment's wood flooring and antique furnishings.

**Key Visual Principles:**
- **Atmospheric Clarity:** Clean lines and ample breathing room.
- **Heritage Meets Modern:** Classic serif typography paired with a functional, high-readability sans-serif.
- **Sophisticated Warmth:** A balance between the cooling effect of powder blue and the grounding warmth of timber tones.

## Colors

The palette is directly inspired by the apartment's interior: the signature "Azzurro Polvere" (powder blue) walls and the dark wood "Noce" (walnut) furniture.

- **Primary (Powder Blue):** Used for soft backgrounds, active states, and primary UI elements. It evokes calm and luxury.
- **Secondary (Earth Brown):** Used for primary text, deep borders, and sophisticated accents. It represents the structural elements of the home.
- **Tertiary (Warm Bone):** A soft off-white used for section backgrounds to provide a subtler transition than pure white.
- **Neutral (Pure White):** The core of the design, used for maximum whitespace and a sense of cleanliness.
- **WhatsApp Green:** Reserved exclusively for communication triggers to ensure instant recognition and high conversion.

## Typography

The typography system creates an editorial, high-end feel. 

**Playfair Display** is used for headlines to echo the historical and artistic context of Parma. It should be used with slightly tighter letter-spacing for large displays.

**Inter** is the workhorse for all functional information. It ensures high legibility on mobile devices, especially for technical details like booking dates, amenities, and house rules. Body text should maintain a generous line height to ensure a relaxed reading experience.

## Layout & Spacing

This design system utilizes a **Mobile-First Fixed Grid** strategy. On mobile devices, content follows a single-column layout with generous 24px side margins to ensure the interface feels airy, never cramped.

**Layout Principles:**
- **Vertical Rhythm:** Sections are separated by large gaps to emphasize the minimalist "gallery" approach.
- **The "Boutique" Margin:** Elements are often inset further than standard UI to create a framed, intentional look.
- **Desktop Reflow:** On larger screens, the layout expands to a 12-column centered grid with a maximum width of 1200px, surrounded by expansive white margins.

## Elevation & Depth

To maintain the minimalist aesthetic, depth is created through **Tonal Layering** rather than heavy shadows.

- **Level 0 (Base):** Pure White (#FFFFFF).
- **Level 1 (Cards/Containers):** Powder Blue at 5% opacity or Warm Bone (#EAE3D9) with a 1px solid border in a slightly darker tint.
- **Shadows:** Only used on high-priority floating elements (like the WhatsApp button). Use a "Natural Ambient" shadow: `0px 12px 24px rgba(93, 64, 55, 0.08)`—a soft, brown-tinted shadow that feels more organic than grey.
- **Glassmorphism:** Reserved for the navigation bar to allow the beautiful photography of the apartment to peek through as the user scrolls.

## Shapes

The shape language is **Soft (0.25rem)**. While modern, the design avoids overly "bubbly" or circular elements to maintain a professional hotel standard. 

- **Images:** Should feature slight rounding to soften the visual impact of photography.
- **Buttons:** Rectangular with soft corners to suggest stability and architectural structure.
- **Inputs:** Clean, 1px bordered boxes with soft corners, echoing the frames of the artwork found in the apartment.

## Components

### Buttons
- **Primary:** Earth Brown background with White text. High contrast, authoritative.
- **Secondary:** White background, 1px Powder Blue border, Powder Blue text. 
- **WhatsApp Floating Action Button (FAB):** Circular, WhatsApp Green background, featuring the icon and the label "Parla con noi." This is the only element that uses a distinct drop shadow for maximum prominence.

### Cards
Cards for amenities or rooms should use a "Flat Frame" style: no shadow, a very light Tertiary background, and 1px borders. Images within cards should have a subtle zoom-on-hover effect to provide a premium interactive feel.

### Lists
Lists (like House Rules or Amenities) should use custom iconography in Powder Blue rather than standard bullets. Icons should be thin-stroke (1px or 1.5px) to match the elegance of the typography.

### Input Fields
Inputs for booking inquiries should be minimalist: only a bottom border that thickens and changes to Earth Brown on focus. Labels use the `label-sm` style, floating above the input.

### Image Gallery
A masonry-style gallery for mobile, or a large "hero" slider for desktop. Every photo should be framed with consistent spacing to mimic a physical art gallery.