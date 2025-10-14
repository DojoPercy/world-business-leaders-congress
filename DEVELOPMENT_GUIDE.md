# Development Guide - WBLC 2025 Landing Page

## Quick Start

### Running the Project
```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

Access at: http://localhost:3000

---

## Project Structure Overview

```
wlbc/
├── public/
│   ├── images/
│   │   └── bg.jpg          # Hero background image
│   └── logos/
│       ├── logo-dark.png   # Navigation logo
│       └── logo-white.png  # Hero logo
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with fonts
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities (animations)
│   └── config/             # Configuration files
└── tailwind.config.ts      # Tailwind configuration
```

---

## How to Add New Sections

### Step 1: Create Component
```tsx
// src/components/AboutSection.tsx
'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion()
  
  const variants = prefersReducedMotion ? {} : fadeInUp

  return (
    <section id="about" className="py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-h1 font-heading font-bold text-charcoal mb-6"
        >
          About the Congress
        </motion.h2>
        
        {/* Your content here */}
      </div>
    </section>
  )
}
```

### Step 2: Add to Page
```tsx
// src/app/page.tsx
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />  {/* Add your new section */}
      {/* ... other sections */}
    </main>
  )
}
```

### Step 3: Update Navigation (if needed)
Navigation already includes all menu items. Just ensure section has matching `id` attribute.

---

## Common Customizations

### Changing CTA Button Text
```typescript
// src/config/site.ts
cta: {
  primary: {
    label: 'Your New CTA Text',  // Change this
    href: '#your-target',
  }
}
```

### Updating Event Details
```typescript
// src/config/site.ts
event: {
  date: 'Your New Date',
  location: 'Your Location',
  theme: 'Your Theme'
}
```

### Adding a New Color
```typescript
// tailwind.config.ts
colors: {
  // ... existing colors
  accent: {
    50: '#F0F9FF',
    // ... full scale
    DEFAULT: '#3B82F6',
  }
}
```

### Creating Custom Animation
```typescript
// src/lib/animations.ts
export const slideInRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
}
```

---

## Component Patterns

### Standard Section Layout
```tsx
<section className="py-20 px-6 lg:px-12 bg-off-white">
  <div className="max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Alternating Background Colors
```tsx
<section className="py-20 bg-white">...</section>
<section className="py-20 bg-off-white">...</section>
<section className="py-20 bg-gold-50">...</section>
```

### Using Icons
```tsx
import { Award, Calendar, Users } from 'lucide-react'

<Award className="w-6 h-6 text-gold-600" />
```

### Creating Cards
```tsx
<div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
  <h3 className="text-h3 font-heading font-semibold mb-4">Card Title</h3>
  <p className="text-slate">Card content</p>
</div>
```

---

## Responsive Design Tips

### Mobile-First Classes
```tsx
// Mobile: text-2xl, Desktop: text-4xl
<h2 className="text-2xl lg:text-4xl">Heading</h2>

// Mobile: Stack vertical, Desktop: Horizontal
<div className="flex flex-col lg:flex-row gap-6">
```

### Hide/Show Elements
```tsx
// Show only on mobile
<div className="lg:hidden">Mobile only</div>

// Show only on desktop
<div className="hidden lg:block">Desktop only</div>
```

---

## Animation Best Practices

### 1. Use useInView for Scroll Animations
```tsx
import { useInView } from 'framer-motion'

const ref = useRef(null)
const isInView = useInView(ref, { once: true })

<motion.div
  ref={ref}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={fadeInUp}
>
```

### 2. Always Respect Reduced Motion
```tsx
const prefersReducedMotion = useReducedMotion()
const variants = prefersReducedMotion ? {} : fadeInUp
```

### 3. Stagger Children for Lists
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

<motion.div variants={containerVariants}>
  {items.map(item => (
    <motion.div key={item.id} variants={fadeInUp}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## Styling Guidelines

### Typography Classes
```tsx
// Headings
<h1 className="text-display font-heading font-bold">
<h2 className="text-h1 font-heading font-semibold">
<h3 className="text-h2 font-heading font-medium">

// Body text
<p className="text-body font-body">
<p className="text-body-sm text-slate">  // Secondary text
```

### Spacing System
```tsx
// Sections: py-20 (80px vertical padding)
// Content containers: px-6 lg:px-12
// Element gaps: gap-4, gap-6, gap-8
// Margins: mb-4, mb-6, mb-8, mb-12
```

### Color Usage
```tsx
// Text colors
text-charcoal       // Primary text
text-slate          // Secondary text
text-gold-600       // Gold text (accessible)
text-white          // On dark backgrounds

// Background colors
bg-off-white        // Page background
bg-white            // Cards, sections
bg-gold-50          // Subtle gold tint
bg-charcoal         // Dark sections
```

---

## Accessibility Checklist

When adding new components, ensure:

- [ ] Semantic HTML (`<section>`, `<article>`, `<nav>`, etc.)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Alt text for images
- [ ] ARIA labels for icon-only buttons
- [ ] Keyboard navigation support
- [ ] Focus visible states
- [ ] Color contrast ≥4.5:1 for body text
- [ ] Reduced motion support
- [ ] Touch targets ≥44×44px

---

## Testing

### Visual Testing
1. Test on multiple screen sizes (mobile, tablet, desktop)
2. Test in different browsers (Chrome, Firefox, Safari)
3. Test with dark/light system preferences
4. Test animations with reduced motion enabled

### Accessibility Testing
```bash
# Install axe DevTools extension
# Run Lighthouse audit in Chrome DevTools
# Test keyboard navigation
# Test with screen reader
```

---

## Common Issues & Solutions

### Issue: Animations not working
**Solution**: Check if `'use client'` directive is at top of component file

### Issue: Tailwind classes not applying
**Solution**: Ensure file is in `content` array in `tailwind.config.ts`

### Issue: Font not loading
**Solution**: Verify font is imported in `layout.tsx` and CSS variable is correct

### Issue: Image not showing
**Solution**: Check path is relative to `/public` directory (e.g., `/images/bg.jpg`)

---

## Performance Tips

### Optimize Images
```bash
# Use Next.js Image component
<Image src="/images/photo.jpg" width={800} height={600} alt="..." />
```

### Lazy Load Below-Fold Content
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

### Minimize Animation Scope
```tsx
// Only animate transform and opacity (GPU-accelerated)
// Avoid animating: width, height, top, left, margin, padding
```

---

## Resources

### Documentation
- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Lucide Icons: https://lucide.dev/

### Tools
- Color contrast checker: https://webaim.org/resources/contrastchecker/
- Responsive design tester: Chrome DevTools Device Mode
- Accessibility audit: Lighthouse (Chrome DevTools)

---

## Getting Help

### Check These First
1. Browser console for errors
2. Terminal for build errors
3. Next.js error overlay in development
4. TypeScript errors in IDE

### Debugging Tips
```tsx
// Log props and state
console.log('Component rendered:', { props, state })

// Check if animation triggered
console.log('isInView:', isInView)

// Verify responsive classes
<div className="bg-red-500 sm:bg-blue-500 lg:bg-green-500">
  Test responsive breakpoints
</div>
```

---

**Happy coding! 🚀**

For detailed implementation info, see `IMPLEMENTATION_SUMMARY.md`

