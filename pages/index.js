import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { motion } from 'framer-motion'

const Homepage = () => {

  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})

export default Homepage
