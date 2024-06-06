import { ColorsConfig } from '@/config/constants';
import { HeadCell } from '@/types/interfaces';
import { generateUniqueIds } from '@/utils';
import { faker } from '@faker-js/faker';
import { alpha } from '@mui/material';

export const EMPLOYEES_HEADER_LABELS: HeadCell[] = [
  {
    id: 'select_all',
    label: '',
    align: 'center',
    isSelect: true,
    xsWidth: 4.5,
  },
  {
    id: 'id',
    label: 'table.id',
    align: 'center',
    xsWidth: 4.5,
  },
  {
    id: 'firstName',
    label: 'table.first_name',
    align: 'center',
    xsWidth: 15,
  },
  {
    id: 'lastName',
    label: 'table.last_name',
    align: 'center',
    xsWidth: 15,
  },
  {
    id: 'email',
    label: 'table.email',
    align: 'center',
    xsWidth: 15,
  },
  {
    id: 'jobType',
    label: 'table.job_type',
    align: 'center',
    xsWidth: 15,
  },
  {
    id: 'pet',
    label: 'table.favorite_pet',
    align: 'center',
    xsWidth: 15,
  },
  {
    id: 'action',
    label: 'table.actions',
    align: 'center',
    isAction: true,
    isNotSortable: true,
    xsWidth: 16,
  },
];

export const randomColors = [
  alpha(ColorsConfig.primary.main, 0.5),
  alpha(ColorsConfig.primary.light, 0.5),
  alpha(ColorsConfig.primary.dark, 0.5),

  alpha(ColorsConfig.secondary.main, 0.5),
  alpha(ColorsConfig.secondary.light, 0.5),
  alpha(ColorsConfig.secondary.dark, 0.5),

  alpha(ColorsConfig.error.main, 0.5),
  alpha(ColorsConfig.error.light, 0.5),
  alpha(ColorsConfig.error.dark, 0.5),

  alpha(ColorsConfig.success.main, 0.5),
  alpha(ColorsConfig.success.light, 0.5),
  alpha(ColorsConfig.success.dark, 0.5),

  alpha(ColorsConfig.warning.main, 0.5),
  alpha(ColorsConfig.warning.light, 0.5),
  alpha(ColorsConfig.warning.dark, 0.5),

  alpha(ColorsConfig.info.main, 0.5),
  alpha(ColorsConfig.info.light, 0.5),
  alpha(ColorsConfig.info.dark, 0.5),
];

export function createRandomUser() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    photo: faker.image.avatar(),
    jobType: faker.person.jobType(),
    pet: faker.animal.type(),
  };
}

const uniqueIds = generateUniqueIds(10, 10, 200);

export const fakeEmployeesData = Array.from({ length: 10 }, () => createRandomUser()).map(
  (user, index) => ({ ...user, id: uniqueIds[index] }),
);
