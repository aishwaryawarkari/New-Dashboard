import React from "react";
import Grid from "@material-ui/core/Grid";

import styles from "./Search.module.css";

export default function Search() {
  return (
    <Grid item xs={1}>
      <img src="search.png" className={styles.search} />
    </Grid>
  );
}
