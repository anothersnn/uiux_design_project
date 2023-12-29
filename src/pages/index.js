import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Films from '@/components/Films';
import Pagination from '@/components/Pagination';
import Navbar from '@/components/Navbar'; // Импортируем компонент Navbar

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
      {/* Navbar с поиском */}
      <Navbar
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
      />

      {/* Фильмы */}
      <Films films={films} />

      {/* Пагинация */}
      <Pagination maxPages={totalPages} currentPage={currentPage} setPage={setCurrentPage} />
    </div>
  );
}

export default FilmsPage;
