import styles from "./styles.module.css";
import formatTimeAgo from "../../helpers/formatTimeAgo";

export default function NewsItem({ item }) {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image_url})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.pubDate)} by {item.source_name}
        </p>
      </div>
    </li>
  );
}
