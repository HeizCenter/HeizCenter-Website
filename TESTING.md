# HeizCenter Website Testing Guide

## Development Testing

### Local Development Server
```bash
npm run dev
```
Access at: http://localhost:3000

### Production Build Test
```bash
npm run build
npm run start
```
Access at: http://localhost:3000

## Automated Testing

### Build Verification
```bash
npm run build
```
Expected: ✅ Compiled successfully

### Type Checking
```bash
npx tsc --noEmit
```
Expected: No TypeScript errors

### Linting
```bash
npm run lint
```
Expected: No ESLint errors

## Performance Testing

### Lighthouse CI (Manual)
1. Build production: `npm run build`
2. Start server: `npm run start`
3. Open Chrome DevTools
4. Run Lighthouse audit
5. Target scores:
   - Performance: 95+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 95+

### Core Web Vitals
Monitor in production with GA4:
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

## Accessibility Testing

### Keyboard Navigation Test
1. Tab through all interactive elements
2. Verify focus indicators visible
3. Check tab order logical
4. Test skip to content link (first tab)
5. Ensure no keyboard traps

### Screen Reader Test (VoiceOver on Mac)
```bash
# Enable VoiceOver
Cmd + F5

# Navigate
VO + Right Arrow (next element)
VO + Left Arrow (previous element)
VO + Space (activate)
```

Test:
- [ ] All images have alt text announced
- [ ] Form labels read correctly
- [ ] Landmark regions identified
- [ ] Headings navigable (VO + Cmd + H)

### Color Contrast Check
Use browser extension:
- Chrome: "WAVE" or "axe DevTools"
- Firefox: "WAVE" extension

Target: WCAG AA (4.5:1 for normal text, 3:1 for large)

## Mobile Testing

### Browser DevTools
Chrome DevTools → Toggle device toolbar (Cmd + Shift + M)

Test devices:
- iPhone SE (375px)
- iPhone 12 Pro (390px)
- iPad (768px)
- iPad Pro (1024px)

### Real Device Testing
Recommended:
- iPhone (Safari)
- Android phone (Chrome)
- iPad (Safari)

Test checklist:
- [ ] Navigation menu works
- [ ] Forms usable
- [ ] Images load
- [ ] CTAs tap-friendly (44x44px minimum)
- [ ] Text readable (16px minimum)
- [ ] No horizontal scroll

## Cross-Browser Testing

### Required Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Testing Steps
For each browser:
1. Homepage loads correctly
2. Navigation works
3. Forms submit
4. Images display
5. Console clean (no errors)
6. Layout correct at all breakpoints

## Form Testing

### Contact Form
1. Test required fields validation
2. Test email format validation
3. Submit with valid data
4. Check success message
5. Verify honeypot protection

### Quote Form
1. Test all dropdowns populate
2. Test slider functionality
3. Submit complete form
4. Check Odoo integration (when connected)

### Emergency Form
1. Test priority flow
2. Verify phone CTA prominent
3. Test quick submission
4. Check emergency routing

## API Testing

### Odoo Integration (when credentials added)
```bash
# Test Odoo connection
curl http://localhost:3000/api/test-odoo
```

Expected: Connection successful

### Form Endpoints
```bash
# Test contact form
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message","gdprConsent":true,"honeypot":""}'

# Expected: {"success":true}
```

## SEO Testing

### Sitemap
```bash
curl http://localhost:3000/sitemap.xml
```
Expected: XML with all pages

### Robots.txt
```bash
curl http://localhost:3000/robots.txt
```
Expected: Rules + sitemap reference

### Meta Tags Check
Use browser extension:
- "META SEO inspector"
- "SEO Minion"

Verify each page:
- [ ] Unique title
- [ ] Meta description
- [ ] OpenGraph tags
- [ ] Canonical URL

### Structured Data
Use Google's Rich Results Test:
https://search.google.com/test/rich-results

Test:
- LocalBusiness schema
- Article schema (blog)
- Review schema

## Security Testing

### Headers Check
```bash
curl -I http://localhost:3000
```

Verify:
- X-Frame-Options present
- Content-Security-Policy present

### Environment Variables
Check .env.local:
- [ ] Not in git
- [ ] All required vars set
- [ ] No secrets exposed

## Load Testing (Optional)

### Using Apache Bench
```bash
ab -n 1000 -c 10 http://localhost:3000/
```

Target:
- Response time < 200ms (average)
- 0 failed requests

## Deployment Testing

### Pre-Deployment Checklist
- [ ] All tests pass
- [ ] Build successful
- [ ] No console errors
- [ ] Analytics working
- [ ] Forms submitting
- [ ] Images optimized

### Post-Deployment Verification
1. Check production URL loads
2. Test all forms
3. Verify analytics firing
4. Check Search Console
5. Monitor error logs
6. Test from different locations/devices

## Continuous Monitoring

### Analytics (GA4)
Monitor:
- Page views
- Form submissions
- Phone clicks
- Quote requests
- Error rates

### Search Console
Monitor:
- Indexing status
- Core Web Vitals
- Mobile usability
- Coverage errors

### Error Tracking
Consider adding:
- Sentry (error tracking)
- LogRocket (session replay)
- Hotjar (heatmaps)

## Rollback Procedure

If issues found in production:

1. Revert to previous commit:
```bash
git revert HEAD
git push
```

2. Trigger new deployment

3. Verify rollback successful

4. Investigate and fix issue

5. Re-deploy when fixed

---

**Last Updated**: 2025-01-11
**Tested By**: Development Team
**Next Review**: Before each major release
