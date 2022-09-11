import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieById } from 'services/fetchTrendyMovie';
// import PropTypes from 'prop-types';

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const { title, overview, vote_average, genres, poster_path} =
    movie;

  useEffect(() => {
    const getMovieById = () => {
      return fetchMovieById(movieId)
        .then(response => {
          console.log(response);
          const choosenMovie = response;
          console.log(choosenMovie);
          return setMovie(choosenMovie);
        })

        .catch(error => {
          console.error(error);
        });
    };
    getMovieById();
  }, [movieId]);

  return (
    <main>
      <button onClick={() => navigate("/")}>go to back</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`Poster of ${title}`}
      />
      <div>
        <h1>{title}</h1>
        <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
        <h2>Overwiew</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres?.map(({ name }) => name + ', ')}</p>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};

// MovieDetailsPage.propTypes = {

// };

export default MovieDetailsPage;
