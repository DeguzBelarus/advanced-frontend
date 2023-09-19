import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './MainPage.module.scss';

const MainPage: FC = () => {
  const { t } = useTranslation('main-page');
  return (
    <div className={styles['main-page-wrapper']}>
      <h1>{t('Main page')}</h1>
    </div>
  );
};

export default MainPage;
