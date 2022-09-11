import styles from './App.module.css';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Cast from '../pages/Cast/Cast';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import Reviews from '../pages/Reviews/Reviews';
import { fetchTrendyMovies } from 'services/fetchTrendyMovie';

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
      <header>
        <nav className={nav}>
          <StyledLink className={link} to="/">
            Home
          </StyledLink>
          <StyledLink className={link} to="/movies">
            Movies
          </StyledLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path="/:movieId" element={<MovieDetailsPage />}>
            <Route path="/cast" element={<Cast />} />
            <Route path="/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
