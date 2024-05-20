import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { NEWS } from 'src/_mock/news';
import { TASKS } from 'src/_mock/task';
import { TRAFFIC } from 'src/_mock/traffic';
import { WEEKLY_SUMMARY } from 'src/_mock/summary';
import { ORDER_TIMELINE } from 'src/_mock/orderTimeline';
import {
  CURRENT_VISITS,
  WEBSITE_VISITS,
  CONVERSION_RATES,
  CURRENT_SUBJECTS,
} from 'src/_mock/report';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        {WEEKLY_SUMMARY.map((item) => (
          <Grid key={item.title} xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title={item.title}
              total={item.total}
              color={item.color}
              icon={<img alt="icon" src={item.icon} />}
            />
          </Grid>
        ))}

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Website Visits"
            subheader="(+12%) than last year"
            chart={{
              labels: WEBSITE_VISITS.labels,
              series: WEBSITE_VISITS.series,
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            subheader="(+23%) than last year"
            chart={{
              series: CURRENT_VISITS.series,
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+17%) than last year"
            chart={{
              series: CONVERSION_RATES.series,
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: CURRENT_SUBJECTS.categories,
              series: CURRENT_SUBJECTS.series,
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate title="News Update" list={NEWS} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline title="Order Timeline" list={ORDER_TIMELINE} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite title="Traffic by Site" list={TRAFFIC} />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks title="Tasks" list={TASKS} />
        </Grid>
      </Grid>
    </Container>
  );
}
