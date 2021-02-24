import React from "react";
import Grid from "@material-ui/core/Grid";

import styles from "./Notification.module.css";

export default function Notification() {
  return (
    <Grid item xs={1}>
      <img src="notification.png" className={styles.notification} />
    </Grid>
  );
}
