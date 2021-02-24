import React from "react";
import Grid from "@material-ui/core/Grid";

import PieChart from "../../Chart/PieChart";
import styles from "./PieChart.module.css";

export default function PieChartComponent() {
  return (
    <Grid container spacing={3} className={styles.contain}>
      <Grid item xs={12}>
        <PieChart />
      </Grid>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <h3>Total Space</h3>
          <h1 className={styles.h1}> 256 GB</h1>
        </Grid>
        <Grid item xs={4}>
          <h3>Used Space</h3>
          <h1> 180 GB</h1>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Grid>
  );
}
