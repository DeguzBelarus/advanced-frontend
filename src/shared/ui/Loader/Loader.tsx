import { type FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';

interface Props {
  className?: string;
}

export const Loader: FC<Props> = ({ className = '' }) => {
  return (
    <div className={classNames(styles.Loader, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
