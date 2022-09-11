import styles from './HomePage.module.css';
import React, { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import { fetchTrendyMovies } from 'services/fetchTrendyMovie';

const HomePage = () => {
  const { container, heading } = styles;

  const [movies, setMovies] = useState([]);

  const getTrendyMovies = () => {
    return fetchTrendyMovies()
      .then(response => {
        const trendyMovies = response.results;
        return setMovies(trendyMovies);
      })

      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getTrendyMovies();
  }, []);

  return (
    <main className={container}>
      <h1 className={heading}>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default HomePage;
