import type { InitOptions } from 'i18next'
import { fallbackLng, locales as rawLocales } from '@/data/locale.js'

export const locales = rawLocales.map((locale) => locale.locale)
export const localesInfo = rawLocales
export type LocaleTypes = (typeof locales)[number]
export const defaultNS = 'common'
export { fallbackLng }

export function getOptions(locale = fallbackLng, ns = defaultNS): InitOptions {
  return {
    debug: false,
    supportedLngs: locales,
    fallbackLng,
    lng: locale,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
