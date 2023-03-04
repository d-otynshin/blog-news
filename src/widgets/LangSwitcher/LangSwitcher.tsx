import React, { FC } from 'react';
import { cn } from 'shared/lib/cn';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next'

interface ILangSwitcher {
  className?: string
}

export const LangSwitcher: FC<ILangSwitcher> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = async (): Promise<TFunction> =>
    await i18n.changeLanguage(
      i18n.language === 'ru' ? 'en' : 'ru'
    );

  return (
    <Button
      onClick={toggleLanguage}
      theme={ThemeButton.CLEAR}
      className={cn('', {}, [className])}
    >
      {t('language')}
    </Button>
  );
};
