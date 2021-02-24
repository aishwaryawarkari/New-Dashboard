import React from "react";
import Grid from "@material-ui/core/Grid";

import { OtherFoldersCard } from "../Card/Card";
import styles from "./OtherFolders.module.css";

export default function OtherFolders({ data }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={11}>
        <h1>Other Folders</h1>
        <p className={styles.subtitle}>Documents</p>
        {data.map((item) => (
          <OtherFoldersCard data={item} />
        ))}
      </Grid>
    </Grid>
  );
}
