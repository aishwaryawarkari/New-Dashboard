import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { OutlinedCard } from "../ui/Card/Card";
import BarChart from "../Chart/BarChart";
import styles from "./Home.module.css";
import Title from "../ui/Title/Title";
import MyFavourite from "../ui/MyFavourite/MyFavourite";
import NotificationTab from "../ui/NotificationTab/NotificationTab";
import OtherFolders from "../ui/OtherFolders/OtherFolders";
import PieChart from "../ui/PieChart/PieChart";

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

const outlinedCardData = [
  { value: "Photos", progress: "25", url: "folder.png", time: "5 days ago" },
  { value: "Songs", progress: "75", url: "folder2.png", time: "1 week before" },
  {
    value: "Documents",
    progress: "45",
    url: "folder3.png",
    time: "1 week before",
  },
];
const myFavouriteData = [{ title: "Photos" }, { title: "Videos" }];
const otherFoldersData = [
  {
    color: "#ffede9",
    title: "Products",
    file: "150",
    url: "folder4.png",
    textColor: "#e67b72",
  },
  {
    color: "#efebfa",
    title: "Web Design",
    file: "1200",
    url: "folder5.png",
    textColor: "#7957c7",
  },
  {
    color: "#d9f3f4",
    title: "Photos",
    file: "15440",
    url: "folder6.png",
    textColor: "#3f9798",
  },
];

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Grid container spacing={6}>
        <Grid item xs={8}>
          {/* Title Section */}
          <Title />

          {/* Card Section */}
          <Grid container spacing={3} className={styles.mainContain}>
            {outlinedCardData.map((item) => (
              <OutlinedCard data={item} />
            ))}
          </Grid>

          {/* Bar Chart */}
          <Grid container className={styles.contain1}>
            <Grid item xs={12}>
              <BarChart />
            </Grid>
          </Grid>

          {/* My favorite section */}
          <MyFavourite data={myFavouriteData} />
        </Grid>

        <Grid item xs={4} className={styles.notify}>
          {/* Date Picker and notification */}
          <NotificationTab />

          {/* Pie Chart */}
          <PieChart />

          {/* Other Folders Section */}
          <div className={styles.contain}>
            <OtherFolders data={otherFoldersData} />
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;
