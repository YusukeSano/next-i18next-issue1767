import { appWithTranslation } from 'next-i18next'

import { Layout } from '../components/Layout'

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default appWithTranslation(MyApp)
