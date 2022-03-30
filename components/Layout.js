import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = ({ children }) => {
  
  const path = useRouter().pathname
  const { t } = useTranslation(path === '/' ? 'common' : 'second-page')

  return (
    <>
      <main>
        <Header heading={t("h1")} title={t("title")} />
        {children}
      </main>
      <Footer />
    </>
  );
};
