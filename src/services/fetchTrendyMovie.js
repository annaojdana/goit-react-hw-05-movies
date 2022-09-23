import axios from 'axios';

const API_KEY = '34b039d9928c0cbb29ba3089b029dd2e';
const BASE_URL = 'https://api.themoviedb.org/3/';

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
const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );

    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};
const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );

    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};
const fetchMovieByQuery = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
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
