'use client'

import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import siteMetadata from '@/data/siteMetadata'
import { useTranslation } from 'app/[locale]/i18n/client'
import type { LocaleTypes } from 'app/[locale]/i18n/settings'
import { motion } from 'framer-motion'
import { useParams, usePathname } from 'next/navigation'
import type { JSX } from 'react'

import LangSwitch from '../langswitch'
import Link from '../mdxcomponents/Link'
import SearchButton from '../search/SearchButton'
import ThemeSwitch from '../theme/ThemeSwitch'
import AuthorsMenu from './AuthorsMenu'
import MobileNav from './MobileNav'

const Header = (): JSX.Element => {
  const locale = useParams()?.locale as LocaleTypes
  const { t } = useTranslation(locale, 'common')
  const pathname = usePathname()

  return (
    <header>
      <div className="flex items-center justify-between py-6">
        {/* ==== Logo + Title ==== */}
        <div>
          <Link href={`/${locale}/`} aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <div className="w-8 h-auto">
                <Logo />
              </div>
              {/* Title hiển thị từ siteMetadata */}
              <div className="hidden text-lg font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            </div>
          </Link>
        </div>

        {/* ==== Navigation Menu ==== */}
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => {
              const isSelected = pathname.includes(link.href as string)
              return (
                <Link
                  key={link.title}
                  href={`/${locale}${link.href}`}
                  className="flex transform-gpu items-center space-x-1 transition-transform duration-300"
                >
                  <div
                    className={`hidden font-medium relative rounded-md px-2 py-1 transition-colors sm:block ${
                      isSelected
                        ? 'text-heading-500'
                        : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
                    }`}
                  >
                    <span className="relative z-10">{t(link.title.toLowerCase())}</span>
                    {isSelected && (
                      <motion.span
                        layoutId="tab"
                        transition={{ type: 'spring', duration: 0.4 }}
                        className="absolute inset-0 z-0 rounded-md bg-gray-100 dark:bg-gray-600"
                      />
                    )}
                  </div>
                </Link>
              )
            })}

          {/* ==== Right-side controls ==== */}
          <AuthorsMenu className="hidden sm:block" />
          <SearchButton />
          <ThemeSwitch />
          <LangSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
