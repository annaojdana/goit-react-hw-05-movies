import styles from './MovieList.module.css';
import placeholderImg from '../components/img/placeholderr.png';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const { movie__item, movie__list, movie__title, movie__link } = styles;
  const location = useLocation();

  return (
    <ul className={movie__list}>
      {movies.map(({ title, id, poster_path }) => (
        <li className={movie__item} key={id}>
          <Link
            className={movie__link}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`Poster of ${title}`}
              />
            ) : (
              <img src={placeholderImg} alt={`Placeholder`} />
            )}
            <p className={movie__title}>{title}</p>
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
