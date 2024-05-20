import { faker } from '@faker-js/faker';

export const NEWS = [...Array(5)].map((_, index) => ({
  id: faker.string.uuid(),
  title: faker.person.jobTitle(),
  description: faker.commerce.productDescription(),
  image: `/assets/images/covers/cover_${index % 5}.jpg`,
  postedAt: faker.date.recent(),
}));
