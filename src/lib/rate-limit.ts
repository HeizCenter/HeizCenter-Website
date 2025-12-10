/**
 * Simple in-memory rate limiter for API routes
 *
 * Limits requests per IP address within a time window.
 * Note: For production with multiple instances, use Redis instead.
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory store for rate limiting
const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of Array.from(rateLimitStore.entries())) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

interface RateLimitConfig {
  /** Maximum number of requests allowed in the window */
  maxRequests: number;
  /** Time window in seconds */
  windowSeconds: number;
}

interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetIn: number; // seconds until reset
}

/**
 * Check if a request should be rate limited
 *
 * @param identifier - Unique identifier (usually IP address)
 * @param endpoint - API endpoint name (for separate limits per endpoint)
 * @param config - Rate limit configuration
 * @returns Result indicating if request is allowed
 */
export function checkRateLimit(
  identifier: string,
  endpoint: string,
  config: RateLimitConfig
): RateLimitResult {
  const key = `${endpoint}:${identifier}`;
  const now = Date.now();
  const windowMs = config.windowSeconds * 1000;

  const entry = rateLimitStore.get(key);

  // No existing entry or window expired - create new entry
  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs,
    });
    return {
      success: true,
      remaining: config.maxRequests - 1,
      resetIn: config.windowSeconds,
    };
  }

  // Within window - check limit
  if (entry.count >= config.maxRequests) {
    const resetIn = Math.ceil((entry.resetTime - now) / 1000);
    return {
      success: false,
      remaining: 0,
      resetIn,
    };
  }

  // Increment counter
  entry.count += 1;
  const resetIn = Math.ceil((entry.resetTime - now) / 1000);

  return {
    success: true,
    remaining: config.maxRequests - entry.count,
    resetIn,
  };
}

/**
 * Get client IP from request headers
 * Works with Vercel, Cloudflare, and direct connections
 */
export function getClientIp(request: Request): string {
  // Vercel
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  // Cloudflare
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  // Real IP header
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // Fallback
  return 'unknown';
}

// Pre-configured rate limits for different form types
export const RATE_LIMITS = {
  // Contact form: 5 requests per 15 minutes
  contact: {
    maxRequests: 5,
    windowSeconds: 15 * 60,
  },
  // Quote form: 3 requests per 15 minutes
  quote: {
    maxRequests: 3,
    windowSeconds: 15 * 60,
  },
  // Emergency form: 10 requests per 15 minutes (allow more for emergencies)
  emergency: {
    maxRequests: 10,
    windowSeconds: 15 * 60,
  },
} as const;
