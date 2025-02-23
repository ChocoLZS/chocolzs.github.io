'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { locales } from 'app/[locale]/i18n/settings'
import { LoadingScreen } from '@/components/server'
import { fallbackLng } from 'app/[locale]/i18n/locales'

/**
 * Returns the preferred language among supported languages in config/i18nConfig
 * @param {boolean} ignoreRegion - If true, will use only the primary language subtag,
 * e.g. 'en' instead of 'en-US'
 */
export function getBrowserPreferredLanguage(ignoreRegion?: boolean): string {
  const languages = typeof window !== 'undefined' ? navigator.languages : []

  for (const language of languages) {
    const lang = ignoreRegion === true ? language.substring(0, 2) : language
    if (locales.includes(lang)) {
      return lang
    }
  }
  return fallbackLng
}

/**
 * Gets preferred language from either localStorage or navigator.languages
 * and redirects to the first supported locale.
 */
export default function ClientI18nRedirect() {
  const [locale, setLocale] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    const localStorageLocale = localStorage.getItem('lang') ?? ''
    if (localStorageLocale && locales.includes(localStorageLocale)) {
      setLocale(localStorageLocale)
    } else {
      setLocale(getBrowserPreferredLanguage(true))
    }
    if (locale) {
      router.replace(`/${locale}`)
    }
  }, [locale, router])

  return <main>loading</main>
}
