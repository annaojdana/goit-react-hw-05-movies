import styles from './HomePage.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const HomePage = ({ movies }) => {
  const { section, heading, trendy__item, trendy__list } = styles;

  return (
    <section className={section}>
      <h1 className={heading}>Trending today</h1>
      <ul className={trendy__list}>
        {movies.map(({ title, id }) => (
          <li className={trendy__item} key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

// HomePage.propTypes = {

// };

export default HomePage;
