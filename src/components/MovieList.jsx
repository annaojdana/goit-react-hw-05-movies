import styles from './MovieList.module.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const { movie__item, movie__list } = styles;
  const location = useLocation();

  return (
    <ul className={movie__list}>
      {movies.map(({ title, id }) => (
        <li className={movie__item} key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
