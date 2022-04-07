import { version } from 'next-i18next/package.json'
import useNextTranslation from '../hooks/useNextTranslation'

export const Footer = () => {

  const { t } = useNextTranslation('footer')

  return (
    <footer>
      <p>
        {t('description')}
      </p>
      <p>
        next-i18next v
        {version}
      </p>
    </footer>
  )
}
