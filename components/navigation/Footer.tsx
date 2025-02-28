'use client'

import Link from '../mdxcomponents/Link'
import siteMetadata from '@/data/siteMetadata'
import { maintitle } from '@/data/localeMetadata'
import SocialIcon, { SocialIconProps } from '@/components/social-icons'

import { useParams } from 'next/navigation'
import { LocaleTypes } from 'app/[locale]/i18n/settings'
import { useTranslation } from 'app/[locale]/i18n/client'

import { useContactModal } from '../formspree/store'
import { ContactModal } from '../formspree'

const SNS = {
  github: siteMetadata.github,
  facebook: siteMetadata.facebook,
  youtube: siteMetadata.youtube,
  linkedin: siteMetadata.linkedin,
  x: siteMetadata.x,
  instagram: siteMetadata.instagram,
  threads: siteMetadata.threads,
}

export default function Footer() {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'footer')
  const contactModal = useContactModal()

  const handleContactClick = (): void => {
    contactModal.onOpen()
  }
  function ContactClick(): void {
    handleContactClick()
  }

  return (
    <>
      <footer>
        <div className="mt-16 flex flex-col items-center">
          <div className="mb-3 flex space-x-4">
            <div className="flex items-center">
              {siteMetadata.formspree === false ? (
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              ) : (
                <button className="flex items-center focus:outline-none" onClick={ContactClick}>
                  <SocialIcon kind="mail" size={6} />
                </button>
              )}
            </div>
            {Object.entries(SNS)
              .filter(([key, value]) => Boolean(value))
              .map(([key, value]) => (
                <div key={key} className="flex items-center">
                  <SocialIcon kind={key as SocialIconProps['kind']} href={value} size={6} />
                </div>
              ))}
          </div>
          <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{siteMetadata.author}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <Link href="/">{maintitle[locale]}</Link>
          </div>
          <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">{t('content')}</div>
        </div>
      </footer>
      <ContactModal />
    </>
  )
}
