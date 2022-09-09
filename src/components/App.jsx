import styles from './App.module.css';
import styled from 'styled-components';
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './HomePage/HomePage';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

const App = () => {
  const { container, nav, link } = styles;

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
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
