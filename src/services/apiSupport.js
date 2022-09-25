import axios from 'axios';

const API_KEY = '34b039d9928c0cbb29ba3089b029dd2e';
const BASE_URL = 'https://api.themoviedb.org/3/';

// fetching function for the most popular movies of the day

const fetchTrendyMovies = async setMovies => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );

    return setMovies(response.data.results);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

// fetching function the movie by id

const fetchMovieById = async (movieId, setMovie) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    return setMovie(response.data);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

// fetching characters in the movie by the id of the movie

const fetchMovieCast = async (movieId, setCast) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );

    return setCast(response.data.cast);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

// fetching reviews about the movie by the id of the movie

const fetchMovieReviews = async (movieId, setReviews) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );

    return setReviews(response.data.results);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

// fetching the movies by query

const fetchMovieByQuery = async (query, setSearchedMovies) => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
    );
    const data = response.data.results;
    return setSearchedMovies(data);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export {
  fetchMovieById,
  fetchTrendyMovies,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMovieByQuery,
};
