import { type FC } from 'react';

import { AppLink } from 'shared/ui';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLinkThemeEnum } from 'shared/ui/AppLink/AppLink';
import styles from './Header.module.scss';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className = '' }) => {
  return (
    <header className={classNames(styles.Header, [className])}>
      <div className={styles['links-container']}>
        <AppLink to={'/'} theme={AppLinkThemeEnum.SECONDARY}>
          Main
        </AppLink>
        <AppLink to={'/about'} theme={AppLinkThemeEnum.SECONDARY}>
          About
        </AppLink>
      </div>
    </header>
  );
};
