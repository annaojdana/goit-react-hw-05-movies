import styles from './SharedLayout.module.css';
import styled from 'styled-components';
import React, {Suspense} from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Loader from './Loader/Loader';

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  margin-right: 50px;

  &.active {
    color: #ae0808;
  }
`;
const SharedLayout = () => {
  const { header, nav } = styles;
  return (
    <>
      <header className={header}>
        <nav className={nav}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
          <Outlet />
      </Suspense>

    </>
  );
};

export default SharedLayout;
