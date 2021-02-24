import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import styles from "./Avatar.module.css";

export function GroupAvatars() {
  return (
    <div>
      <AvatarGroup max={4} className={styles.avatar}>
        <Avatar alt="Remy Sharp" src="user1.jpg" />
        <Avatar alt="Travis Howard" src="user2.jpg" />
        <Avatar alt="Cindy Baker" src="user3.jpg" />
        <Avatar alt="Agnes Walker" src="user4.jpg" />
        <Avatar alt="Trevor Henderson" src="user1.jpg" />
      </AvatarGroup>
    </div>
  );
}
export function Avatars() {
  return (
    <div>
      <Avatar
        alt="Agnes Walker"
        src="user4.jpg"
        className={styles.avtarstyle}
      />
    </div>
  );
}
