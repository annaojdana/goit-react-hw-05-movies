import styles from './SharedLayout.module.css';
import styled from 'styled-components';
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;
const SharedLayout = () => {
  const { nav, link } = styles;
  return (
    <div>
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
      <Outlet />
    </div>
  );
};

export default SharedLayout;
