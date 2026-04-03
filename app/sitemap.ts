import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sysmoai.com'
  const now = new Date()

  const routes = [
    { path: '/', priority: 1.0, freq: 'weekly' as const },
    { path: '/about', priority: 0.9, freq: 'monthly' as const },
    { path: '/services', priority: 0.9, freq: 'monthly' as const },
    { path: '/industries', priority: 0.9, freq: 'monthly' as const },
    { path: '/contact', priority: 0.8, freq: 'monthly' as const },
    { path: '/blog', priority: 0.7, freq: 'weekly' as const },
    { path: '/privacy', priority: 0.4, freq: 'yearly' as const },
    { path: '/terms', priority: 0.4, freq: 'yearly' as const },
  ]

  return routes.map(({ path, priority, freq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  }))
}
