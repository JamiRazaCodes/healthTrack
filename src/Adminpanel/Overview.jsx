import React from 'react';
import { Grid, Typography } from '@mui/material';
import DashboardCard from './Dashboard';

function Overview() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Overview</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Total Orders" value="102" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Total Users" value="245" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Total Products" value="67" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Revenue" value="$1,540" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Overview;
