import styles from './MoviesPage.module.css';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchMovieByQuery } from 'services/fetchTrendyMovie';
import MovieList from 'components/MovieList';
import SearchBar from 'components/SearchBar';
// import PropTypes from 'prop-types';

const MoviesPage = () => {
  const { container } = styles;
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  // const onSubmit = e => {
  //   e.preventDefault();
  //   const { queryInput } = e.target.elements;
  //   const queryValue = queryInput.value;

  //   if (queryValue) {
  //     return fetchMovieByQuery(queryValue)
  //       .then(response => {
  //         if (response.results === 0) {
  //           return setErrorMessage(
  //             'Sorry, there are no images matching your search query. Please try again.'
  //           );
  //         }
  //         setErrorMessage('');
  //         const setQueryResponse = ({ results }) => {
  //           setQuery(queryValue);
  //           setMovies(results);
  //         };
  //         return setQueryResponse(response);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         setErrorMessage('Unable to fetch images');
  //       });
  //   }
  //   setErrorMessage('The search field cannot be empty');
  // };
  // console.log(query);

  return (
    <main className={container}>
      <SearchBar/>
      {errorMessage && <div>{errorMessage}</div>}
      <MovieList movies={movies} />
      <Outlet />
    </main>
  );
};

// MoviesPage.propTypes = {

// };

export default MoviesPage;
