const fallbackLng = 'zh'
const secondLng = 'en'

const locales = {
  fallbackLng: {
    name: '中文',
    locale: fallbackLng,
  },
  secondLng: {
    name: 'English',
    locale: secondLng,
  },
}

console.log(Object.values(locales))
