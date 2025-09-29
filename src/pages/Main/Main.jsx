import styles from "./styles.module.css"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import { useState, useEffect } from "react"
import getNews from "../../api/apiNews"
import NewsList from "../../components/NewsList/NewsList"

export default function Main() {
    const [news, setNews] = useState([])

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await getNews()
                setNews(response.results)
            } catch(e) {
                console.log(e)
            }
        }
        fetchNews()
    }, [])

    return (
        <main className={styles.main}>
            {news.length > 0 ? <NewsBanner item={news[0]}/> : null}
            <NewsList news={news} />
        </main>
    )
}