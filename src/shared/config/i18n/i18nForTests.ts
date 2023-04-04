import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../../../../public/locales/en/translation.json';
import translationRU from '../../../../public/locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

void i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false
    },

    resources
  });

export default i18n;
