const { Deployment } = require('./feature-flags')

const lang_zh = {
  name: '中文',
  locale: 'zh',
}
const lang_en = {
  name: 'English',
  locale: 'en',
}

const lang_debug = {
  name: 'Debug',
  locale: 'example',
}

const fallbackLng = lang_zh.locale
const fallbackLocale = lang_zh

const locales = Deployment.IS_LANG_ZH_ONLY ? [fallbackLocale] : [fallbackLocale, lang_en]

process.env.NODE_ENV === 'development' && locales.push(lang_debug)

module.exports = {
  fallbackLng,
  locales,
}
