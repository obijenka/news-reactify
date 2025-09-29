import styles from "./styles.module.css"
import formatTimeAgo from "../../helpers/formatTimeAgo"
import Image from "../image/Image"

export default function NewsBanner({item}) {
    return (
        <div className={styles.banner}>
            <Image image={item?.image_url} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.pubDate)} by {item.source_name}</p>
        </div>
    )
}