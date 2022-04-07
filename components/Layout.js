import { useRouter } from 'next/router'

import useTranslation from '../hooks/useTranslation'
import { AnimatePresence, motion } from 'framer-motion'

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = ({ children }) => {
  
  const router = useRouter()
  const { t } = useTranslation(router.pathname === '/' ? 'common' : 'second-page')

  return (
    <>
      <main>
        <Header heading={t("h1")} title={t("title")} />
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};
