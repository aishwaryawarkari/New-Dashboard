import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { OutlinedCard, OtherFoldersCard, FavFolderCard } from "../ui/Card/Card";
import BarChart from "../Chart/BarChart";
import PieChart from "../Chart/PieChart";
import styles from "./Home.module.css";
import DatePicker from "../ui/DatePicker";
import Title from "../ui/Title/Title";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Grid container spacing={6}>
        <Grid item xs={8}>
          {/* Title Section */}
          {/* <Grid container>
            <Grid item xs={11}>
              <div>
                <h1 className={styles.h1}>My Folders</h1>
                <p className={styles.subtitle1}>Photos, Videos, Documents</p>
              </div>
            </Grid>
            <Grid item xs={1}>
              <button className={styles.btn1}>+</button>
            </Grid>
          </Grid> */}
          <Title />

          {/* Card Section */}
          <Grid container spacing={3} className={styles.mainContain}>
            <Grid item xs={4}>
              <OutlinedCard
                value="Photos"
                progress="25"
                url="folder.png"
                time="5 days ago"
              />
            </Grid>
            <Grid item xs={4}>
              <OutlinedCard
                value="Songs"
                progress="75"
                url="folder2.png"
                time="1 week before"
              />
            </Grid>
            <Grid item xs={4}>
              <OutlinedCard
                value="Documents"
                progress="45"
                url="folder3.png"
                time="1 week before"
              />
            </Grid>
          </Grid>

          {/* Bar Chart */}
          <Grid container className={styles.contain1}>
            <Grid item xs={12}>
              <BarChart />
            </Grid>
          </Grid>

          {/* My favorite section */}
          <div className={styles.contain}>
            <h1 className={styles.h1}>My favorite</h1>
            <p className={styles.subtitle}>Photos, Videos, Documents</p>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FavFolderCard title="Photos" />
              </Grid>
              <Grid item xs={6}>
                <FavFolderCard title="Videos" />
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={4} className={styles.notify}>
          {/* Date Picker and notification */}
          <Grid container>
            <Grid item xs={5}></Grid>
            <Grid item xs={5}>
              <DatePicker />
            </Grid>
            <Grid item xs={1}>
              <img src="search.png" className={styles.search} />
            </Grid>
            <Grid item xs={1}>
              <img src="notification.png" className={styles.notification} />
            </Grid>
          </Grid>

          {/* Pie Chart */}
          <Grid container spacing={3} className={styles.contain2}>
            <Grid item xs={12}>
              <PieChart />
            </Grid>
            <Grid container className={styles.pieContent}>
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

          {/* Other Folders Section */}
          <Grid container spacing={3} className={styles.contain}>
            <Grid item xs={11}>
              <h1>Other Folders</h1>
              <p className={styles.subtitle}>Documents</p>
              <OtherFoldersCard
                color="#ffede9"
                title="Products"
                file="150"
                url="folder4.png"
                textColor="#e67b72"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={11}>
              <OtherFoldersCard
                color="#efebfa"
                title="Web Design"
                file="1200"
                url="folder5.png"
                textColor="#7957c7"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={11}>
              <OtherFoldersCard
                color="#d9f3f4"
                title="Photos"
                file="15440"
                url="folder6.png"
                textColor="#3f9798"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;
