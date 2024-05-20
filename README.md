# React Dashboard

This project is a simple, responsive dashboard built with React, MUI and ApexCharts.js. It displays data in various charts and is designed to be user-friendly.

## Project Overview

The task was to create a dashboard using React and Chart.js (or any other library). The dashboard displays data in at least three different types of charts. It is responsive and works well on both desktop and mobile devices. The design is clean and user-friendly.

## Installation

1. Ensure you have Node.js v18.x or above installed on your machine.
2. Clone the repo: `git clone [repo_url]`
3. Install dependencies: `npm install`
4. Start the project: `npm run dev`

## Live Demo

You can view a live demo of the project at [live_demo_url].

## Project Structure

- `.eslintrc`: This file contains configurations for ESLint.
- `.prettierrc`: This file contains configurations for Prettier.
- `vite.config.js`: This file contains configurations for Vite.
- `src`: This directory contains all the source code for the project.
  - `/_mock`: This directory contains mock data for the project.
  - `/components`: This directory contains all the React components used in the project.
  - `/hooks`: This directory contains custom React hooks.
  - `/layouts`: This directory contains layout components.
  - `/pages`: This directory contains page components.
  - `/routes`: This directory contains route configurations.
  - `/sections`: This directory contains different sections of the application.
    - `/blog`: This directory contains components related to the blog section.
    - `/error`: This directory contains components related to the error section.
    - `/overview`: This directory contains components related to the overview section.
    - `/user`: This directory contains components related to the user section.
  - `/theme`: This directory contains MUI theme configurations.
  - `/utils`: This directory contains utility functions.

## Scripts

- `dev`: Starts the development server.
- `start`: Starts the production server.
- `build`: Builds the project for production.
- `lint`: Lints the project using ESLint.
- `lint:fix`: Fixes linting issues using ESLint.
- `prettier`: Formats the code using Prettier.

## Key Dependencies

- `react`: A JavaScript library for building user interfaces.
- `@mui/material`: A set of React components that implement Google's Material Design.
- `react-router-dom`: DOM bindings for React Router.
- `apexcharts`: A charting library.
- `react-apexcharts`: A wrapper for ApexCharts for React.
- `@emotion/react` and `@emotion/styled`: Libraries for writing css styles with JavaScript.
- `date-fns`: A modern JavaScript date utility library.
- `@faker-js/faker`: A library used for generating mock data.
- `vite`: A build tool that aims to provide a faster and leaner development experience for modern web projects.

## Technical Approach

### Technology Stack

- **Frontend**: [React](https://reactjs.org/)
- **Charting Library**: [ApexCharts.js](https://apexcharts.com/) (alternative to [Chart.js](https://www.chartjs.org/))
- **Styling**: [MUI (Material-UI)](https://mui.com/), [Emotion](https://emotion.sh/docs/introduction) for styling
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Deployment Platform**: [Vercel](https://vercel.com/)

### Implementation Details

- **React Best Practices**: Followed React best practices to make components reusable and scalable.
- **Component Structure**: The project is organized into various directories like components, hooks, layouts, pages, etc.
- **Chart Integration**: Integrated ApexCharts with React components using the `react-apexcharts` wrapper.
- **Responsiveness**: Ensured through the use of MUI's responsive design utilities and features.
- **Custom Theme**: Implemented a custom theme using MUI's theming solution.
- **Mock Data**: Generated mock data using [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker).
- **Chart Types**: Implemented various chart types including Column Chart, Area Chart, Line Chart, Bar Chart, Pie Chart, and Radar Chart using ApexCharts.js. Each chart type has its own component in the `/components/chart` directory. A custom hook is provided to generate chart options, and a styled component is used for customizing the ApexChart component. Each chart is implemented by generating different chart options.

## Challenges and Solutions

- **Challenge 1**: Integrating ApexCharts with React
  - **Solution**: Used the `react-apexcharts` wrapper to seamlessly integrate charts.
- **Challenge 2**: Ensuring responsiveness
  - **Solution**: Leveraged MUI's Grid system and responsive utilities to create a flexible layout.
- **Challenge 3**: Creating a scalable and reusable component structure
  - **Solution**: Followed React best practices and organized components into distinct directories based on their functionality.
- **Challenge 4**: Implementing a custom theme with MUI
  - **Solution**: Utilized MUI's theming solution to create a custom theme that aligns with the project's design requirements.
- **Challenge 5**: Generating realistic mock data for charts
  - **Solution**: Used the `@faker-js/faker` library to generate realistic mock data for various chart types.

## Contact

If you have any questions or need further clarification about the project requirements, please do not hesitate to reach out.

**Author**: Austen Anop
**Email**: austenanop26@gmail.com
**Date**: 05/21/2024
