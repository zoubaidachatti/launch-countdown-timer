import { faker } from '@faker-js/faker';

export const testimonials = [
  {
    testimony: 'content.testimonial_1',
    user: {
      name: faker.person.fullName(),
      job: faker.person.jobTitle(),
      photo: faker.image.avatar(),
    },
  },
  {
    testimony: 'content.testimonial_2',
    user: {
      name: faker.person.fullName(),
      job: faker.person.jobTitle(),
      photo: faker.image.avatar(),
    },
  },
  {
    testimony: 'content.testimonial_3',
    user: {
      name: faker.person.fullName(),
      job: faker.person.jobTitle(),
      photo: faker.image.avatar(),
    },
  },
];
