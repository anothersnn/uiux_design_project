import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Films from '@/components/Films';
import Pagination from '@/components/Pagination'; // Импортируем компонент Pagination

function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${currentPage}&query_term=${searchQuery}`);
        const data = response.data.data;
        setFilms(data.movies);
        setTotalPages(data.movie_count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setFilms([]);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className="mt-4 lg:mt-8">
        <div className="flex justify-center items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search movies..."
            className="xs:p-1 sm:p-2 border-2 rounded"
          />
        </div>
      </form>

      {/* Фильмы */}
      <Films films={films} />

      {/* Пагинация */}
      <Pagination maxPages={totalPages} currentPage={currentPage} setPage={setCurrentPage} />
    </div>
  );
}

export default FilmsPage;
