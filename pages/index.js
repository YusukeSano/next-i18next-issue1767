import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Homepage = () => {

  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <div>
      <Link
        href='/'
        locale={router.locale === 'en' ? 'de' : 'en'}
      >
        <button>
          {t('change-locale')}
        </button>
      </Link>
      <Link href='/second-page'>
        <button
          type='button'
        >
          {t('to-second-page')}
        </button>
      </Link>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})

export default Homepage
