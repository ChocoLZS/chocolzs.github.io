'use client'

import { useState, useEffect } from 'react'
import { init } from '@waline/client'
import '@waline/client/style'
import siteMetadata from '@/data/siteMetadata'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'
import { useParams } from 'next/navigation'

export default function WalineComments() {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'home')
  const [loadComments, setLoadComments] = useState<boolean>(false)

  useEffect(() => {
    let element: HTMLDivElement | null

    if (loadComments) {
      element = document.getElementById('waline') as HTMLDivElement
      init({
        el: '#waline',
        lang: locale,
        reaction: [],
        serverURL: siteMetadata.walineServer,
        emoji: [
          'https://unpkg.com/@waline/emojis@1.2.0/bilibili',
          'https://unpkg.com/@waline/emojis@1.2.0/tieba',
          'https://unpkg.com/@waline/emojis@1.2.0/qq',
          'https://unpkg.com/@waline/emojis@1.2.0/alus'
        ],
        pageview: true,
        comment: true
      })
    }

    return () => {}
  }, [loadComments, locale])

  return (
    <>
      {!loadComments && (
        <button
          className="mb-6 rounded bg-primary-500 p-2 text-white hover:opacity-80 dark:hover:opacity-80"
          onClick={() => setLoadComments(true)}
        >
          {t('comment')}
        </button>
      )}
      {loadComments && <div className="mb-6 mt-6" id="waline" />}
    </>
  )
}
