import React from "react";
import Grid from "@material-ui/core/Grid";

import DatePicker from "./DatePicker/DatePicker";
import Search from "./Search/Search";
import Notification from "./Notification/Notification";

export default function NotificationTab() {
  return (
    <Grid container>
      <Grid item xs={5}></Grid>
      <Grid item xs={5}>
        <DatePicker />
      </Grid>
      <Search />
      <Notification />
      {/* <Grid Search>
        <img src="search.png" className={styles.search} />
      </Grid>
      <Grid item xs={1}>
        <img src="notification.png" className={styles.notification} />
      </Grid> */}
    </Grid>
  );
}
