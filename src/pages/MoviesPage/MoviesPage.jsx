import styles from './MoviesPage.module.css';
import React, { useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/fetchTrendyMovie';
import MovieList from 'components/MovieList';
import SearchBar from 'components/SearchBar';
// import PropTypes from 'prop-types';

const MoviesPage = () => {
  const { container } = styles;
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  const findMoviesByQuery = () => {
    if (movieName) {
      return fetchMovieByQuery(movieName)
        .then(response => {
          if (response.results === 0) {
            return setErrorMessage(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          }
          setErrorMessage('');
          const setQueryResponse = ({ results }) => {
            setMovies(results);
          };
          return setQueryResponse(response);
        })
        .catch(error => {
          console.log(error);
          setErrorMessage('Unable to fetch images');
        });
    }
    setErrorMessage('The search field cannot be empty');
  };

  return (
    <main className={container}>
      <SearchBar value={movieName} onChange={updateQueryString} />
      {errorMessage && <div>{errorMessage}</div>}
      <MovieList movies={movies} />
      <Outlet />
    </main>
  );
};


export default MoviesPage;
