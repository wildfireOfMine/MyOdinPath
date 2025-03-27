import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as common_en from '../src/locales/en/translation.json'
import * as common_es from '../src/locales/es/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: 'es',
    resources: {
      en: {
        translation: common_en,
      },
      es: {
        translation: common_es,
      },
    },
    ns: ["translation"],
    interpolation: { escapeValue: false },
    debug: true,
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });

export default i18n;