import { appWithTranslation } from 'next-i18next'
import { AnimatePresence } from 'framer-motion'

import { Layout } from '../components/Layout'

const MyApp = ({ Component, pageProps, router }) => (
  <Layout>
    <AnimatePresence exitBeforeEnter>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  </Layout>
)

export default appWithTranslation(MyApp)
