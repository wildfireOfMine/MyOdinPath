import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import * as common_en from '../src/locales/en/translation.json'
import * as common_es from '../src/locales/es/translation.json'
import * as common_cat from '../src/locales/cat/translation.json'
import * as common_pr from '../src/locales/pr/translation.json'
import * as common_it from '../src/locales/it/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'es', 'cat', 'pr', 'it'],
    fallbackLng: 'en',
    resources: {
      en: {
        translation: common_en,
      },
      es: {
        translation: common_es,
      },
      cat: {
        translation: common_cat,
      },
      pr: {
        translation: common_pr,
      },
      it: {
        translation: common_it,
      },
    },
    ns: ["translation"],
    interpolation: { escapeValue: false },
    debug: false,
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });

export default i18n;