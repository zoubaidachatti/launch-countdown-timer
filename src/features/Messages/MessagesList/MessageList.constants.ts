import { GlobalVariables } from '@/config/constants';
import { ActivityStatus } from '@/config/enums';
import { generateRandomString } from '@/utils';
import { faker } from '@faker-js/faker';

export const messages = [
  {
    id: 90,
    avatar: GlobalVariables.imageURL + generateRandomString(),
    text: 'message.message_example_1',
    username: faker.person.fullName(),
    received: 'calendar.two_min_ago',
    status: ActivityStatus.online,
  },
  {
    id: 91,
    avatar: GlobalVariables.imageURL + generateRandomString(),
    text: 'message.message_example_2',
    username: faker.person.fullName(),
    received: 'calendar.one_day_ago',
    status: ActivityStatus.away,
  },
  {
    id: 92,
    avatar: GlobalVariables.imageURL + generateRandomString(),
    missedCall: true,
    username: faker.person.fullName(),
    received: 'calendar.two_day_ago',
    status: ActivityStatus.offline,
  },
  {
    id: 93,
    avatar: GlobalVariables.imageURL + generateRandomString(),
    callEnded: true,
    username: faker.person.fullName(),
    received: 'calendar.one_week_ago',
    status: ActivityStatus.busy,
  },
  {
    id: 94,
    avatar: GlobalVariables.imageURL + generateRandomString(),
    text: 'message.message_example_3',
    username: faker.person.fullName(),
    received: 'calendar.one_week_ago',
    status: ActivityStatus.online,
  },
];
