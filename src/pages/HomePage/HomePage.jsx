import styles from './HomePage.module.css';
import React from 'react';
import MovieList from 'components/MovieList';
import PropTypes from 'prop-types';

const HomePage = ({ movies }) => {
  const { container, heading } = styles;

  return (
    <main className={container}>
      <h1 className={heading}>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

HomePage.propTypes = {
movies: PropTypes.array,
};

export default HomePage;
