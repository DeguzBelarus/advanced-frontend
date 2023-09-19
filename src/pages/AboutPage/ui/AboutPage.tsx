import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './AboutPage.module.scss';

const AboutPage: FC = () => {
  const { t } = useTranslation('about-page');
  return (
    <div className={styles['about-page-wrapper']}>
      <h1>{t('About project')}</h1>
    </div>
  );
};

export default AboutPage;
