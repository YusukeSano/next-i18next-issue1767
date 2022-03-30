import { useRouter } from 'next/router'

import { appWithTranslation } from 'next-i18next'
import { AnimatePresence } from 'framer-motion'

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}

export default function AppWithTransition(props) {

  const App = appWithTranslation(MyApp)
  const router = useRouter()

  return (
    <AnimatePresence exitBeforeEnter>
      <App key={router.asPath} {...props} />
    </AnimatePresence>
  )
}
