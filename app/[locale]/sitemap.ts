import { MetadataRoute } from 'next'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { localesInfo, fallbackLng } from './i18n/settings'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl
  const today = new Date().toISOString().split('T')[0]

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .flatMap((post) => {
      const mainUrl = `${siteUrl}/${fallbackLng}/blog/${post.slug}`
      const alternatepostsUrls: { url: string; lang: string }[] = []

      if (post.language !== fallbackLng) {
        const alternatepostsUrl = `${siteUrl}/${post.language}/blog/${post.slug}`
        alternatepostsUrls.push({ url: alternatepostsUrl, lang: post.language })
      }

      return [{ url: mainUrl, lastModified: post.lastmod || post.date }, ...alternatepostsUrls]
    })

  const authorsRoutes = allAuthors.flatMap((author) => {
    const mainUrl = `${siteUrl}/${fallbackLng}/about/${author.slug}`
    const alternateauthorsUrls: { url: string; lang: string }[] = []

    if (author.language !== fallbackLng) {
      const alternateauthorsUrl = `${siteUrl}/${author.language}/about/${author.slug}`
      alternateauthorsUrls.push({ url: alternateauthorsUrl, lang: author.language })
    }

    return [{ url: mainUrl }, ...alternateauthorsUrls]
  })

  const routes = ['', 'blog', 'projects', 'tags'].flatMap((route) => {
    const mainUrl = `${siteUrl}/${fallbackLng}/${route}`.replace(/\/$/, '')
    const alternateUrls: { url: string; lang: string }[] = []

    localesInfo.forEach(({ locale }) => {
      if (route !== locale) {
        const alternateUrl = `${siteUrl}/${locale}/${route}`.replace(/\/$/, '')
        alternateUrls.push({ url: alternateUrl, lang: locale })
      }
    })

    return [{ url: mainUrl, lastModified: today }, ...alternateUrls]
  })

  const combinedRoutes = [...routes, ...blogRoutes, ...authorsRoutes]

  // Filter out duplicate URLs and undefined values
  const uniqueRoutes = Array.from(new Set(combinedRoutes.map((route) => route.url)))
    .map((url) => {
      return combinedRoutes.find((route) => route.url === url)
    })
    .filter((route) => route !== undefined)

  return uniqueRoutes as MetadataRoute.Sitemap
}
