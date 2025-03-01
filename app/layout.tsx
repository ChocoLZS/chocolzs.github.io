import 'assets/css/tailwind.css'
import 'pliny/search/algolia.css'

import { fallbackLng } from './[locale]/i18n/settings'
import { generateMetadata as _generateMetadata } from './[locale]/layout'

export function generateMetadata() {
  return _generateMetadata({ params: { locale: fallbackLng } })
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
