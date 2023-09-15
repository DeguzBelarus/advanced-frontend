import { FC } from "react";
import { Link } from "react-router-dom";

import { IUseThemeResult } from "app/providers/ThemeProvider/lib/useTheme";
import styles from './Header.module.scss';

export const Header: FC<IUseThemeResult> = ({ theme, themeHandler }) => {
  return <header className={styles.header}>
    <Link to={'/'}>Main</Link>
    <Link to={'/about'}>About</Link>
    <button className={styles['theme-handler-button']} onClick={themeHandler}>{theme}</button>
  </header>
};
