import React from "react";
import List from "@material-ui/core/List";

import styles from "./ListItems.module.css";
import ListItem from "./ListItem/ListItem";

const listItemsData = [
  { type: "link", to: "/", primary: "Home", icon: ["fa", "fa-home"] },
  {
    type: "link",
    to: "/trending",
    primary: "Trending",
    icon: ["fa", "fa-bar-chart"],
  },
  {
    type: "link",
    to: "/desktop",
    primary: "Desktop",
    icon: ["fa", "fa-desktop"],
  },
  { type: "link", to: "/mail", primary: "Mail", icon: ["fa", "fa-envelope"] },
  {
    type: "link",
    to: "/settings",
    primary: "Settings",
    icon: ["fa", "fa-cog"],
  },
  { type: "avatar" },
];

export default function ListItems() {
  return (
    <List className={styles.list}>
      {listItemsData.map((item) => (
        <ListItem data={item} />
      ))}
    </List>
  );
}
