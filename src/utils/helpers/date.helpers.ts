import { GlobalVariables } from '@/config/constants';
import { DateUnitEnum } from '@/config/enums';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/en';
import 'dayjs/locale/fr';
import 'dayjs/locale/ja';
import duration from 'dayjs/plugin/duration';
import utcPlugin from 'dayjs/plugin/utc';

dayjs.extend(utcPlugin);
dayjs.extend(duration);
type DateDiff = 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year';

/**
 * Returns the current year.
 * @returns {number} The current year.
 */
export function getCurrentYear(): number {
  return dayjs().year();
}

/**
 * Returns the timestamp of a given date or the current timestamp if no date is provided.
 * @param date - Optional. A string representing a date in any valid format. If not provided, the current date is used.
 * @returns A number representing the timestamp of the provided date or the current timestamp if no date is provided.
 */
export function getTimeStamp(date?: string): number {
  return date ? dayjs(date).valueOf() : dayjs().valueOf();
}

/**
 * Returns a Dayjs object representing the current date and time, or a specified date and time if a timestamp is provided.
 * @param stamp - Optional. A number representing a timestamp. If provided, the function will return a Dayjs object representing the date and time corresponding to the timestamp. If not provided, the function will return a Dayjs object representing the current date and time.
 * @returns A Dayjs object representing the current date and time if no timestamp is provided. A Dayjs object representing the date and time corresponding to the provided timestamp if a timestamp is provided.
 */
export function getDate(stamp?: number): Dayjs {
  return dayjs(stamp);
}

export function getHour(stamp?: number) {
  return dayjs(stamp).hour();
}

export const formatDate = (timestamp: number, format: string, local?: string): string => {
  const isSeconds = timestamp < 172800;

  return dayjs
    .unix(isSeconds ? dayjs().utc().startOf('day').unix() + timestamp : timestamp)
    .locale(local ?? 'en')
    .format(format);
};

export const dateToTimestamp = (date?: Date | string | number): number => {
  return dayjs(date).unix();
};

export const addDayToDate = (date: number, days: number): number => {
  return dayjs.unix(date).add(days, 'day').unix();
};

export const isSame = (date: number, dateToCompare: number, option?: DateDiff): boolean => {
  return dayjs.unix(date).isSame(dayjs.unix(dateToCompare), option);
};

export const calculateTimePassed = (timestamp: number) => {
  const now = dayjs();
  const pastTime = dayjs.unix(timestamp);

  const d = dayjs.duration(now.diff(pastTime));

  const years = d.years();
  const months = d.months();
  const days = d.days();
  const hours = d.hours();
  const minutes = d.minutes();
  const seconds = d.seconds();

  switch (true) {
    case Boolean(years):
      return {
        unit: DateUnitEnum.YEAR,
        value: years,
        label: years >= GlobalVariables.manyDataLength ? 'calendar.years' : 'calendar.year',
      };
    case Boolean(months):
      return {
        unit: DateUnitEnum.MONTH,
        value: months,
        label: months >= GlobalVariables.manyDataLength ? 'calendar.months' : 'calendar.month',
      };
    case Boolean(days):
      return {
        unit: DateUnitEnum.DAY,
        value: days,
        label: days >= GlobalVariables.manyDataLength ? 'calendar.days' : 'calendar.day',
      };
    case Boolean(hours):
      return {
        unit: DateUnitEnum.HOUR,
        value: hours,
        label: hours >= GlobalVariables.manyDataLength ? 'calendar.hours' : 'calendar.hour',
      };
    case Boolean(minutes):
      return {
        unit: DateUnitEnum.MINUTE,
        value: minutes,
        label: minutes >= GlobalVariables.manyDataLength ? 'calendar.minutes' : 'calendar.minute',
      };

    default:
      return {
        unit: DateUnitEnum.SECOND,
        value: seconds,
        label: seconds >= GlobalVariables.manyDataLength ? 'calendar.seconds' : 'calendar.second',
      };
  }
};
