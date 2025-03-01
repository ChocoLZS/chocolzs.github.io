import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { maintitle, maindescription } from '@/data/localeMetadata'
import { fallbackLng, LocaleTypes } from './i18n/settings'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: { locale: LocaleTypes }
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  params: { locale },
  ...rest
}: PageSEOProps): Metadata {
  return {
    title,
    description: description || maindescription[locale] || maindescription[fallbackLng],
    openGraph: {
      title: `${title} | ${maintitle[locale] || maintitle[fallbackLng]}`,
      description: description || maindescription[locale],
      url: './',
      siteName: maintitle[locale] || maintitle[fallbackLng],
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: locale,
      type: 'website',
    },
    twitter: {
      title: `${title} | ${maintitle[locale] || maintitle[fallbackLng]}`,
      description: description
        ? description
        : maindescription[locale] || maindescription[fallbackLng],
      site: siteMetadata.siteUrl,
      creator: siteMetadata.author,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...rest,
  }
}
