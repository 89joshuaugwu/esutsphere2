# ESUTSphere Design System v2.0

> Unified design system for ESUTSphere — the academic social hub for ESUT students.
> Merged from Peerlist, Hashnode, and ESUT Portal references. Elevated for Nigerian campus social platform.
> Stack: Next.js 16.2.6 · Tailwind CSS v4.3.0 · Motion v12 · Firebase v12 · Cloudinary v2
> Updated: May 2026

---

## 1. Visual Theme & Atmosphere

ESUTSphere's design language blends **academic authority with social energy**. Dark, immersive, alive — built for Nigerian university students who expect a platform that feels as premium as global apps but speaks to their campus experience.

**Key Characteristics**
- Deep dark surfaces with layered depth — multi-toned navy/charcoal, NOT flat black
- Glassmorphism cards with frosted-glass borders
- Electric purple as primary brand identity — academic yet vibrant
- Cyan/teal as interactive accent — signals action and engagement
- Amber/gold for achievement, badges, highlights — Nigerian academic prestige
- Instrument Serif for display authority; Geist for all UI
- Micro-animations on every interactive element
- Mobile-first with bottom tab navigation on small screens
- Google Auth → multi-step onboarding → pending approval state
- Social feed: reactions, comments, shares, follows — campus-native

---

## 2. Color Palette & Roles

### Brand Colors

| Token | Hex | Role |
|-------|-----|------|
| `--color-brand` | `#7C3AED` | Primary CTA buttons, active nav, brand identity |
| `--color-brand-light` | `#A855F7` | Hover states, gradient endpoints |
| `--color-brand-dim` | `#5B21B6` | Pressed/active states |
| `--color-brand-glow` | `rgba(124, 58, 237, 0.25)` | Focus rings, glow effects |

### Accent Colors

| Token | Hex | Role |
|-------|-----|------|
| `--color-cyan` | `#06B6D4` | Interactive highlights, links, reaction counts |
| `--color-cyan-light` | `#22D3EE` | Hover on accent elements |
| `--color-gold` | `#F59E0B` | Badges, top contributor, pinned content |
| `--color-gold-light` | `#FCD34D` | Badge borders, warm glow |

### Semantic / Status

| Token | Hex | Role |
|-------|-----|------|
| `--color-success` | `#10B981` | Approvals, verified, upload success |
| `--color-success-bg` | `rgba(16, 185, 129, 0.12)` | Success banner backgrounds |
| `--color-error` | `#EF4444` | Rejections, form errors, destructive actions |
| `--color-error-bg` | `rgba(239, 68, 68, 0.12)` | Error banner backgrounds |
| `--color-warning` | `#F59E0B` | Pending states, caution |
| `--color-warning-bg` | `rgba(245, 158, 11, 0.12)` | Warning backgrounds |
| `--color-info` | `#06B6D4` | Info banners, tips |

### Background Scale

| Token | Hex | Role |
|-------|-----|------|
| `--bg-base` | `#080810` | Page background — deepest layer |
| `--bg-surface-1` | `#0F0F1A` | Sidebar, secondary panels |
| `--bg-surface-2` | `#16162A` | Card backgrounds, modal backdrops |
| `--bg-surface-3` | `#1E1E35` | Elevated cards, dropdown backgrounds |
| `--bg-glass` | `rgba(30, 30, 53, 0.6)` | Glassmorphism overlay |
| `--bg-glass-border` | `rgba(255, 255, 255, 0.08)` | Glass card border |
| `--bg-overlay` | `rgba(8, 8, 16, 0.85)` | Modal overlay, backdrop |

### Text Scale

| Token | Hex | Role |
|-------|-----|------|
| `--text-primary` | `#F8FAFC` | Headlines, primary content |
| `--text-secondary` | `#CBD5E1` | Subheadings, descriptions |
| `--text-muted` | `#94A3B8` | Timestamps, metadata, helper text |
| `--text-disabled` | `#475569` | Disabled, placeholder text |
| `--text-inverse` | `#0F0F1A` | Text on light/brand surfaces |

### Border Scale

| Token | Value | Role |
|-------|-------|------|
| `--border-subtle` | `rgba(255, 255, 255, 0.06)` | Dividers |
| `--border-default` | `rgba(255, 255, 255, 0.10)` | Input borders, card edges |
| `--border-strong` | `rgba(255, 255, 255, 0.18)` | Focused inputs, active cards |
| `--border-brand` | `rgba(124, 58, 237, 0.50)` | Brand-focused borders |

---

## 3. Logo & Brand Identity

### Logo Spec
Stylized lowercase **"e"** enclosed in orbital network rings. Gradient: electric purple `#7C3AED` → vibrant cyan `#06B6D4`. Glowing nodes at ring intersections.

**Files:**
- `public/logo.png` — 512×512px transparent background (app header, og-image)
- `public/favicon.png` — 32×32px transparent background (browser tab)
- `public/apple-touch-icon.png` — 180×180px (PWA iOS)

**Usage Rules:**
- Dark backgrounds only — no light-mode variant
- Never distort aspect ratio — always square
- Minimum display size: 24×24px
- Never add extra glow/shadow — self-contained
- Top nav: 32×32px beside "ESUTSphere" wordmark
- Emails: 48×48px centered

**CSS gradient recreation:**
```css
background: linear-gradient(135deg, #7C3AED 0%, #5B7AFF 50%, #06B6D4 100%);
```

---

## 4. Typography Rules

### Font Families

**Display:** `Instrument Serif` — for hero headlines, page titles ONLY
- Fallback: `'Instrument Serif', Georgia, 'Times New Roman', serif`
- Source: Google Fonts

**UI:** `Geist` — for ALL body text, nav, buttons, labels, captions, inputs
- Fallback: `'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Source: Vercel Geist

> **Rule:** Instrument Serif for display ONLY. Geist everywhere else. Never mix within the same component.

### Type Scale

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Display XL | Instrument Serif | 56px | 400 | 64px | -0.5px |
| Display L | Instrument Serif | 48px | 400 | 56px | -0.5px |
| Display M | Instrument Serif | 36px | 400 | 44px | -0.25px |
| Heading 1 | Geist | 28px | 700 | 36px | -0.25px |
| Heading 2 | Geist | 22px | 700 | 30px | -0.25px |
| Heading 3 | Geist | 18px | 600 | 26px | 0px |
| Heading 4 | Geist | 15px | 600 | 22px | 0px |
| Body Large | Geist | 16px | 400 | 26px | 0px |
| Body Regular | Geist | 14px | 400 | 22px | 0px |
| Body Small | Geist | 13px | 400 | 20px | 0px |
| Caption | Geist | 12px | 400 | 18px | 0.1px |
| Label | Geist | 13px | 500 | 18px | 0.2px |
| Button | Geist | 14px | 600 | 20px | 0px |
| Nav Item | Geist | 14px | 500 | 20px | 0px |
| Badge | Geist | 11px | 600 | 16px | 0.5px |

---

## 5. Tailwind v4 Setup (IMPORTANT — different from v3)

> ⚠️ ESUTSphere uses Tailwind CSS v4.3.0. Config is CSS-first — no `tailwind.config.js`.

### Installation
```bash
npm install tailwindcss @tailwindcss/postcss
```

### postcss.config.mjs
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### globals.css (Tailwind v4 syntax)
```css
/* v4: use @import instead of @tailwind directives */
@import "tailwindcss";

/* All design tokens live here in @theme — replaces tailwind.config.js */
@theme {
  /* Brand */
  --color-brand:       #7C3AED;
  --color-brand-light: #A855F7;
  --color-brand-dim:   #5B21B6;

  /* Accents */
  --color-cyan:        #06B6D4;
  --color-cyan-light:  #22D3EE;
  --color-gold:        #F59E0B;
  --color-gold-light:  #FCD34D;

  /* Semantic */
  --color-success: #10B981;
  --color-error:   #EF4444;
  --color-warning: #F59E0B;

  /* Backgrounds */
  --color-bg-base:      #080810;
  --color-bg-surface-1: #0F0F1A;
  --color-bg-surface-2: #16162A;
  --color-bg-surface-3: #1E1E35;

  /* Text */
  --color-text-primary:   #F8FAFC;
  --color-text-secondary: #CBD5E1;
  --color-text-muted:     #94A3B8;
  --color-text-disabled:  #475569;

  /* Fonts */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-ui:      'Geist', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Radius */
  --radius-sm:   6px;
  --radius-md:   10px;
  --radius-lg:   14px;
  --radius-xl:   20px;
  --radius-2xl:  24px;
  --radius-full: 9999px;

  /* Layout */
  --nav-height:    64px;
  --sidebar-width: 256px;
  --content-max:   680px;
  --page-max:      1280px;
}

/* Tailwind v4 renamed utilities — important to know */
/* bg-gradient-to-r  → bg-linear-to-r   */
/* flex-grow         → grow             */
/* flex-shrink       → shrink           */
/* outline-none      → outline-hidden   */
/* !flex             → flex!            */
/* bg-opacity-50     → bg-black/50      */
```

---

## 6. Component Stylings

### Buttons

#### Primary Button
```css
background: #7C3AED;
color: #F8FAFC;
font: Geist 14px weight 600;
padding: 10px 20px;
border-radius: 10px;
border: 1px solid rgba(124, 58, 237, 0.5);
height: 40px;
transition: all 0.2s ease;

/* Hover */
background: #A855F7;
box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
transform: translateY(-1px);

/* Active */
background: #5B21B6;
transform: translateY(0);

/* Disabled */
background: rgba(124, 58, 237, 0.3);
color: rgba(248, 250, 252, 0.4);
cursor: not-allowed;
```

#### Secondary Button (Glass Outline)
```css
background: rgba(124, 58, 237, 0.08);
color: #A855F7;
padding: 10px 20px;
border-radius: 10px;
border: 1px solid rgba(124, 58, 237, 0.35);
height: 40px;

/* Hover */
background: rgba(124, 58, 237, 0.18);
border-color: rgba(168, 85, 247, 0.6);
```

#### Ghost Button
```css
background: transparent;
color: #CBD5E1;
padding: 8px 16px;
border-radius: 8px;
border: none; height: 36px;

/* Hover */
background: rgba(255, 255, 255, 0.06);
color: #F8FAFC;
```

#### Danger Button
```css
background: rgba(239, 68, 68, 0.12);
color: #EF4444;
border: 1px solid rgba(239, 68, 68, 0.3);
border-radius: 10px;
padding: 10px 20px; height: 40px;

/* Hover */
background: rgba(239, 68, 68, 0.22);
```

#### Google Auth Button (special)
```css
background: #FFFFFF;
color: #0F0F1A;
font: Geist 15px weight 600;
padding: 12px 24px;
border-radius: 12px; border: none;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
height: 48px;
display: flex; align-items: center; gap: 12px;

/* Hover */
transform: translateY(-2px);
box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
```

#### Mobile FAB (Floating Action Button)
```css
/* Fixed bottom-right — mobile only (≤639px) */
position: fixed;
bottom: calc(64px + 16px); /* above bottom tab bar */
right: 16px;
width: 56px; height: 56px;
border-radius: 50%;
background: linear-gradient(135deg, #7C3AED, #06B6D4);
color: #FFFFFF; border: none;
box-shadow: 0 8px 32px rgba(124, 58, 237, 0.5);
display: flex; align-items: center; justify-content: center;
font-size: 24px; z-index: 90;
transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);

/* Hover / tap */ transform: scale(1.08);
/* Active */     transform: scale(0.95);
```

---

### Navigation

#### Top Navigation Bar
```css
background: rgba(8, 8, 16, 0.85);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border-bottom: 1px solid rgba(255, 255, 255, 0.08);
height: 64px; padding: 0 24px;
position: sticky; top: 0; z-index: 100;
```

#### Sidebar Navigation (Desktop)
```css
background: #0F0F1A;
border-right: 1px solid rgba(255, 255, 255, 0.06);
width: 256px;
position: fixed; left: 0; top: 64px;
height: calc(100vh - 64px);
padding: 20px 16px; overflow-y: auto;
```

#### Nav Item
```css
color: #94A3B8; font: Geist 14px weight 500;
padding: 10px 14px; border-radius: 8px;
display: flex; align-items: center; gap: 12px;
transition: all 0.15s ease;

/* Hover */
background: rgba(255, 255, 255, 0.06); color: #CBD5E1;

/* Active */
background: rgba(124, 58, 237, 0.15); color: #A855F7;
border-left: 3px solid #7C3AED; font-weight: 600;
```

#### Bottom Tab Bar (Mobile — ≤639px)
```css
background: rgba(15, 15, 26, 0.95);
backdrop-filter: blur(20px);
border-top: 1px solid rgba(255, 255, 255, 0.08);
height: 64px;
position: fixed; bottom: 0; left: 0; right: 0;
display: flex; justify-content: space-around; align-items: center;
z-index: 100; padding-bottom: env(safe-area-inset-bottom);
```
**Tab items:** Home · Library · Upload (FAB center) · Notifications · Profile

---

### Cards

#### Standard Content Card
```css
background: rgba(30, 30, 53, 0.6);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 16px; padding: 20px;
transition: all 0.2s ease;

/* Hover */
border-color: rgba(255, 255, 255, 0.14);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
transform: translateY(-2px);
```

#### Document Card
```css
background: #16162A;
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 14px; padding: 16px;
border-top: 3px solid var(--type-color);
transition: all 0.2s ease;

/* Hover */
background: #1E1E35;
border-color: rgba(124, 58, 237, 0.3);
```

**Document type accent colors:**

| Type | Color | Token |
|------|-------|-------|
| Notes | `#7C3AED` | Purple |
| Past Questions | `#F59E0B` | Gold |
| Research | `#06B6D4` | Cyan |
| Assignments | `#10B981` | Green |
| Seminar | `#EC4899` | Pink |
| Textbook | `#F97316` | Orange |
| Project | `#8B5CF6` | Violet |
| Handout | `#94A3B8` | Slate |

#### Profile Card
```css
background: linear-gradient(135deg, rgba(30,30,53,0.9), rgba(22,22,42,0.9));
border: 1px solid rgba(255, 255, 255, 0.10);
border-radius: 20px; padding: 24px;
overflow: hidden; position: relative;

/* Top gradient strip */
&::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, #7C3AED, #06B6D4);
}
```

---

### Inputs & Forms

#### Text Input
```css
background: rgba(255, 255, 255, 0.04);
border: 1px solid rgba(255, 255, 255, 0.10);
border-radius: 10px; color: #F8FAFC;
font: Geist 14px weight 400; padding: 10px 14px;
height: 44px; width: 100%;
transition: all 0.2s ease;

/* Focus */
border-color: #7C3AED;
box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
background: rgba(124, 58, 237, 0.05);

/* Error */
border-color: #EF4444;
box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
```

#### File Upload Zone
```css
background: rgba(124, 58, 237, 0.04);
border: 2px dashed rgba(124, 58, 237, 0.3);
border-radius: 14px; padding: 32px 24px;
text-align: center; cursor: pointer;

/* Hover / Drag Over */
background: rgba(124, 58, 237, 0.10);
border-color: #7C3AED;
box-shadow: 0 0 20px rgba(124, 58, 237, 0.15);
```

---

### Search

#### Global Search Bar (Top Nav)
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.08);
border-radius: 10px; height: 40px;
padding: 0 14px 0 40px; /* 40px left for search icon */
width: 280px; color: #F8FAFC;
font: Geist 14px; transition: all 0.2s ease;

/* Focus */
width: 360px;
border-color: rgba(124, 58, 237, 0.5);
box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);
background: rgba(124, 58, 237, 0.06);
```

#### Search Results Overlay
```css
position: absolute; top: calc(100% + 8px); left: 0;
min-width: 400px;
background: #1E1E35;
border: 1px solid rgba(255, 255, 255, 0.12);
border-radius: 14px;
box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
overflow: hidden; z-index: 200;
animation: search-drop 0.18s cubic-bezier(0.16, 1, 0.3, 1);

@keyframes search-drop {
  from { opacity: 0; transform: translateY(-8px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.search-section-label {
  font: Geist 11px weight 700; color: #475569;
  letter-spacing: 0.8px; text-transform: uppercase;
  padding: 10px 16px 6px;
}

.search-result-row {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 16px; cursor: pointer;
  transition: background 0.12s ease;
}
.search-result-row:hover { background: rgba(124, 58, 237, 0.10); }

.search-highlight { color: #A855F7; font-weight: 600; }

.search-empty {
  padding: 24px 16px; text-align: center;
  color: #475569; font: Geist 14px;
}
```

---

### Notification Panel

#### Bell Icon (Nav)
```css
position: relative; width: 40px; height: 40px;
border-radius: 8px; cursor: pointer; color: #94A3B8;
display: flex; align-items: center; justify-content: center;
transition: all 0.15s ease;

/* Hover */
background: rgba(255, 255, 255, 0.06); color: #F8FAFC;

/* Unread dot */
.unread-dot {
  position: absolute; top: 6px; right: 6px;
  width: 8px; height: 8px; border-radius: 50%;
  background: #7C3AED; border: 2px solid #080810;
  animation: pulse-dot 2s ease-in-out infinite;
}

/* Count badge */
.unread-badge {
  position: absolute; top: 2px; right: 2px;
  min-width: 18px; height: 18px; border-radius: 9999px;
  background: #7C3AED; color: white;
  font: Geist 10px weight 700;
  display: flex; align-items: center; justify-content: center;
  padding: 0 4px; border: 2px solid #080810;
}
```

#### Notification Dropdown Panel
```css
position: absolute; top: calc(100% + 8px); right: 0;
width: 380px; max-height: 520px;
background: #1E1E35;
border: 1px solid rgba(255, 255, 255, 0.10);
border-radius: 16px;
box-shadow: 0 16px 56px rgba(0, 0, 0, 0.6);
overflow: hidden; display: flex; flex-direction: column;
z-index: 200;
animation: search-drop 0.2s cubic-bezier(0.16, 1, 0.3, 1);

.notif-header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 20px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font: Geist 15px weight 700; color: #F8FAFC;
}

.mark-all-read {
  font: Geist 12px weight 500; color: #A855F7;
  cursor: pointer; background: none; border: none;
}

.notif-list { overflow-y: auto; flex: 1; }

.notif-item {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 14px 20px; cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: background 0.12s ease;
}
.notif-item.unread { background: rgba(124, 58, 237, 0.06); }
.notif-item:hover  { background: rgba(255, 255, 255, 0.04); }

/* Icon backgrounds by type */
.notif-icon-follow    { background: rgba(124,58,237,0.2);  color: #A855F7; }
.notif-icon-reaction  { background: rgba(239,68,68,0.15);  color: #EF4444; }
.notif-icon-comment   { background: rgba(6,182,212,0.15);  color: #06B6D4; }
.notif-icon-approval  { background: rgba(16,185,129,0.15); color: #10B981; }
.notif-icon-rejection { background: rgba(239,68,68,0.15);  color: #EF4444; }
.notif-icon-milestone { background: rgba(245,158,11,0.15); color: #F59E0B; }

/* On mobile: becomes full /notifications page — not a dropdown */
```

---

### Document Upload Modal (3-step flow)

```css
/* Overlay */
background: rgba(8, 8, 16, 0.88);
backdrop-filter: blur(10px);
position: fixed; inset: 0; z-index: 200;

/* Modal */
background: #16162A;
border: 1px solid rgba(255, 255, 255, 0.10);
border-radius: 20px;
width: 100%; max-width: 560px; max-height: 90vh;
overflow-y: auto; padding: 32px;
box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7);
animation: modal-enter 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);

/* 3-step indicator: File → Details → Preview */
.upload-steps { display: flex; gap: 8px; margin-bottom: 28px; }
.upload-step {
  flex: 1; height: 4px; border-radius: 9999px;
  background: rgba(255, 255, 255, 0.08);
  transition: background 0.3s ease;
}
.upload-step.active   { background: linear-gradient(90deg, #7C3AED, #A855F7); }
.upload-step.complete { background: #10B981; }

/* File type chips */
.file-type-chip {
  font: Geist 11px weight 600; padding: 4px 10px; border-radius: 6px;
  background: rgba(255, 255, 255, 0.06); color: #94A3B8;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Progress bar */
.upload-progress-bar {
  height: 4px; border-radius: 9999px;
  background: rgba(255, 255, 255, 0.06); overflow: hidden; margin: 16px 0;
}
.upload-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #7C3AED, #06B6D4);
  border-radius: 9999px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Success state */
.upload-success-icon {
  width: 64px; height: 64px; border-radius: 50%;
  background: rgba(16, 185, 129, 0.15);
  border: 2px solid rgba(16, 185, 129, 0.4);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 16px; font-size: 28px;
  animation: pop-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

### PDF Viewer

```css
.pdf-viewer-wrapper {
  background: #0F0F1A;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px; overflow: hidden; position: relative;
}

.pdf-toolbar {
  background: rgba(15, 15, 26, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 10px 16px;
  display: flex; align-items: center; gap: 12px;
  position: sticky; top: 0; z-index: 10;
}

.pdf-page-count { font: Geist 13px weight 500; color: #94A3B8; }
.pdf-zoom-control { display: flex; align-items: center; gap: 8px; margin-left: auto; }

.pdf-canvas-area {
  padding: 20px; overflow-y: auto; max-height: 70vh;
  display: flex; flex-direction: column; align-items: center; gap: 12px;
}

.pdf-page { box-shadow: 0 4px 20px rgba(0,0,0,0.5); border-radius: 4px; overflow: hidden; }

.pdf-loading {
  display: flex; align-items: center; justify-content: center;
  height: 400px; color: #475569; gap: 12px; font: Geist 14px;
}

.pdf-unsupported { padding: 48px 24px; text-align: center; color: #94A3B8; }
```

---

### TipTap Rich Text Editor

```css
.tiptap-wrapper {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 14px; overflow: hidden;
  transition: border-color 0.2s ease;
}
.tiptap-wrapper:focus-within {
  border-color: rgba(124, 58, 237, 0.5);
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);
}

.tiptap-toolbar {
  background: rgba(15, 15, 26, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 8px 12px;
  display: flex; align-items: center; gap: 4px; flex-wrap: wrap;
}

.tiptap-btn {
  width: 32px; height: 32px; border-radius: 6px;
  border: none; background: transparent; color: #94A3B8;
  cursor: pointer; font-size: 14px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.12s ease;
}
.tiptap-btn:hover  { background: rgba(255,255,255,0.08); color: #F8FAFC; }
.tiptap-btn.active { background: rgba(124,58,237,0.18); color: #A855F7; }
.tiptap-divider    { width: 1px; height: 20px; background: rgba(255,255,255,0.08); margin: 0 4px; }

.ProseMirror {
  padding: 20px 24px; min-height: 240px;
  color: #CBD5E1; font: Geist 15px; line-height: 26px; outline: none;
}
.ProseMirror p  { margin-bottom: 12px; }
.ProseMirror h1 { font-family: 'Instrument Serif'; font-size: 32px; color: #F8FAFC; margin-bottom: 16px; }
.ProseMirror h2 { font-family: 'Instrument Serif'; font-size: 24px; color: #F8FAFC; margin-bottom: 12px; }
.ProseMirror h3 { font: Geist 18px weight 600; color: #F8FAFC; margin-bottom: 10px; }
.ProseMirror blockquote {
  border-left: 3px solid #7C3AED; padding-left: 16px;
  color: #94A3B8; font-style: italic; margin: 16px 0;
}
.ProseMirror code {
  background: rgba(124,58,237,0.12); color: #A855F7;
  border-radius: 4px; padding: 2px 6px; font-family: monospace; font-size: 13px;
}
.ProseMirror pre {
  background: #0F0F1A; border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px; padding: 16px; overflow-x: auto;
}
.ProseMirror a { color: #06B6D4; text-decoration: underline; }
.ProseMirror ul, .ProseMirror ol { padding-left: 24px; margin-bottom: 12px; }
.ProseMirror li { margin-bottom: 6px; }
.ProseMirror hr { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 24px 0; }
.ProseMirror img { max-width: 100%; border-radius: 10px; margin: 12px 0; }
.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  color: #475569; pointer-events: none; position: absolute;
}
```

---

### Comment Component

```css
.comment-thread { display: flex; flex-direction: column; gap: 1px; margin-top: 16px; }

.comment-item {
  display: flex; gap: 12px; padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.comment-author-name { font: Geist 13px weight 600; color: #F8FAFC; }
.comment-time        { font: Geist 11px; color: #475569; }
.comment-text        { font: Geist 14px; color: #CBD5E1; line-height: 22px; }

.comment-action-btn {
  font: Geist 12px weight 500; color: #475569;
  background: none; border: none; cursor: pointer;
  display: flex; align-items: center; gap: 4px;
  transition: color 0.15s ease;
}
.comment-action-btn:hover { color: #94A3B8; }
.comment-action-btn.liked { color: #7C3AED; }

/* Nested replies — 1 level deep only */
.comment-replies {
  margin-left: 44px;
  border-left: 2px solid rgba(255, 255, 255, 0.06);
  padding-left: 16px;
}

.comment-input {
  flex: 1; background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px; padding: 10px 14px; color: #F8FAFC;
  font: Geist 14px; resize: none;
  min-height: 44px; max-height: 120px; outline: none;
}
.comment-input:focus {
  border-color: #7C3AED;
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.12);
}
```

---

### Badges & Tags

#### Role Badges
```css
/* Shared base */
display: inline-flex; align-items: center; gap: 4px;
font: Geist 11px weight 600; letter-spacing: 0.5px;
text-transform: uppercase; padding: 3px 8px; border-radius: 9999px;

/* Verified Student */
background: rgba(124,58,237,0.15); color: #A855F7; border: 1px solid rgba(124,58,237,0.3);

/* Verified Lecturer */
background: rgba(6,182,212,0.15); color: #06B6D4; border: 1px solid rgba(6,182,212,0.3);

/* Course Rep */
background: rgba(245,158,11,0.15); color: #F59E0B; border: 1px solid rgba(245,158,11,0.3);

/* Pending */
background: rgba(245,158,11,0.10); color: #FCD34D; border: 1px solid rgba(245,158,11,0.2);
```

#### Gamification Badges
```css
/* Shared */
border-radius: 9999px; padding: 4px 12px;
font: Geist 12px weight 700; display: flex; align-items: center; gap: 6px;

/* Top Contributor */
background: linear-gradient(135deg, rgba(245,158,11,0.2), rgba(252,211,77,0.1));
border: 1px solid rgba(245,158,11,0.4); color: #F59E0B;

/* Note Legend */
background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1));
border: 1px solid rgba(124,58,237,0.4); color: #A855F7;

/* Research King */
background: linear-gradient(135deg, rgba(6,182,212,0.2), rgba(34,211,238,0.1));
border: 1px solid rgba(6,182,212,0.4); color: #06B6D4;

/* Popular */
background: linear-gradient(135deg, rgba(16,185,129,0.2), rgba(52,211,153,0.1));
border: 1px solid rgba(16,185,129,0.4); color: #10B981;

/* Viral Content */
background: linear-gradient(135deg, rgba(239,68,68,0.2), rgba(248,113,113,0.1));
border: 1px solid rgba(239,68,68,0.4); color: #EF4444;
```

---

### Reaction Bar

```css
display: flex; align-items: center; gap: 4px;
padding: 8px 0; border-top: 1px solid rgba(255, 255, 255, 0.06);

/* Reaction button */
display: inline-flex; align-items: center; gap: 6px;
padding: 6px 12px; border-radius: 9999px;
font: Geist 13px weight 500; color: #94A3B8;
background: transparent; border: 1px solid transparent;
cursor: pointer; transition: all 0.15s ease;

/* Hover */
background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.10); color: #CBD5E1;

/* Active states */
/* 👍 Like */      background: rgba(124,58,237,0.12); border-color: rgba(124,58,237,0.3); color: #A855F7;
/* ❤️ Love */      background: rgba(239,68,68,0.12);  border-color: rgba(239,68,68,0.3);  color: #EF4444;
/* 🔥 Fire */      background: rgba(249,115,22,0.12); border-color: rgba(249,115,22,0.3); color: #F97316;
/* 💡 Insightful */ background: rgba(245,158,11,0.12); border-color: rgba(245,158,11,0.3); color: #F59E0B;
/* 😂 Funny */     background: rgba(6,182,212,0.12);  border-color: rgba(6,182,212,0.3);  color: #22D3EE;
```

---

### Empty States

```css
.empty-state { display: flex; flex-direction: column; align-items: center; padding: 64px 24px; text-align: center; }

.empty-state-icon {
  width: 80px; height: 80px; border-radius: 20px;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center;
  font-size: 36px; margin-bottom: 20px;
}

.empty-state-title { font: Geist 18px weight 600; color: #F8FAFC; margin-bottom: 8px; }
.empty-state-description { font: Geist 14px; color: #475569; max-width: 300px; line-height: 22px; margin-bottom: 24px; }
```

| Variant | Icon | Title |
|---------|------|-------|
| No documents | 📄 | "No documents yet" |
| No feed | ✍️ | "Nothing here yet" |
| No notifications | 🔔 | "You're all caught up" |
| No followers | 👥 | "No followers yet" |
| Search empty | 🔍 | "No results found" |
| Awaiting approval | ⏳ | "Awaiting verification" |

---

### Pending Approval Lockscreen

```css
.pending-screen {
  min-height: 100vh; background: #080810;
  display: flex; align-items: center; justify-content: center; padding: 24px;
}

.pending-card {
  background: rgba(22,22,42,0.9);
  border: 1px solid rgba(245,158,11,0.25);
  border-radius: 24px; padding: 48px 40px;
  max-width: 480px; width: 100%;
  text-align: center; position: relative; overflow: hidden;
}

/* Amber top strip */
.pending-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, #F59E0B, #FCD34D);
}

.pending-icon {
  width: 80px; height: 80px; border-radius: 50%;
  background: rgba(245,158,11,0.12); border: 2px solid rgba(245,158,11,0.3);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 24px; font-size: 36px;
  animation: pending-pulse 2.5s ease-in-out infinite;
}

@keyframes pending-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.3); }
  50%       { box-shadow: 0 0 0 16px rgba(245, 158, 11, 0); }
}

.pending-step         { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 10px; font: Geist 13px weight 500; }
.pending-step.done    { background: rgba(16,185,129,0.08); color: #10B981; border: 1px solid rgba(16,185,129,0.2); }
.pending-step.active  { background: rgba(245,158,11,0.08); color: #F59E0B; border: 1px solid rgba(245,158,11,0.2); }
.pending-step.waiting { background: rgba(255,255,255,0.03); color: #475569; border: 1px solid rgba(255,255,255,0.06); }
```

---

### Avatar

```css
--avatar-xs: 24px; --avatar-sm: 32px; --avatar-md: 40px;
--avatar-lg: 56px; --avatar-xl: 80px; --avatar-2xl: 112px;

border-radius: 9999px; object-fit: cover;
border: 2px solid rgba(255, 255, 255, 0.10);

/* Verified ring */
outline: 2px solid #7C3AED; outline-offset: 2px;

/* Initials fallback */
background: linear-gradient(135deg, #7C3AED, #06B6D4);
color: #FFFFFF; font: Geist weight 600;
display: flex; align-items: center; justify-content: center;
```

---

### Skeleton Loaders

```css
background: linear-gradient(
  90deg,
  rgba(255,255,255,0.04) 25%,
  rgba(255,255,255,0.08) 50%,
  rgba(255,255,255,0.04) 75%
);
background-size: 200% 100%;
animation: skeleton-shimmer 1.5s ease-in-out infinite;
border-radius: 6px;

@keyframes skeleton-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
/* Apply on: feed cards, document cards, profile header, notification items */
/* NEVER show blank space — always skeleton during loading */
```

---

### Modal / Dialog

```css
/* Overlay */
background: rgba(8, 8, 16, 0.85); backdrop-filter: blur(8px);
position: fixed; inset: 0; z-index: 200;

/* Box */
background: #1E1E35; border: 1px solid rgba(255,255,255,0.12);
border-radius: 20px; padding: 32px;
width: 100%; max-width: 520px; max-height: 90vh; overflow-y: auto;
box-shadow: 0 24px 80px rgba(0, 0, 0, 0.6);
animation: modal-enter 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);

@keyframes modal-enter {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
```

---

### Toast Notifications

```css
background: #1E1E35; border: 1px solid rgba(255,255,255,0.12);
border-radius: 12px; padding: 12px 16px;
box-shadow: 0 8px 32px rgba(0,0,0,0.5);
display: flex; align-items: center; gap: 12px;
min-width: 280px; max-width: 400px;
animation: toast-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

/* Success */ border-left: 3px solid #10B981;
/* Error */   border-left: 3px solid #EF4444;
/* Warning */ border-left: 3px solid #F59E0B;
/* Info */    border-left: 3px solid #06B6D4;

@keyframes toast-in {
  from { opacity: 0; transform: translateX(100%) scale(0.9); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
}
```

---

### Error Pages (404 / 403 / 500)

```css
.error-page {
  min-height: 100vh; background: #080810;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center; padding: 24px;
}

.error-code {
  font-family: 'Instrument Serif';
  font-size: clamp(80px, 15vw, 160px);
  color: transparent;
  background: linear-gradient(135deg, #7C3AED, #06B6D4);
  -webkit-background-clip: text; background-clip: text;
  line-height: 1; margin-bottom: 16px;
}

/* 404 → 🔍  |  403 → 🔒  |  500 → ⚡ */
.error-illustration { font-size: 64px; margin-bottom: 24px; opacity: 0.7; }
```

---

### Onboarding Flow

```css
/* Wrapper */
min-height: 100vh; background: #080810;
background-image:
  radial-gradient(ellipse at 20% 20%, rgba(124,58,237,0.12) 0%, transparent 60%),
  radial-gradient(ellipse at 80% 80%, rgba(6,182,212,0.08) 0%, transparent 60%);
display: flex; align-items: center; justify-content: center; padding: 24px;

/* Card */
background: rgba(22,22,42,0.9); backdrop-filter: blur(20px);
border: 1px solid rgba(255,255,255,0.10);
border-radius: 24px; padding: 40px;
width: 100%; max-width: 520px;

/* Step dots */
.step-dot { width: 28px; height: 4px; border-radius: 9999px; background: rgba(255,255,255,0.15); transition: all 0.3s ease; }
.step-dot.active   { background: linear-gradient(90deg, #7C3AED, #A855F7); width: 48px; }
.step-dot.complete { background: #10B981; }
```

**Steps:** 1 → Google Sign In | 2 → Academic Info | 3 → Profile Setup | 4 → Admission Letter Upload | 5 → Pending Screen

---

## 7. Layout Principles

### Spacing (Base unit: 4px)

| Token | Value | Use |
|-------|-------|-----|
| `--spacing-1` | 4px | Icon-text gap |
| `--spacing-2` | 8px | Button icon gap |
| `--spacing-3` | 12px | Compact inner padding |
| `--spacing-4` | 16px | Standard padding |
| `--spacing-5` | 20px | Card padding |
| `--spacing-6` | 24px | Section spacing |
| `--spacing-8` | 32px | Content blocks |
| `--spacing-10` | 40px | Section vertical padding |
| `--spacing-12` | 48px | Major section gaps |
| `--spacing-16` | 64px | Page section divisions |
| `--spacing-20` | 80px | Hero vertical padding |

### Page Layout

```
┌──────────────────────────────────────────────────────┐
│ TOP NAV (64px sticky, blur backdrop)                  │
├───────────────┬────────────────────┬─────────────────┤
│ LEFT SIDEBAR  │   MAIN CONTENT     │  RIGHT SIDEBAR  │
│ 256px fixed   │   flex-1           │  300px fixed    │
│               │   max-width 680px  │                 │
├───────────────┴────────────────────┴─────────────────┤
│ (Mobile only) BOTTOM TAB BAR (64px)                   │
└──────────────────────────────────────────────────────┘
```

---

## 8. Depth & Elevation

| Level | CSS | Use |
|-------|-----|-----|
| Flat | `none` | Ghost buttons, inline text |
| Subtle | `0 1px 4px rgba(0,0,0,0.3)` | Resting cards, inputs |
| Raised | `0 4px 16px rgba(0,0,0,0.4)` | Hovered cards |
| Floating | `0 8px 32px rgba(0,0,0,0.5)` | Dropdowns, tooltips |
| Elevated | `0 16px 48px rgba(0,0,0,0.6)` | Modals, drawers |
| Deep | `0 24px 80px rgba(0,0,0,0.7)` | Full-screen overlays |
| Brand Glow | `0 0 24px rgba(124,58,237,0.4)` | CTA hover, active brand |

---

## 9. Animation & Motion

```css
/* Easings */
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1); /* bouncy — reactions, popups */
--ease-out:     cubic-bezier(0.16, 1, 0.3, 1);      /* smooth — modals, toasts */
--ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);       /* standard */

/* Durations */
--duration-fast:   120ms;
--duration-normal: 200ms;
--duration-medium: 300ms;
--duration-slow:   500ms;
```

**All keyframes used:** `page-enter` · `card-enter` (stagger 60ms) · `reaction-pop` · `bell-shake` · `gradient-float` · `skeleton-shimmer` · `count-tick` · `modal-enter` · `search-drop` · `pending-pulse` · `pop-in` · `toast-in`

**Motion imports (always use):**
```typescript
import { motion, AnimatePresence } from "motion/react"; // ✅
// NOT: import { motion } from "framer-motion";         // ❌
```

---

## 10. Responsive Behavior

| Name | Range | Changes |
|------|-------|---------|
| Mobile | `< 640px` | Single column, bottom tabs, FAB, 16px padding |
| Tablet | `640–1023px` | Two column, hamburger drawer, 24px padding |
| Desktop | `1024–1279px` | Left sidebar fixed, right sidebar hidden |
| Wide | `≥ 1280px` | Both sidebars, full 3-column layout |

**Touch targets:** Min 44×44px · Primary actions: 48×48px · Gap between: min 8px

---

## 11. Do's and Don'ts

### Do ✅
- `#7C3AED` as the one consistent primary CTA color
- Glassmorphism on all cards over background
- Instrument Serif for display-level text only
- Geist for ALL UI text
- Skeleton loaders on ALL async loads — never blank screen
- Brand gradient strip on profile cards and progress bars
- Bottom tab bar on mobile with safe-area padding
- Color-code document types by their accent colors
- Amber warning banner on pending approval state
- `@import "tailwindcss"` + `@theme {}` — Tailwind v4 syntax
- `bg-linear-to-r` (v4 name, not `bg-gradient-to-r`)
- Import from `motion/react`

### Don't ❌
- No light mode backgrounds — dark-first permanently
- No Inter, Roboto, system fonts — use Geist only
- No `border-radius` below `8px` on cards/containers
- No color-only status indicators — always pair with icon
- No custom colors outside the palette
- No blank screen during loading — skeleton always
- No more than 2 font families anywhere
- No card grids over 3 columns
- No Cloudinary API calls from client — always `/api/upload`
- No API secrets in `NEXT_PUBLIC_` env vars
- No `tailwind.config.js` — v4 is CSS-first with `@theme`
- No `@tailwind base/components/utilities` directives — v4 only
- No `import from "framer-motion"` — always `"motion/react"`

---

*ESUTSphere DESIGN.md — v2.0 — Next.js 16.2.6 · Tailwind v4.3.0 · Nigerian campus social platform. Ship it.*
