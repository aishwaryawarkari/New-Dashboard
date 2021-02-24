import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Progress from "../Progress/Progress";
import Grid from "@material-ui/core/Grid";
import { GroupAvatars } from "../Avatar/Avatar";
import styles from "./Card.module.css";

const useStyles = makeStyles({
  root: {
    minWidth: 245,
    borderRadius: "15px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function OutlinedCard({ data }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid item xs={4}>
      <Card
        className={[classes.root, styles.OutlineCard].join(" ")}
        variant="outlined"
      >
        <CardContent>
          <img className={styles.file} src={data.url} />
          <h4 className={styles.h4}>{data.value}</h4>
          <Progress value={data.progress} time={data.time} />
        </CardContent>
      </Card>
    </Grid>
  );
}
// export function OutlinedCard(props) {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//       <Card
//         className={[classes.root, styles.OutlineCard].join(" ")}
//         variant="outlined"
//       >
//         <CardContent>
//           <img className={styles.file} src={props.url} />
//           <h4 className={styles.h4}>{props.value}</h4>
//           <Progress value={props.progress} time={props.time} />
//         </CardContent>
//       </Card>
//   );
// }

export function OtherFoldersCard({ data }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      className={[classes.root, styles.OtherFoldersCard].join(" ")}
      variant="outlined"
      style={{ backgroundColor: data.color }}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={3}>
            {/* <img src={data.url} className={styles.cardImage} /> */}
            <i
              className="fa fa-folder-open"
              style={{ fontSize: "37px", color: data.textColor }}
            ></i>
          </Grid>

          <Grid item xs={7}>
            <h3 style={{ color: data.textColor }}>{data.title}</h3>
            <p className={styles.p} style={{ color: data.textColor }}>
              {data.file} files
            </p>
          </Grid>
          <Grid item xs={1}>
            <i className={["fa", "fa-ellipsis-v", styles.list].join(" ")}></i>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
// export function OtherFoldersCard(props) {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card
//       className={[classes.root, styles.OtherFoldersCard].join(" ")}
//       variant="outlined"
//       style={{ backgroundColor: props.color }}
//     >
//       <CardContent>
//         <Grid container>
//           <Grid item xs={1}></Grid>
//           <Grid item xs={3}>
//             {/* <img src={props.url} className={styles.cardImage} /> */}
//             <i
//               className="fa fa-folder-open"
//               style={{ fontSize: "37px", color: props.textColor }}
//             ></i>
//           </Grid>

//           <Grid item xs={7}>
//             <h3 style={{ color: props.textColor }}>{props.title}</h3>
//             <p className={styles.p} style={{ color: props.textColor }}>
//               {props.file} files
//             </p>
//           </Grid>
//           <Grid item xs={1}>
//             <i className={["fa", "fa-ellipsis-v", styles.list].join(" ")}></i>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }
export function FavFolderCard({ data }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid item xs={6}>
      <Card
        className={[classes.root, styles.FavFolderCard].join(" ")}
        variant="outlined"
        // style={{
        //   backgroundColor: "props.color",
        // }}
      >
        <CardContent>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <h3 className={styles.h3}>{data.title}</h3>
              <p className={styles.p}>4,524 Files</p>
            </Grid>

            <Grid item xs={5}>
              <GroupAvatars />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
// export function FavFolderCard(props) {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card
//       className={[classes.root, styles.FavFolderCard].join(" ")}
//       variant="outlined"
//       style={{
//         backgroundColor: "props.color",
//       }}
//     >
//       <CardContent>
//         <Grid container>
//           <Grid item xs={1}></Grid>
//           <Grid item xs={5}>
//             <h3 className={styles.h3}>{props.title}</h3>
//             <p className={styles.p}>4,524 Files</p>
//           </Grid>

//           <Grid item xs={5}>
//             <GroupAvatars />
//           </Grid>
//           <Grid item xs={1}></Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }
