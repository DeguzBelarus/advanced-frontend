import { FC } from "react";

import { IUseThemeResult } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui";
import { AppLinkThemeEnum } from "shared/ui/AppLink/AppLink";
import styles from './Header.module.scss';

interface Props {
  className?: string;
}

export const Header: FC<IUseThemeResult & Props> = ({ theme, themeHandler, className }) => {
  return <header className={classNames(styles.header, [className])}>
    <AppLink to={'/'} theme={AppLinkThemeEnum.SECONDARY}>Main</AppLink>
    <AppLink to={'/about'} theme={AppLinkThemeEnum.SECONDARY}>About</AppLink>
    <button className={styles['theme-handler-button']} onClick={themeHandler}>{theme}</button>
  </header>
};
