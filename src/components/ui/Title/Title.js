import React from "react";
import Grid from "@material-ui/core/Grid";

import styles from "./Title.module.css";

const Title = () => {
  return (
    <Grid container>
      <Grid item xs={11}>
        <div>
          <h1 className={styles.h1}>My Folders</h1>
          <p className={styles.subtitle1}>Photos, Videos, Documents</p>
        </div>
      </Grid>
      <Grid item xs={1}>
        <button className={styles.btn1}>+</button>
      </Grid>
    </Grid>
  );
};

export default Title;
