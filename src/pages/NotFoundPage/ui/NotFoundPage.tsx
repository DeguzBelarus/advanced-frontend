import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import styles from './NotFoundPage.module.scss';

interface Props {
  className?: string;
}

export const NotFoundPage: FC<Props> = ({ className = '' }) => {
  const { t } = useTranslation();
  return <div className={classNames(styles.NotFoundPage, [className])}>{t('Page not found')}</div>;
};