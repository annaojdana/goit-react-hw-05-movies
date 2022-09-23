import styles from './HomePage.module.css';
import React, { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import { fetchTrendyMovies } from 'services/apiSupport';

const HomePage = () => {
  const { container, heading } = styles;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendyMovies(setMovies).catch(console.error);
  }, []);

  return (
    <main className={container}>
      <h1 className={heading}>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default HomePage;
