import styles from './App.module.css';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Cast from '../pages/Cast';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import MoviePage from '../pages/MoviePAge';
import Reviews from '../pages/Reviews';
import fetchTrendyMovies from 'services/fetchTrendyMovie';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

const App = () => {
  const { container, nav, link } = styles;
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
    <div className={container}>
      <nav className={nav}>
        <StyledLink className={link} to="/">
          Home
        </StyledLink>
        <StyledLink className={link} to="/movies">
          Movies
        </StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews/>} />
      </Routes>
    </div>
  );
};

export default App;
