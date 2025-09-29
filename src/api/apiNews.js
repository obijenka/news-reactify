import axios from "axios"

const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY=import.meta.env.VITE_NEWS_API_KEY

export default async function getNews() {
    try {
        const response = await axios.get(`${BASE_URL}latest`, {
            params: {
                apikey: API_KEY,
                language: "en",
            }
        })
        // console.log(response.data)
        return response.data
    } catch(e) {
        console.log(e)
    }
}