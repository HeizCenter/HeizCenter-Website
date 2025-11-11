# HeizCenter Website QA Checklist

## ✅ Content Review

### Homepage
- [ ] Hero section loads correctly
- [ ] All service cards display properly
- [ ] CTAs are functional and linked correctly
- [ ] Images load with proper optimization
- [ ] Stats section displays accurate numbers

### Service Pages
- [ ] Wärmepumpe page complete
- [ ] Heizung page complete
- [ ] Sanitär page complete
- [ ] Klimaanlage page complete
- [ ] All service descriptions accurate
- [ ] CTAs lead to correct forms

### Location Pages (14 pages)
- [ ] Augsburg, Ulm, Memmingen main pages
- [ ] All 11 micro-location pages
- [ ] Contact information accurate
- [ ] Maps/directions functional
- [ ] Local schema markup present

### Blog System
- [ ] Blog index page loads
- [ ] Individual blog posts accessible
- [ ] Category pages work
- [ ] Related posts display
- [ ] Table of contents functional
- [ ] Social share buttons work

### Contact Page
- [ ] All 3 forms display (Contact, Quote, Emergency)
- [ ] Tab navigation works
- [ ] Location cards accurate
- [ ] Phone numbers clickable

## 📱 Mobile Responsiveness

### Breakpoints
- [ ] Mobile (< 640px)
- [ ] Tablet (640-1024px)
- [ ] Desktop (> 1024px)

### Components
- [ ] Navigation menu (mobile hamburger)
- [ ] Forms stack properly
- [ ] Images responsive
- [ ] Tables scroll/stack
- [ ] CTAs tap-friendly (min 44x44px)
- [ ] Text readable (min 16px)

### Testing Devices
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (Chrome, Firefox, Safari, Edge)

## ♿ Accessibility (WCAG AA)

### Keyboard Navigation
- [ ] All interactive elements keyboard accessible
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Skip to content link present
- [ ] No keyboard traps

### Screen Reader
- [ ] All images have alt text
- [ ] Form labels present
- [ ] ARIA labels on icons
- [ ] Headings hierarchical (h1 → h6)
- [ ] Landmark regions defined

### Color & Contrast
- [ ] Text contrast ratio ≥ 4.5:1
- [ ] Large text ≥ 3:1
- [ ] Focus indicators ≥ 3:1
- [ ] Information not color-only

### Forms
- [ ] Labels associated with inputs
- [ ] Error messages clear
- [ ] Required fields marked
- [ ] Validation messages accessible

## 🔗 Links & Navigation

### Internal Links
- [ ] All navigation links work
- [ ] Breadcrumbs functional
- [ ] Footer links work
- [ ] Internal blog links work

### External Links
- [ ] Phone numbers (tel:)
- [ ] Email addresses (mailto:)
- [ ] Social media links
- [ ] External resources open in new tab with rel="noopener"

### Broken Links
- [ ] No 404 errors
- [ ] All images load
- [ ] No broken assets

## 📝 Forms Testing

### Contact Form
- [ ] All fields validate
- [ ] Required fields enforced
- [ ] Email format validation
- [ ] Success message displays
- [ ] Error handling works
- [ ] Honeypot spam protection
- [ ] GDPR consent required

### Quote Form
- [ ] Service selection works
- [ ] All dropdowns populate
- [ ] Slider functional (price calculator)
- [ ] Address fields validate
- [ ] Postal code format (5 digits)
- [ ] Form submits to Odoo (mock)

### Emergency Form
- [ ] Emergency warning visible
- [ ] Phone CTA prominent
- [ ] Emergency type selection
- [ ] Quick submit flow
- [ ] Priority routing (when Odoo connected)

### Newsletter Form
- [ ] Email validation
- [ ] Subscribe button works
- [ ] Success confirmation

## 🚀 Performance

### Lighthouse Scores (Target: 95+)
- [ ] Performance: ___/100
- [ ] Accessibility: ___/100
- [ ] Best Practices: ___/100
- [ ] SEO: ___/100

### Core Web Vitals
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] FCP < 1.8s
- [ ] TTFB < 800ms

### Load Times
- [ ] Homepage < 3s
- [ ] Service pages < 2s
- [ ] Blog posts < 2.5s
- [ ] Forms < 2s

### Assets
- [ ] Images optimized (WebP/AVIF)
- [ ] CSS minified
- [ ] JS minified
- [ ] No render-blocking resources

## 🔍 SEO

### Meta Tags
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] OpenGraph tags present
- [ ] Twitter cards present
- [ ] Canonical URLs set

### Structured Data
- [ ] LocalBusiness schema
- [ ] Article schema (blog)
- [ ] Review schema
- [ ] Breadcrumb schema
- [ ] FAQ schema (where applicable)

### Sitemap & Robots
- [ ] /sitemap.xml generates
- [ ] /robots.txt present
- [ ] All pages in sitemap
- [ ] Correct disallow rules

### Analytics
- [ ] GA4 tracking code present
- [ ] Events firing correctly
- [ ] Conversions tracked

## 🔒 Security

### Headers
- [ ] HTTPS enforced
- [ ] CSP headers set
- [ ] X-Frame-Options set

### Forms
- [ ] CSRF protection
- [ ] Input sanitization
- [ ] Rate limiting (API)

### Environment
- [ ] No exposed secrets
- [ ] .env.local not committed
- [ ] API keys secure

## 🌍 Internationalization

### Language
- [ ] German language correct
- [ ] No English fallbacks
- [ ] Currency format (€)
- [ ] Date format (DD.MM.YYYY)
- [ ] Phone format (+49)

## 🐛 Cross-Browser Testing

### Chrome
- [ ] All features work
- [ ] No console errors
- [ ] Layout correct

### Firefox
- [ ] All features work
- [ ] No console errors
- [ ] Layout correct

### Safari
- [ ] All features work
- [ ] No console errors
- [ ] Layout correct

### Edge
- [ ] All features work
- [ ] No console errors
- [ ] Layout correct

## 📊 Final Checks

- [ ] All pages build successfully
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Console clean (no errors)
- [ ] All images have proper alt text
- [ ] Print styles (if needed)
- [ ] 404 page exists
- [ ] Favicon present

## 🎯 Launch Readiness

- [ ] Content proofread
- [ ] Legal pages (Impressum, Datenschutz)
- [ ] Contact info verified
- [ ] Odoo CRM connection tested
- [ ] Analytics verified
- [ ] Search Console verified
- [ ] Backup plan ready
- [ ] Rollback procedure documented

---

**QA Completed By**: ___________________
**Date**: ___________________
**Build Version**: ___________________
