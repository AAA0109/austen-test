import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Exploring Modern Web Development Techniques',
  'Understanding the Basics of Machine Learning',
  'A Deep Dive into React Hooks',
  'Building a Full-Stack Application with Node.js and Express',
  'Demystifying CSS Grid Layout',
  'Introduction to Data Visualization with D3.js',
  'Effective Debugging Strategies in JavaScript',
  'Getting Started with TypeScript: A Comprehensive Guide',
  'Mastering Asynchronous JavaScript: Callbacks, Promises, and Async/Await',
  'A Closer Look at Functional Programming in JavaScript',
  'Building a Real-Time Chat Application with Socket.IO',
  'Understanding and Using React Context API',
  'Exploring the New Features in ES6',
  'A Comprehensive Guide to Handling Events in React',
  'Getting Started with GraphQL and Apollo Client',
  'Building a RESTful API with Node.js and MongoDB',
  'Understanding the JavaScript Call Stack',
  'Exploring the Different Types of Databases: SQL vs NoSQL',
  `A Beginner's Guide to Web Accessibility`,
  'Demystifying JWT: Understanding JSON Web Tokens',
  'A Deep Dive into CSS Flexbox',
  'Building a Progressive Web App (PWA) from Scratch',
  `Understanding the Basics of Docker: A Beginner's Guide`,
  'Mastering Git: A Comprehensive Guide',
  'Exploring the New Features in React 17',
];

export const POSTS = [...Array(23)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/images/covers/cover_${index % 5}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.number.int(99999),
  comment: faker.number.int(99999),
  share: faker.number.int(99999),
  favorite: faker.number.int(99999),
  author: {
    name: faker.person.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index % 5}.jpg`,
  },
}));
