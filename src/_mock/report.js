import { faker } from '@faker-js/faker';

const generateData = (length, start, end) =>
  Array.from({ length }, () => faker.number.int(end - start) + start);

export const WEBSITE_VISITS = {
  labels: Array.from({ length: 12 }, (_, i) => `${i + 1}/01/2004`),
  series: [
    {
      name: 'Client A',
      type: 'column',
      fill: 'solid',
      data: generateData(12, 100, 300),
    },
    {
      name: 'Client B',
      type: 'area',
      fill: 'gradient',
      data: generateData(12, 300, 400),
    },
    {
      name: 'Client C',
      type: 'line',
      fill: 'solid',
      data: generateData(12, 350, 450),
    },
  ],
};

export const CURRENT_VISITS = {
  series: Array.from({ length: 6 }, () => ({
    label: faker.location.state(),
    value: faker.number.int(4000) + 500,
  })),
};

export const CONVERSION_RATES = {
  series: Array.from({ length: 10 }, () => ({
    label: faker.location.state(),
    value: faker.number.int(1000) + 400,
  })),
};

export const CURRENT_SUBJECTS = {
  categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
  series: Array.from({ length: 3 }, (_, index) => ({
    name: `Series ${index + 1}`,
    data: generateData(6, 10, 100),
  })),
};
