import NewsItem from "../NewsItem/NewsItem"
import styles from "./styles.module.css"

export default function NewsList({news}) {
    return (
        <ul className={styles.list}>
            {news.map(item => {
                // return <li key={item.article_id}>{item.title}</li>
                return <NewsItem key={item.article_id} item={item} />
            })}
        </ul>
    )
}