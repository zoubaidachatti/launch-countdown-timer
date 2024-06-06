import { LanguageCodesEnum } from '@/config/enums';

export type LanguageType = {
  label: string;
  langCode: LanguageCodesEnum;
};

export const languages: LanguageType[] = [
  {
    label: 'language.english',
    langCode: LanguageCodesEnum.ENGLISH,
  },
  {
    label: 'language.french',
    langCode: LanguageCodesEnum.FRENCH,
  },
  {
    label: 'language.japanese',
    langCode: LanguageCodesEnum.JAPANESE,
  },
];
