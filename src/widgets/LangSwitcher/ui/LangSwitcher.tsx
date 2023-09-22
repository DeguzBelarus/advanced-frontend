import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ThemeButtonEnum } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './LangSwitcher.module.scss';

interface Props {
  className?: string;
}

export const LangSwitcher: FC<Props> = ({ className = '' }) => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation('translation');
  const toggleLanguage = async () => await changeLanguage(language === 'en' ? 'ru' : 'en');
  return (
    <Button
      theme={ThemeButtonEnum.CLEAR}
      className={classNames(styles.LangSwitcher, [className])}
      onClickMethod={async () => {
        await toggleLanguage();
      }}
    >
      {language?.includes('EN') || language?.includes('en') ? 'EN' : 'RU'}
    </Button>
  );
};
