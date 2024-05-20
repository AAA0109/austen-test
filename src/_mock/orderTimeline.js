import { faker } from '@faker-js/faker';

const ORDER_TITLES = [
  'Order #1234, placed in 2024, total $5000',
  '15 Invoices settled this month',
  'Order #5678 from August',
  'New order received #AB-1234',
  'Latest order confirmed #CD-5678',
];

const sortedDates = [...Array(5)].map(() => faker.date.past()).sort((a, b) => b - a);

export const ORDER_TIMELINE = sortedDates.map((date, index) => ({
  id: faker.string.uuid(),
  title: ORDER_TITLES[index],
  type: `order${index + 1}`,
  time: date,
}));
