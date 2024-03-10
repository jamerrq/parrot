// Type imports
import type { ManifestOptions } from 'vite-plugin-pwa'

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  baseURL: 'https://lumina-sigma.vercel.app/', // Change this to your production URL.
  description: 'Lumina: Minimalist Astro PWA Starter Template', // Change this to be your website's description.
  type: 'website',
  image: {
    url: 'https://res.cloudinary.com/dm064xuo5/image/upload/f_auto,q_auto/v1/lumina/xgp7endgqc62fygkprze', // Change this to your website's thumbnail.
    alt: 'Minimalist Astro PWA Starter Template', // Change this to your website's thumbnail description.
    width: 1200,
    height: 630
  },
  siteName: 'Lumina', // Change this to your website's name,
  twitter: {
    card: 'summary_large_image'
  }
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: 'Laura Ebooks', // Change this to your website's name.
  short_name: 'Lebooks', // Change this to your website's short name.
  description: 'A short app from his nigg friend',
  theme_color: '#2D3250', // Change this to your primary color.
  background_color: '#2D3250', // Change this to your background color.
  display: 'minimal-ui',
  icons: [
    {
      src: '/favicons/favicon-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/favicons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png'
    },
    {
      src: '/favicons/favicon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any maskable'
    }
  ]
}
