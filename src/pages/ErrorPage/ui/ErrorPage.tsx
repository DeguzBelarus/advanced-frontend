import { type FC } from 'react';

import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ErrorPage.module.scss';

interface Props {
  className?: string;
  errorMessage: string;
}

export const ErrorPage: FC<Props> = ({ className = '', errorMessage }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.ErrorPage, [className])}>
      <p className={classNames(styles['error-paragraph'])}>{`${t(
        'Something went wrong',
      )} "${errorMessage}"`}</p>
    </div>
  );
};
