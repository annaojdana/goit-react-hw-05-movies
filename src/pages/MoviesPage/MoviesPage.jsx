import styles from './MoviesPage.module.css';
import React, { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/fetchTrendyMovie';
import MovieList from 'components/MovieList';
import SearchBar from 'components/SearchBar';
// import PropTypes from 'prop-types';

const MoviesPage = () => {
  const { container } = styles;
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const queryValue = form.elements.query.value;
    if (queryValue === '') {
      return setErrorMessage('The search field cannot be empty');
    }
    setSearchParams({ query: queryValue });
    form.reset();
  };

  useEffect(() => {
    if (query) {
      return fetchMovieByQuery(query)
        .then(response => {
          if (response.results === 0) {
            return setErrorMessage(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
          setErrorMessage('');
          return setSearchedMovies(response.results);
        })
        .catch(error => {
          console.log(error);
          setErrorMessage('Unable to fetch images');
        });
    }
    return setSearchedMovies([]);
  }, [query]);

  return (
    <main className={container}>
      <SearchBar onSubmit={onSubmit} />
      {errorMessage && <div>{errorMessage}</div>}
      <MovieList movies={searchedMovies} />
      <Outlet />
    </main>
  );
};

export default MoviesPage;
