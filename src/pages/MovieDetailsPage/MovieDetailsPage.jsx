import React, { useState, useEffect, Suspense } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  Link,
  Outlet,
} from 'react-router-dom';
import { fetchMovieById } from 'services/apiSupport';
import Loader from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const backTo = location.state?.from ?? '/';

  const [movie, setMovie] = useState({});

  const { title, overview, vote_average, genres, poster_path } = movie;

  useEffect(() => {
    fetchMovieById(movieId, setMovie).catch(console.error);
  }, [movieId]);

  return (
    <main>
      <button onClick={() => navigate(backTo, { replace: true })}>
        Go back
      </button>
      <div>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={`Poster of ${title}`}
          />
        ) : (
          <img
            src={'https://placehold.co/500x750'}
            alt={`Placeholder`}
          />
        )}
      </div>
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
            <Link to={`cast`} state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`reviews`} state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default MovieDetailsPage;
