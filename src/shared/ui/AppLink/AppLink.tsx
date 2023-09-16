import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/classNames";
import styles from './AppLink.module.scss';

export enum AppLinkThemeEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface Props extends LinkProps {
  className?: string;
  children?: React.ReactNode;
  theme?: AppLinkThemeEnum;
}

export const AppLink: FC<Props> = ({ className, children, theme = AppLinkThemeEnum.PRIMARY, to, ...otherProps }) => {
  return (
    <Link to={to} className={classNames(styles.AppLink, [className], { [styles[theme]]: true })} {...otherProps}>
      {children}
    </Link>
  )
};