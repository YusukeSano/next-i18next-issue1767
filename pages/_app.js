import { useRouter } from 'next/router'

import { appWithTranslation } from 'next-i18next'
import { AnimatePresence } from 'framer-motion'

import { Layout } from '../components/Layout'

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default function AppWithTransition(props) {

  const App = appWithTranslation(MyApp)
  const router = useRouter()

  return (
    <AnimatePresence exitBeforeEnter>
      <App key={router.asPath} {...props} />
    </AnimatePresence>
  )
}
