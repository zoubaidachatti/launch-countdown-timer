import { STORAGE_KEYS } from '@/config/constants';
import i18nInstance from '@/locales/i18nInstance';
import { persistData } from '@/utils';
import { useState, useEffect } from 'react';

const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18nInstance.language);

  useEffect(() => {
    const handleLanguageChange = (newLanguage: string) => {
      setCurrentLanguage(newLanguage);
    };

    i18nInstance.on('languageChanged', handleLanguageChange);

    return () => {
      i18nInstance.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const changeLanguage = (newLanguage: string) => {
    persistData(STORAGE_KEYS.languageKey, newLanguage);
    i18nInstance.changeLanguage(newLanguage);
  };

  return { currentLanguage, changeLanguage };
};

export default useLanguage;
