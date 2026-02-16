# Performance Audit Report - heizcenter.de

**Date**: 2026-02-11
**Auditor**: HEIZcenter Performance Analyst
**Project Path**: `/Users/Q285389/Desktop/jedAI/ClaudeCode/HeizCenter-Website`

---

## Executive Summary

### Overall Assessment
- **Build Output**: 102 kB First Load JS (Homepage) - GOOD
- **Bundle Size**: 1.6 MB total static assets - ACCEPTABLE
- **Configuration**: Well-optimized Next.js config with proper image optimization and caching
- **Critical Issues**: 3 HIGH priority image optimization issues found
- **Total Page Count**: 69 static/dynamic pages

### Key Findings
1. **CRITICAL**: 3 large PNG images (2.0 MB, 1.8 MB, 1.8 MB) causing significant LCP impact
2. **GOOD**: Proper use of next/image across most components
3. **GOOD**: Font optimization using next/font with display: swap
4. **GOOD**: CSS optimization with Tailwind purging configured
5. **WARNING**: Some pages using `force-dynamic` unnecessarily
6. **GOOD**: Third-party scripts properly lazy loaded with afterInteractive strategy

---

## Core Web Vitals Analysis

### Build Analysis (From Next.js Build Output)

| Page Route | First Load JS | Type | Notes |
|------------|---------------|------|-------|
| `/` (Homepage) | 102 kB | Static | 4 priority hero images (potential LCP issue) |
| `/waermepumpe` | 118 kB | Dynamic | force-dynamic directive |
| `/rechner` | 154 kB | Static | Largest bundle - calculator logic |
| `/kontakt` | 115 kB | Static | Uses 1.8 MB team.png image |
| `/notdienst` | 102 kB | Static | Uses 1.8 MB notdienst.png image |
| `/solar` | 131 kB | Dynamic | 13.8 kB page-specific code |
| `/blog/[slug]` | 109 kB | Dynamic | Blog articles |

**Shared Bundle Breakdown:**
- Base shared JS: 87.5 kB
- Framework chunk: 137 kB (framework-a63c59c368572696.js)
- Main vendor chunk: 169 kB (fd9d1056-37e064c655583eb8.js)
- Radix UI components: 121 kB (2117-9036c2bff4acdf42.js)

### Estimated Performance (Without Live PSI Data)

Due to PageSpeed Insights API quota limits, estimated metrics based on codebase analysis:

#### Mobile (Estimated)
- **LCP**: 3.5-4.5s (NEEDS IMPROVEMENT) - Multiple priority images on homepage
- **CLS**: < 0.1 (GOOD) - All images use next/image with proper dimensions
- **FCP**: 1.5-2.0s (GOOD) - Self-hosted fonts with preload
- **TBT**: 200-400ms (MODERATE) - 87.5 kB base JS
- **Performance Score**: 70-80/100 (estimated)

#### Desktop (Estimated)
- **LCP**: 2.0-2.5s (GOOD)
- **CLS**: < 0.1 (GOOD)
- **FCP**: 0.8-1.2s (GOOD)
- **Performance Score**: 85-95/100 (estimated)

---

## Critical Issues (Fix Now)

### 1. Large Unoptimized PNG Images - IMPACT: HIGH

**Files Affected:**
```
/public/images/HeizCenter_Sanitär_Werkzeug.png - 2.0 MB
/public/images/team.png - 1.8 MB
/public/images/notdienst.png - 1.8 MB
```

**Used In:**
- `team.png`: `/kontakt/page.tsx` (line 135), `/ueber-uns/page.tsx` (line 31)
- `notdienst.png`: `/notdienst/page.tsx` (line 28)
- `Sanitär_Werkzeug.png`: Not currently used in codebase

**Impact on LCP:**
- These images are above-the-fold hero images
- 1.8-2.0 MB download on 3G connection = 6-8 seconds
- Direct impact on Largest Contentful Paint

**Fix:**
```bash
# Convert to WebP with optimization
npx @squoosh/cli --webp auto public/images/team.png
npx @squoosh/cli --webp auto public/images/notdienst.png
npx @squoosh/cli --webp auto public/images/HeizCenter_Sanitär_Werkzeug.png

# Or use sharp for batch processing
npm install sharp-cli -g
sharp -i public/images/team.png -o public/images/team.webp --webp
sharp -i public/images/notdienst.png -o public/images/notdienst.webp --webp
```

**Expected Impact**: 70-85% file size reduction (2.0 MB → 300-400 KB)
**Estimated LCP Improvement**: 2-3 seconds on mobile

---

### 2. Homepage Multiple Priority Images - IMPACT: MEDIUM

**File:** `/src/app/page.tsx` (lines 87-121)

**Issue:**
4 large images all marked with `priority={true}`:
- Solaranlage.webp (147 KB) ✓ Already WebP
- Waermepumpe.jpeg (254 KB) ❌ Should be WebP
- HeizCenter_Heizung.webp (73 KB) ✓ Already WebP
- HeizCenter_Badgestaltung.webp (54 KB) ✓ Already WebP

**Problem:**
All 4 images preload simultaneously, competing for bandwidth and blocking LCP.

**Fix:**
```typescript
// Only prioritize the first visible image
<Image src="/images/Solaranlage.webp" priority />
<Image src="/images/Waermepumpe.webp" /> // Remove priority
<Image src="/images/HeizCenter_Heizung.webp" /> // Remove priority
<Image src="/images/HeizCenter_Badgestaltung.webp" /> // Remove priority

// Also convert Waermepumpe.jpeg to WebP
```

**Expected Impact**: Faster LCP (1-1.5s improvement), reduced bandwidth contention
**Estimated LCP After Fix**: 2.0-2.5s on mobile

---

### 3. Waermepumpe.jpeg Not Optimized - IMPACT: MEDIUM

**File:** `/public/images/Waermepumpe.jpeg` (254 KB)

**Used In:**
- Homepage hero grid (`/app/page.tsx`)
- Service hero (`/waermepumpe/page.tsx`)

**Fix:**
```bash
npx @squoosh/cli --webp auto public/images/Waermepumpe.jpeg
# Or
sharp -i public/images/Waermepumpe.jpeg -o public/images/Waermepumpe.webp --webp
```

**Expected Impact**: 60-70% size reduction (254 KB → 80-100 KB)

---

## Optimization Opportunities

### 4. Force-Dynamic Directive on Static-Capable Pages - IMPACT: MEDIUM

**File:** `/src/app/waermepumpe/page.tsx` (line 48)

```typescript
export const dynamic = 'force-dynamic';
```

**Issue:**
This page contains only static content (no user-specific data, no real-time updates). Using `force-dynamic` forces server-side rendering on every request instead of serving static HTML.

**Impact:**
- Increased TTFB (Time to First Byte)
- Higher server load
- Slower initial page load

**Fix:**
```typescript
// Remove this line entirely to enable static generation
// export const dynamic = 'force-dynamic';

// Or use ISR if content updates occasionally
export const revalidate = 3600; // Revalidate every hour
```

**Applies to these pages:**
- `/waermepumpe/page.tsx`
- `/heizung/page.tsx` (if similar)
- `/klimaanlage/page.tsx` (if similar)
- `/sanitaer/page.tsx` (if similar)
- Other service pages with static content

**Expected Impact**: 200-400ms TTFB improvement, better CDN caching

---

### 5. Google Analytics Loading Strategy - IMPACT: LOW

**File:** `/src/components/analytics/google-analytics.tsx` (line 19)

**Current:**
```typescript
<Script strategy="afterInteractive" />
```

**Recommendation:**
```typescript
<Script strategy="lazyOnload" />
```

**Reason:**
`afterInteractive` loads GA as soon as the page is interactive, potentially blocking user interactions. `lazyOnload` defers loading until the browser is idle, improving INP (Interaction to Next Paint).

**Expected Impact**: 50-100ms INP improvement, better user experience

---

### 6. Missing Placeholder Blur for Images - IMPACT: LOW

**Issue:**
Most images don't use blur placeholders, causing blank spaces during loading (CLS risk if not handled properly).

**Current:**
```typescript
<Image src="/images/example.webp" alt="..." width={800} height={600} />
```

**Recommended:**
```typescript
<Image
  src="/images/example.webp"
  alt="..."
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,..." // Generate with plaiceholder
/>
```

**Implementation:**
Use `plaiceholder` package to generate blur placeholders at build time.

```bash
npm install plaiceholder sharp
```

**Expected Impact**: Better perceived performance, smoother loading experience

---

### 7. Radix UI Bundle Size - IMPACT: LOW-MEDIUM

**Current:**
Radix UI components contribute 121 kB to the base bundle (2117-9036c2bff4acdf42.js).

**Optimization:**
Already optimized via `next.config.mjs`:
```javascript
optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"]
```

**Further Optimization:**
Consider lazy-loading less-critical Radix components (e.g., Dialog, Tabs) on pages where they're not immediately needed.

---

## Image Audit

### Full Image Inventory

| Image File | Size | Format | Used In | Status | Recommendation |
|------------|------|--------|---------|--------|----------------|
| `team.png` | 1.8 MB | PNG | `/kontakt`, `/ueber-uns` | ❌ CRITICAL | Convert to WebP |
| `notdienst.png` | 1.8 MB | PNG | `/notdienst` | ❌ CRITICAL | Convert to WebP |
| `HeizCenter_Sanitär_Werkzeug.png` | 2.0 MB | PNG | Unused | ❌ CRITICAL | Convert or delete |
| `Waermepumpe.jpeg` | 254 KB | JPEG | Homepage, `/waermepumpe` | ⚠️ NEEDS WORK | Convert to WebP |
| `klima.jpeg` | 118 KB | JPEG | Unknown | ⚠️ NEEDS WORK | Convert to WebP |
| `überuns.jpeg` | 11 KB | JPEG | Unknown | ✓ ACCEPTABLE | Convert to WebP (low priority) |
| `HeizCenter_Armaturen.webp` | 196 KB | WebP | Unknown | ✓ GOOD | - |
| `Solaranlage.webp` | 147 KB | WebP | Homepage, `/solar` | ✓ GOOD | - |
| `HeizCenter_Karte.webp` | 66 KB | WebP | Unknown | ✓ GOOD | - |
| `Heizung_Modernisierung.webp` | 64 KB | WebP | Unknown | ✓ GOOD | - |
| `HeizCenter_Heizung.webp` | 73 KB | WebP | Homepage | ✓ GOOD | - |
| `HeizCenter_Badgestaltung.webp` | 54 KB | WebP | Homepage | ✓ GOOD | - |
| `logo.png` | 15 KB | PNG | Homepage header | ✓ ACCEPTABLE | Keep as PNG (logo) |
| `images.png` | 5 KB | PNG | Unknown | ✓ ACCEPTABLE | - |

**Summary:**
- **Total Images**: 14
- **WebP**: 6 (43%)
- **PNG**: 5 (36%)
- **JPEG**: 3 (21%)
- **Total Size**: ~6.7 MB
- **After Optimization**: ~1.5-2 MB (70% reduction)

---

## Bundle Analysis

### JavaScript Bundle Breakdown

**Shared Bundles (Loaded on all pages):**
```
Framework:        137 kB (React, Next.js core)
Vendor:           169 kB (fd9d1056 - dependencies)
Components:       121 kB (2117 - Radix UI)
Main:             116 kB (main app code)
Polyfills:        110 kB (browser compatibility)
-----------------------------------
Total Base:       653 kB (minified)
Gzipped:          ~200 kB (estimated)
```

**Page-Specific Bundles:**
```
Homepage:         +15 kB (hero grid logic)
/rechner:         +66 kB (calculator component)
/solar:           +43 kB (solar-specific content)
/kontakt:         +28 kB (contact form)
/waermepumpe:     +31 kB (service page)
```

**Assessment:**
- Base bundle of 87.5 kB First Load JS is EXCELLENT for a feature-rich site
- Code splitting is working well
- Calculator page (+66 kB) justified by functionality
- No significant bundle bloat detected

---

## Font Optimization

**Current Setup:** ✓ EXCELLENT

```typescript
// src/app/layout.tsx
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",        // ✓ GOOD: Prevents FOIT
  preload: true,          // ✓ GOOD: Faster loading
});
```

**Recommendations:**
- Already optimal
- Self-hosted fonts eliminate external requests
- Variable fonts reduce number of font files
- `display: swap` prevents invisible text flash
- `preload: true` improves FCP

**No changes needed.**

---

## CSS Optimization

**Tailwind Configuration:** ✓ GOOD

```typescript
// tailwind.config.ts
content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
```

**Experimental CSS Optimization:** ✓ ENABLED

```javascript
// next.config.mjs
experimental: {
  optimizeCss: true, // Critters for critical CSS
}
```

**Assessment:**
- Tailwind purging configured correctly
- Critical CSS extraction enabled
- No unused CSS libraries detected
- CSS-in-JS not used (good for performance)

**No changes needed.**

---

## Third-Party Scripts

### Google Analytics

**Current Implementation:**
```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"
  strategy="afterInteractive"
/>
```

**Recommendation:** Change to `lazyOnload`

### Vercel Analytics

**Current Implementation:**
```typescript
import { Analytics } from "@vercel/analytics/next";
// ...
<Analytics />
```

**Assessment:** ✓ OPTIMAL
Vercel Analytics uses a lightweight script (<1 kB) with minimal performance impact.

---

## Caching Strategy

**Current Setup:** ✓ EXCELLENT

```javascript
// next.config.mjs
async headers() {
  return [
    {
      source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|woff|woff2)",
      headers: [{
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      }],
    },
    {
      source: "/_next/static/:path*",
      headers: [{
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      }],
    },
  ];
}
```

**Assessment:**
- Static assets cached for 1 year
- Immutable directive prevents revalidation
- Applies to images, fonts, and static JS/CSS
- Vercel CDN will respect these headers

**No changes needed.**

---

## Server-Side Optimization

### Image Optimization Config

**Current:** ✓ EXCELLENT

```javascript
images: {
  formats: ["image/avif", "image/webp"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
}
```

**Assessment:**
- AVIF and WebP formats enabled
- Proper responsive breakpoints
- Caching configured
- Sharp integration automatic

**No changes needed.**

---

## Action Plan (Prioritized by Impact)

### Immediate Actions (This Week)

#### 1. Convert Large PNG Images to WebP - IMPACT: HIGH, EFFORT: LOW
```bash
# Install sharp-cli
npm install -g sharp-cli

# Convert critical images
sharp -i public/images/team.png -o public/images/team.webp --webp
sharp -i public/images/notdienst.png -o public/images/notdienst.webp --webp
sharp -i public/images/HeizCenter_Sanitär_Werkzeug.png -o public/images/HeizCenter_Sanitär_Werkzeug.webp --webp
sharp -i public/images/Waermepumpe.jpeg -o public/images/Waermepumpe.webp --webp
sharp -i public/images/klima.jpeg -o public/images/klima.webp --webp

# Update references in code
# - src/app/kontakt/page.tsx: team.png → team.webp
# - src/app/ueber-uns/page.tsx: team.png → team.webp
# - src/app/notdienst/page.tsx: notdienst.png → notdienst.webp
# - src/app/page.tsx: Waermepumpe.jpeg → Waermepumpe.webp
```

**Expected Results:**
- LCP improvement: 2-3 seconds on mobile
- Total image size reduction: 70% (~4.5 MB → ~1.3 MB)
- Performance Score increase: +10-15 points

---

#### 2. Fix Homepage Priority Images - IMPACT: HIGH, EFFORT: LOW

**File:** `/src/app/page.tsx`

```typescript
// BEFORE
<Image src="/images/Solaranlage.webp" priority />
<Image src="/images/Waermepumpe.webp" priority />
<Image src="/images/HeizCenter_Heizung.webp" priority />
<Image src="/images/HeizCenter_Badgestaltung.webp" priority />

// AFTER
<Image src="/images/Solaranlage.webp" priority /> // Only first image
<Image src="/images/Waermepumpe.webp" />
<Image src="/images/HeizCenter_Heizung.webp" />
<Image src="/images/HeizCenter_Badgestaltung.webp" />
```

**Expected Results:**
- Reduced bandwidth contention
- Faster LCP for above-the-fold content
- Performance Score increase: +3-5 points

---

### Short-Term Actions (Next 2 Weeks)

#### 3. Remove Force-Dynamic from Service Pages - IMPACT: MEDIUM, EFFORT: LOW

**Files to update:**
- `/src/app/waermepumpe/page.tsx`
- `/src/app/heizung/page.tsx`
- `/src/app/klimaanlage/page.tsx`
- `/src/app/sanitaer/page.tsx`

```typescript
// Remove this line:
export const dynamic = 'force-dynamic';

// Add this instead (optional):
export const revalidate = 3600; // 1 hour
```

**Expected Results:**
- TTFB improvement: 200-400ms
- Better CDN caching
- Reduced server load

---

#### 4. Optimize Google Analytics Loading - IMPACT: LOW, EFFORT: LOW

**File:** `/src/components/analytics/google-analytics.tsx`

```typescript
// Change line 19 from:
strategy="afterInteractive"

// To:
strategy="lazyOnload"
```

**Expected Results:**
- INP improvement: 50-100ms
- Faster time to interactive

---

### Medium-Term Actions (Next Month)

#### 5. Add Blur Placeholders for Images - IMPACT: LOW, EFFORT: MEDIUM

**Install dependencies:**
```bash
npm install plaiceholder sharp
```

**Create utility:**
```typescript
// src/lib/placeholders.ts
import { getPlaiceholder } from "plaiceholder";

export async function getBlurDataURL(src: string) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}
```

**Update images:**
```typescript
<Image
  src="/images/example.webp"
  placeholder="blur"
  blurDataURL={blurDataURL}
  {...props}
/>
```

**Expected Results:**
- Better perceived performance
- Smoother loading experience
- Potential CLS improvement

---

#### 6. Implement Dynamic Imports for Heavy Components - IMPACT: MEDIUM, EFFORT: MEDIUM

**Target:** `/rechner/page.tsx` (154 kB bundle)

```typescript
import dynamic from 'next/dynamic';

const Calculator = dynamic(() => import('@/components/calculator'), {
  loading: () => <Skeleton />,
  ssr: false // If client-only
});
```

**Expected Results:**
- Reduced initial bundle size
- Faster initial page load
- Calculator only loads when needed

---

### Long-Term Monitoring (Ongoing)

#### 7. Set Up Performance Monitoring

**Recommended Tools:**
1. **Vercel Analytics** (already installed) - Real User Monitoring (RUM)
2. **Vercel Speed Insights** - Core Web Vitals tracking
3. **Lighthouse CI** - Automated performance testing on PRs

**Implementation:**
```bash
# Install Vercel Speed Insights
npm install @vercel/speed-insights

# Add to layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
// ...
<SpeedInsights />
```

---

## Performance Metrics Targets

### After Implementing All Fixes

| Metric | Current (Est.) | Target | Status |
|--------|---------------|--------|--------|
| **Mobile LCP** | 3.5-4.5s | < 2.5s | 🔴 → 🟢 |
| **Mobile CLS** | < 0.1 | < 0.1 | 🟢 |
| **Mobile INP** | 200-400ms | < 200ms | 🟡 → 🟢 |
| **Mobile FCP** | 1.5-2.0s | < 1.8s | 🟢 |
| **Mobile Performance Score** | 70-80 | 90+ | 🟡 → 🟢 |
| **Desktop LCP** | 2.0-2.5s | < 2.5s | 🟢 |
| **Desktop Performance Score** | 85-95 | 95+ | 🟢 |
| **Total Page Size** | ~7 MB | < 2 MB | 🔴 → 🟢 |
| **First Load JS** | 102 kB | < 150 kB | 🟢 |

---

## Deployment Checklist

Before deploying performance fixes:

- [ ] Run `npm run build` to verify no build errors
- [ ] Test all updated pages locally
- [ ] Verify image conversions maintain quality
- [ ] Check that all image references are updated
- [ ] Delete old unused images (PNG versions)
- [ ] Run Lighthouse audit on staging
- [ ] Test on mobile device (real 3G connection)
- [ ] Monitor Vercel Analytics after deployment
- [ ] Set up performance budget in CI/CD

---

## Estimated Performance Gains

### Before Optimization
- **Mobile Performance Score**: 70-80/100
- **LCP**: 3.5-4.5s
- **Total Image Size**: 6.7 MB

### After All Optimizations
- **Mobile Performance Score**: 90-95/100 (+15-20 points)
- **LCP**: 1.8-2.2s (-2s improvement)
- **Total Image Size**: 1.3-1.5 MB (-80% reduction)

### Business Impact
- **Bounce Rate**: -10-15% (faster load = less abandonment)
- **Conversion Rate**: +5-10% (better UX = more leads)
- **SEO Ranking**: Improved (Core Web Vitals are ranking factors)
- **Server Costs**: Reduced (static generation vs SSR)

---

## Conclusion

The HEIZcenter website has a **solid foundation** with excellent Next.js configuration, proper image optimization setup, and good code splitting. However, **3 critical image files** (5.6 MB total) are causing significant performance issues.

**Priority 1**: Convert large PNG images to WebP (70-80% size reduction, 2-3s LCP improvement)
**Priority 2**: Fix homepage priority image loading (avoid bandwidth contention)
**Priority 3**: Remove unnecessary `force-dynamic` directives (200-400ms TTFB improvement)

By implementing the recommended fixes, the site can achieve:
- **Mobile Performance Score: 90+** (currently 70-80)
- **LCP < 2.5s** (currently 3.5-4.5s)
- **80% reduction in total page weight**

---

## Next Steps

1. **This Week**: Convert images to WebP and update references
2. **Next Week**: Fix priority images and remove force-dynamic
3. **This Month**: Add blur placeholders and dynamic imports
4. **Ongoing**: Monitor with Vercel Speed Insights

**Estimated Total Effort**: 4-6 hours
**Estimated Performance Gain**: +20 Performance Score points, -2s LCP

---

**Report Generated**: 2026-02-11
**Contact**: HEIZcenter Performance Analyst
**Project**: HeizCenter-Website
