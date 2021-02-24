import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import styles from "./Progress.module.css";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#5fac44",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgressBars(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={6}>
          <h1 className={styles.h1}>{props.value}% </h1>
        </Grid>
        <Grid xs={6}>
          <span className={styles.time}>{props.time}</span>
        </Grid>
      </Grid>

      <BorderLinearProgress variant="determinate" value={props.value} />
    </div>
  );
}
