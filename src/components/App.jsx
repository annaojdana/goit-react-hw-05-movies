import styles from './App.module.css';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
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
      </Routes>
    </div>
  );
};

export default App;
