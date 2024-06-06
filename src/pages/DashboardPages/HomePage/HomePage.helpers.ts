import { getHour } from '@/utils';

export const getGreeting = () => {
  const currentHour = getHour();

  if (currentHour >= 5 && currentHour < 12) {
    return 'dashboard.good_morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'dashboard.good_afternoon';
  } else if (currentHour >= 18 && currentHour < 22) {
    return 'dashboard.good_evening';
  } else {
    return 'dashboard.good_night';
  }
};
