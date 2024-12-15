import styles from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={styles.profileContainer}>
      <div>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.profileList}>
        <li className={styles.listItem}>
          <span className={styles.spanTitle}>Followers</span>
          <span className={styles.spanNumber}> {followers} </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.spanTitle}>Views</span>
          <span className={styles.spanNumber}> {views} </span>
        </li>
        <li className={styles.listItem}>
          <span className={styles.spanTitle}>Likes</span>
          <span className={styles.spanNumber}> {likes} </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
