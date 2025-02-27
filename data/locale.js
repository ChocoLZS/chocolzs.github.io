import { Deployment } from './blog/feature-flags'

const lang_zh = {
  name: '中文',
  locale: 'zh',
}
const lang_en = {
  name: 'English',
  locale: 'en',
}

const fallbackLng = lang_zh.locale
const fallbackLocale = lang_zh

const locales = Deployment.IS_LANG_ZH_ONLY ? [fallbackLocale] : [fallbackLocale, lang_en]

export { fallbackLng, locales }
