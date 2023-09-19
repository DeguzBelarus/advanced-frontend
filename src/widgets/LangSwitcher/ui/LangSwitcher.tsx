import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButtonEnum } from 'shared/ui/Button/Button';
import styles from './LangSwitcher.module.scss';

interface Props {
  className?: string;
}

export const LangSwitcher: FC<Props> = ({ className = '' }) => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const toggleLanguage = async () => await changeLanguage(language === 'en' ? 'ru' : 'en');
  return (
    <Button
      theme={ThemeButtonEnum.CLEAR}
      className={classNames(styles.LangSwitcher, [className])}
      onClickMethod={async () => {
        await toggleLanguage();
      }}
    >
      {language.toUpperCase()}
    </Button>
  );
};
