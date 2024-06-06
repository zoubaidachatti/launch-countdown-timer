import { GlobalVariables } from '@/config/constants';
import { HeadCell } from '@/types/interfaces';
import {
  generateRandomNumber,
  generateRandomString,
  generateUniqueIds,
  getTimeStamp,
} from '@/utils';
import { faker } from '@faker-js/faker';

export function createRandomUser() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    photo: GlobalVariables.imageURL + generateRandomString(),
    jobType: faker.person.jobType(),
    pet: faker.internet.emoji({ types: ['flag'] }),
    food: faker.internet.emoji({ types: ['food'] }),
    joinedAt: generateRandomNumber(1306325492, 1716639092),
    lastLogin: generateRandomNumber(1306325492, getTimeStamp()),
  };
}

const uniqueIds = generateUniqueIds(40, 1, 9999);

export const users = Array.from({ length: 40 }, () => createRandomUser()).map((user, index) => ({
  ...user,
  id: uniqueIds[index],
}));

export const USERS_HEADER_LABELS: HeadCell[] = [
  {
    id: 'avatar',
    label: '',
    align: 'center',
    xsWidth: 10,
    isNotSortable: true,
  },
  {
    id: 'firstName',
    label: 'table.name',
    align: 'center',
    xsWidth: 25,
  },
  {
    id: 'favorite_food',
    label: 'table.favorite_food',
    align: 'center',
    xsWidth: 20,
  },
  {
    id: 'jobType',
    label: 'table.job_type',
    align: 'center',
    xsWidth: 30,
  },
  {
    id: 'lastLogin',
    label: 'table.activity',
    align: 'left',
    xsWidth: 15,
  },
];
