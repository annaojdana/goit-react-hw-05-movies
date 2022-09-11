import styles from './MovieList.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const { movie__item, movie__list } = styles;


  return (
    <ul className={movie__list}>
      {movies.map(({ title, id }) => (
        <li className={movie__item} key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
