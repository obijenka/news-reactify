import styles from "./styles.module.css"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import { useState, useEffect } from "react"
import getNews from "../../api/apiNews"
import NewsList from "../../components/NewsList/NewsList"
import Skeleton from "../../components/Skeleton/Skeleton"

export default function Main() {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchNews() {
            try {
                setIsLoading(true)
                const response = await getNews()
                setNews(response.results)
                setIsLoading(false)
            } catch(e) {
                console.log(e)
            }
        }
        fetchNews()
    }, [])

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton type={'banner'} count={1}/>}
            {!isLoading ? <NewsList news={news} /> : <Skeleton type={'item'} count={10}/>}
        </main>
    )
}