// Pagination.jsx
import styles from "./styles.module.css"

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    // Функция для генерации диапазона страниц
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        // Корректируем startPage если endPage достиг максимума
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        
        return pages;
    }

    return (
        <div className={styles.pagination}>
            {/* Кнопка назад */}
            <button 
                className={`${styles.pageButton} ${currentPage === 1 ? styles.disabled : ''}`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                {'<'}
            </button>
            
            {/* Первая страница */}
            {currentPage > 3 && (
                <>
                    <button 
                        className={styles.pageButton}
                        onClick={() => onPageChange(1)}
                    >
                        1
                    </button>
                    {currentPage > 4 && <span className={styles.ellipsis}>...</span>}
                </>
            )}
            
            {/* Основные страницы */}
            {getPageNumbers().map(page => (
                <button
                    key={page}
                    className={`${styles.pageButton} ${currentPage === page ? styles.active : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            
            {/* Последняя страница */}
            {currentPage < totalPages - 2 && (
                <>
                    {currentPage < totalPages - 3 && <span className={styles.ellipsis}>...</span>}
                    <button 
                        className={styles.pageButton}
                        onClick={() => onPageChange(totalPages)}
                    >
                        {totalPages}
                    </button>
                </>
            )}
            
            {/* Кнопка вперед */}
            <button 
                className={`${styles.pageButton} ${currentPage === totalPages ? styles.disabled : ''}`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                {'>'}
            </button>
        </div>
    )
}