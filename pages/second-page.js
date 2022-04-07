import Link from 'next/link'

import useTranslation from '../hooks/useTranslation'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Layout } from '../components/Layout'

const SecondPage = () => {

  const { t } = useTranslation('second-page')

  return (
    <Link href='/'>
      <button
        type='button'
      >
        {t('back-to-home')}
      </button>
    </Link>
  )
}

SecondPage.getLayout = (page) => <Layout>{page}</Layout>

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['second-page', 'footer']),
  },
})

export default SecondPage
