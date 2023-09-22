import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';

interface Props {
  className?: string;
}

export const NotFoundPage: FC<Props> = ({ className = '' }) => {
  const { t } = useTranslation('translation');
  return <div className={classNames(styles.NotFoundPage, [className])}>{t('Page not found')}</div>;
};
