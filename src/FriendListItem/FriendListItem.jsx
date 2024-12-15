import clsx from "clsx";
import styles from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(styles.status, isOnline ? styles.green : styles.red)}>
        {isOnline ? "online" : "offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
