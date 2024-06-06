import { GlobalVariables } from '@/config/constants';
import { DateUnitEnum } from '@/config/enums';
import i18nInstance from '@/locales/i18nInstance';
import { addDayToDate, calculateTimePassed, dateToTimestamp, formatDate, isSame } from '../helpers';

export const generatePassedTimeString = (
  timestamp: number,
  langCode: string,
  dateFormat?: string,
  disableSeconds?: boolean,
) => {
  const originalDate = timestamp;

  const today = dateToTimestamp();

  const yesterday = addDayToDate(today, -1);

  const passedDate = calculateTimePassed(originalDate);

  switch (true) {
    case passedDate.unit === DateUnitEnum.SECOND:
      return disableSeconds
        ? i18nInstance.t('calendar.one_min')
        : i18nInstance.t('calendar.just_now');
    case passedDate.unit === DateUnitEnum.MINUTE:
    case passedDate.unit === DateUnitEnum.HOUR: {
      const label = `${passedDate.label}_minified`;
      return `${passedDate.value}${i18nInstance.t(label)}`;
    }
    case isSame(originalDate, yesterday, 'day'):
      return i18nInstance.t('calendar.yesterday');
    default:
      return formatDate(
        timestamp,
        dateFormat ?? GlobalVariables.dateFormats.DefaultFormat,
        langCode,
      );
  }
};
