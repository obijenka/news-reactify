import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { useState, useEffect } from "react";
import getNews from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

export default function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [nextPageTokens, setNextPageTokens] = useState({});
  const pageSize = 10;

  async function fetchNews(pageNum) {
    try {
      setIsLoading(true);
      const token = pageNum === 1 ? null : nextPageTokens[pageNum];

      const response = await getNews(pageSize, token);
      if (response.status === "success") {
        setNews(response.results || []);

        // Сохраняем токен для следующей страницы
        if (response.nextPage) {
          setNextPageTokens((prev) => ({
            ...prev,
            [pageNum + 1]: response.nextPage,
          }));

          // Если у нас появилась новая страница, увеличиваем totalPages
          if (pageNum + 1 > totalPages) {
            setTotalPages(pageNum + 1);
          }
        } else {
          // Если следующей страницы нет, устанавливаем totalPages как текущую страницу
          setTotalPages(pageNum);
        }
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={"banner"} count={1} />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} />
      )}
    </main>
  );
}
