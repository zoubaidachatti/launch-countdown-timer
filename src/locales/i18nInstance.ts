import { LanguageCodes, STORAGE_KEYS } from '@/config/constants';
import { getPersistData, localeToLanguage, persistData } from '@/utils';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { fr } from './fr';
import { ja } from './ja';

const browserLanguage = localeToLanguage(window.navigator.language);
const initialLanguage =
  getPersistData(STORAGE_KEYS.languageKey) || browserLanguage || LanguageCodes.FALLBACK.short;

const i18nInstance = i18n.createInstance();

i18nInstance.use(initReactI18next).init({
  resources: {
    fr: {
      translation: fr,
    },
    en: {
      translation: en,
    },
    ja: {
      translation: ja,
    },
  },
  lng: initialLanguage,
  fallbackLng: LanguageCodes.FALLBACK.short,
  interpolation: {
    escapeValue: false,
  },
});

i18nInstance.on('languageChanged', (lng) => {
  persistData(STORAGE_KEYS.languageKey, lng);
});

export default i18nInstance;
