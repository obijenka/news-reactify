// api/apiNews.js
import axios from "axios"

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export default async function getNews(size = 10, nextPage = null) {
    try {
        const params = {
            apikey: API_KEY,
            language: "en",
            size: size,
        }

        // Добавляем nextPage токен если он есть
        if (nextPage) {
            params.page = nextPage;
        }

        const response = await axios.get(`${BASE_URL}news`, { params })
        return response.data
    } catch(e) {
        console.log(e)
        throw e
    }
}