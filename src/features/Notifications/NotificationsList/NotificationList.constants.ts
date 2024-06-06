import { GlobalVariables } from '@/config/constants';
import { generateRandomString } from '@/utils';
import { faker } from '@faker-js/faker';

export const notifications = [
  {
    day: 'calendar.today',
    list: [
      {
        id: 45,
        avatar: GlobalVariables.imageURL + generateRandomString(),
        text: 'notification.user_commented_on_post',
        username: faker.person.fullName(),
        received: 'calendar.one_min',
      },
      {
        id: 47,
        avatar: GlobalVariables.imageURL + generateRandomString(),
        text: 'notification.started_following_you',
        username: faker.person.fullName(),
        received: 'calendar.five_minutes',
      },
      {
        id: 46,
        avatar: GlobalVariables.imageURL + generateRandomString(),
        text: 'notification.liked_your_photo',
        username: faker.person.fullName(),
        received: 'calendar.ten_minutes',
      },
    ],
  },
  {
    day: 'calendar.yesterday',
    list: [
      {
        id: 47,
        avatar: GlobalVariables.imageURL + generateRandomString(),
        text: 'notification.started_following_you',
        username: faker.person.fullName(),
        received: 'calendar.one_day_short',
      },
      {
        id: 48,
        avatar: GlobalVariables.imageURL + generateRandomString(),
        text: 'notification.liked_your_photo',
        username: faker.person.fullName(),
        received: 'calendar.one_day_short',
      },
    ],
  },
];
