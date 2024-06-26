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

You can view a live demo of the project at https://austen-test.vercel.app/.

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
- **Chart Types**: Implemented various chart types. A custom hook is provided in the [`/src/components/chart/user-chart.js`](./src/components/chart/use-chart.js) to generate chart options, and a styled component is used in the [`/src/components/chart/chart.js`](./src/components/chart/chart.js) for customizing the ApexChart component. Each chart is implemented by generating different chart options.

## Chart Types

I have implemented various chart types using ApexCharts.js.

### Using the `useChart` Hook

```jsx
import Chart, { useChart } from 'src/components/chart';

// ...
const Component = () => {
  // ...
  const chartOptions = useChart({
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: series.map((i) => i.fill),
    },
    xaxis: {
      type: 'datetime',
    },
    ...options,
  });
  // ...
};
```

### Column Chart, Area Chart, Line Chart

These charts are implemented in the `app-website-visits.jsx` file. You can view the file [here](./src/sections/overview/app-website-visits.jsx).

```jsx
const chartOptions = useChart({
  //..
  series: [
    {
      type: 'column',
      // ...
    },
    {
      type: 'area',
      // ...
    },
    {
      type: 'line',
      // ...
    },
  ],
})
<Chart
  type="line"
  series={series}
  options={chartOptions}
/>
```

![Line Chart](public/screenshots/line-chart.PNG)

### Pie Chart

The Pie Chart is implemented in the `app-current-visits.jsx` file. You can view the file [here](./src/sections/overview/app-current-visits.jsx).

```jsx
<Chart type="pie" series={chartSeries} options={chartOptions} />
```

![Pie Chart](public/screenshots/pie-chart.PNG)

### Column Chart

The Column Chart is implemented in the `app-conversion-rates.jsx` file. You can view the file [here](./src/sections/overview/app-conversion-rates.jsx).

```jsx
<Chart type="bar" series={[{ data: chartSeries }]} options={chartOptions} />
```

![Column Chart](public/screenshots/column-chart.PNG)

### Radar Chart

The Radar Chart is implemented in the `app-current-subject.jsx` file. You can view the file [here](./src/sections/overview/app-current-subject.jsx).

```jsx
<Chart type="radar" series={series} options={chartOptions} />
```

![Radar Chart](public/screenshots/radar-chart.PNG)

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
**Date**: 05/20/2024
