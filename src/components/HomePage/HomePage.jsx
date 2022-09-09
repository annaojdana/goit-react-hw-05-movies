import styles from './HomePage.module.css';
import React from 'react';
// import PropTypes from 'prop-types';

const HomePage = ({ movies }) => {
  const { section, heading } = styles;
  return (
    <section className={section}>
      <h1 className={heading}>Trending today</h1>
      <ul className={trendy__list}>
        {movies.map(movie => (
          <li className={trendy__item}>{movie.name}</li>
        ))}
      </ul>
    </section>
  );
};

// HomePage.propTypes = {

// };

export default HomePage;
