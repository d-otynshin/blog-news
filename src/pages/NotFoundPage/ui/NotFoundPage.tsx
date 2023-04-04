import React, { FC } from 'react';
import { cn } from 'shared/lib/cn';
import { useTranslation } from 'react-i18next'

interface INotFoundPage {
  className?: string
}

export const NotFoundPage: FC<INotFoundPage> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(null, {}, [className])}>
      {t('not found')}
    </div>
  );
};
