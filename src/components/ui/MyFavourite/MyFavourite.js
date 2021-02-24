import React from "react";
import Grid from "@material-ui/core/Grid";

import { FavFolderCard } from "../Card/Card";
import styles from "./MyFavourite.module.css";

export default function MyFavourite({ data }) {
  return (
    <div className={styles.contain}>
      <h1 className={styles.h1}>My favorite</h1>
      <p className={styles.subtitle}>Photos, Videos, Documents</p>
      <Grid container spacing={3}>
        {data.map((item) => (
          <FavFolderCard data={item} />
        ))}
      </Grid>
    </div>
  );
}
