import { Metadata } from 'next'
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/[locale]/seo'
import { createTranslation } from 'app/[locale]/i18n/server'
import { locales, LocaleTypes } from 'app/[locale]/i18n/settings'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    locale: LocaleTypes
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata | undefined> {
  const { locale } = await params
  // const authorSlug = decodeURI(authors.join('/'))
  // const author = allAuthors.find((a) => a.slug === authorSlug && a.language === locale) as Authors
  // if (!author) {
  //   return
  // }
  const { t } = await createTranslation(locale, 'about')

  return genPageMetadata({
    title: `${t('about')} ChocoLZS`,
    params: { locale },
  })
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params
  const author = allAuthors.find((a) => a.slug === 'default' && a.language === locale) as Authors
  if (!author) {
    return notFound()
  }
  const mainContent = coreContent(author)

  return (
    <AuthorLayout params={{ locale }} content={mainContent}>
      <MDXLayoutRenderer code={author.body.code} />
    </AuthorLayout>
  )
}
