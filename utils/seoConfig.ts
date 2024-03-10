// Type imports
import type { ManifestOptions } from 'vite-plugin-pwa'

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
  baseURL: 'https://parrot-mu.vercel.app/', // Change this to your production URL.
  description: 'Parrot', // Change this to be your website's description.
  type: 'website',
  image: {
    url: 'https://res.cloudinary.com/dm064xuo5/image/upload/f_auto,q_auto/v1/others/cwkzbljmebukwzmbxdng', // Change this to your website's thumbnail.
    alt: 'Parrot', // Change this to your website's thumbnail description.
    width: 1366,
    height: 748
  },
  siteName: 'Parrot', // Change this to your website's name,
  twitter: {
    card: 'summary_large_image'
  }
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
  name: 'Parrot', // Change this to your website's name.
  short_name: 'Parrot', // Change this to your website's short name.
  description: 'Parrot',
  theme_color: '#A5DD9B', // Change this to your primary color.
  background_color: '#A5DD9B', // Change this to your background color.
  display: 'fullscreen',
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
