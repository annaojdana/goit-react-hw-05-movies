import styles from './SharedLayout.module.css';
import styled from 'styled-components';
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  margin-left: 30px;

  &.active {
    color: #ae0808;
  }
`;
const SharedLayout = () => {
  const { header, nav } = styles;
  return (
    <div>
      <header className={header}>
        <nav className={nav}>
          <StyledLink to="/">
            Home
          </StyledLink>
          <StyledLink to="/movies">
            Movies
          </StyledLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
