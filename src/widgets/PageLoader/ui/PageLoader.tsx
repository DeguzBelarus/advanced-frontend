import { type FC } from 'react';

import { Loader } from 'shared/ui/Loader/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';

interface Props {
  className?: string;
}

export const PageLoader: FC<Props> = ({ className = '' }) => {
  return (
    <div className={classNames(styles.PageLoader, [className])}>
      <Loader />
    </div>
  );
};
