import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

import styles from "./ListItem.module.css";
import { Avatars } from "../../ui/Avatar/Avatar";

export default function ListItemComponent({ data }) {
  if (data.type === "avatar") {
    return (
      <ListItem>
        <ListItemIcon className={styles.avatar}>
          <Avatars />
        </ListItemIcon>
      </ListItem>
    );
  }
  return (
    <ListItem component={NavLink} to={data.to}>
      <ListItemIcon>
        <i className={[styles.icons, ...data.icon].join(" ")}></i>
      </ListItemIcon>
      <ListItemText primary={data.primary} />
    </ListItem>
  );
}
