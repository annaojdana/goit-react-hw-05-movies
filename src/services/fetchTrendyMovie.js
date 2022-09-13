import axios from 'axios';

const API_KEY = '34b039d9928c0cbb29ba3089b029dd2e';
const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchTrendyMovies = async (pageNumber = 1, period = 'day') => {
  const endPoints = {
    media_type: 'movie',
    time_window: period,
  };

  const params = new URLSearchParams({
    api_key: API_KEY,
    page: pageNumber,
  });

  try {
    const { media_type, time_window } = endPoints;
    const response = await axios.get(`
    ${BASE_URL}trending/${media_type}/${time_window}?${params}`);
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};
const fetchMovieById = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const fetchMovieByQuery = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export {
  fetchMovieById,
  fetchTrendyMovies,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMovieByQuery,
};
/* Wywoływanie funkcji:
fetchTrendyMovies(); - wywołanie domyślne tj. page = 1 i wyszukiwanie popularnych z tygodnia
fetchTrendyMovies(5); - wywołanie strony 5 i wyszukiwanie popularnych z tygodnia
fetchTrendyMovies(3, "day"); - wywołanie strony 3 i wyszukiwanie popularnych z dnia
fetchTrendyMovies(undefined, "day"); - wywołanie strony domyślnej tj. page = 1 i wyszukiwanie popularnych z dnia
*/
