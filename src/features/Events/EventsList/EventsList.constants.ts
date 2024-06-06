import { generateRandomNumber } from '@/utils';
import { faker } from '@faker-js/faker';

export const events = [
  {
    id: 79,
    day: generateRandomNumber(896104375, 1274795575),
    month: generateRandomNumber(896104375, 1274795575),
    title: 'event.event_title_1',
    subtitle: 'event.event_subtitle_1',
    location: faker.location.streetAddress({ useFullAddress: true }),
    variant: 'primary',
  },
  {
    id: 78,
    day: generateRandomNumber(896104375, 1274795575),
    month: generateRandomNumber(896104375, 1274795575),
    title: 'event.event_title_2',
    subtitle: 'event.event_subtitle_2',
    location: faker.location.streetAddress({ useFullAddress: true }),
    variant: 'secondary',
  },
  {
    id: 79,
    day: generateRandomNumber(896104375, 1274795575),
    month: generateRandomNumber(896104375, 1274795575),
    title: 'event.event_title_3',
    subtitle: 'event.event_subtitle_3',
    location: faker.location.streetAddress({ useFullAddress: true }),
    variant: 'warning',
  },
];
