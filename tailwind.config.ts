import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // HeizCenter Brand Colors
        'brand-blue': {
          DEFAULT: 'hsl(var(--primary-blue))',
          dark: 'hsl(var(--primary-blue-dark))',
          light: 'hsl(var(--primary-blue-light))',
          'ultra-light': 'hsl(var(--primary-blue-ultra-light))',
        },
        'brand-orange': {
          DEFAULT: 'hsl(var(--secondary-orange))',
          dark: 'hsl(var(--secondary-orange-dark))',
          light: 'hsl(var(--secondary-orange-light))',
        },
        'brand-green': {
          DEFAULT: 'hsl(var(--tertiary-green))',
          dark: 'hsl(var(--tertiary-green-dark))',
          light: 'hsl(var(--tertiary-green-light))',
        },

        // Neutral Grays
        'brand-gray': {
          900: 'hsl(var(--gray-900))',
          800: 'hsl(var(--gray-800))',
          700: 'hsl(var(--gray-700))',
          500: 'hsl(var(--gray-500))',
          300: 'hsl(var(--gray-300))',
          200: 'hsl(var(--gray-200))',
          100: 'hsl(var(--gray-100))',
          50: 'hsl(var(--gray-50))',
        },

        // Status & Feedback Colors
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
        info: 'hsl(var(--info))',

        // Service-Specific Accents
        heating: 'hsl(var(--heating-red))',
        water: 'hsl(var(--water-blue))',
        climate: 'hsl(var(--climate-cyan))',
        solar: 'hsl(var(--solar-yellow))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
