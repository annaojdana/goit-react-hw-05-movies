import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Cast from '../pages/Cast/Cast';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import Reviews from '../pages/Reviews/Reviews';
import { fetchTrendyMovies } from 'services/fetchTrendyMovie';
import SharedLayout from './SharedLayout';

const App = () => {
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
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage movies={movies} />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
