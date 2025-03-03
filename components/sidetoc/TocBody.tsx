'use client'

import TOCInline from 'pliny/ui/TOCInline'
import { useTranslation } from 'app/[locale]/i18n/client'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useParams } from 'next/navigation'
import useSidebarStore from './store'
import { Toc, TocItem as OriginalTocItem } from 'pliny/mdx-plugins/remark-toc-headings'
import clsx from 'clsx'

interface TocBodyProps {
  toc: Toc
}

interface TocItem extends OriginalTocItem {
  children?: TocItem[]
}

const filterToc = (toc: TocItem[]): TocItem[] => {
  return toc.map((item) => {
    const modifiedValue = item.url.replace(/-\d+$/, '')

    return {
      ...item,
      url: modifiedValue,
    }
  })
}

const TocBody = ({ toc }: TocBodyProps) => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'common')
  const { sidebarOpen } = useSidebarStore()

  const filteredToc = filterToc(toc as TocItem[])

  return (
    <div
      className={clsx('fixed left-0 top-0 z-50 h-screen shadow-lg transition-transform md:flex', {
        '-translate-x-full': !sidebarOpen,
        'translate-x-0': sidebarOpen,
      })}
    >
      <div className="sticky left-0 top-0 z-50 flex h-screen w-64 flex-col overflow-y-auto bg-[#fbfcfd] px-2 py-4 dark:bg-gray-800">
        <div className="mb-20 mt-20">
          <div className="text-xl font-bold text-heading-400">{t('sidetoc')}</div>
          <div className="my-auto mt-5 overflow-y-auto">
            <TOCInline
              toc={filteredToc}
              ulClassName="space-y-2 overflow-y-auto my-auto text-primary-500"
              liClassName="pl-3 hover:text-heading-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TocBody
