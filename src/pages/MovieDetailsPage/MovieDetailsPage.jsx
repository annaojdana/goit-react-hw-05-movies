import styles from './MovieDetailsPage.module.css';
import placeholderImg from '../../components/img/placeholderr.png';
import React, { useState, useEffect, Suspense } from 'react';
import styled from 'styled-components';
import {
  useLocation,
  useNavigate,
  useParams,
  Outlet,
  NavLink,
} from 'react-router-dom';
import { fetchMovieById } from 'services/apiSupport';
import Loader from 'components/Loader/Loader';

const StyledLink = styled(NavLink)`
  position: relative;
  color: #373537;
  text-decoration: none;
  font-weight: 500;
  line-height: 25px;
  &::after {
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    content: '';
  }
  &:hover {
    &::after {
      background-color: #e4007e;
    }
  }
  &.active {
    color: #e4007e;
  }
`;

const MovieDetailsPage = () => {
  const {
    btn,
    wrapper,
    left__content,
    right__content,
    heading,
    vote,
    text,
    additional__heading,
    additional__wrapper,
    additional__list,
  } = styles;

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
    <section>
      <button
        className={btn}
        onClick={() => navigate(backTo, { replace: true })}
      >
        Go back
      </button>
      <div className={wrapper}>
        <div className={left__content}>
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`Poster of ${title}`}
            />
          ) : (
            <img src={placeholderImg} alt={`Placeholder`} />
          )}
        </div>
        <div className={right__content}>
          <h1 className={heading}>{title}</h1>
          <p className={vote}>User Score: {(vote_average * 10).toFixed(0)}%</p>
          <h2>Overwiew</h2>
          <p className={text}>{overview}</p>
          <h2>Genres</h2>
          <p className={text}>{genres?.map(({ name }) => name + ', ')}</p>
        </div>
      </div>
      <div className={additional__wrapper}>
        <h3 className={additional__heading}>Additional information</h3>
        <ul className={additional__list}>
          <li>
            <StyledLink to={`cast`} state={location.state}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to={`reviews`} state={location.state}>
              Reviews
            </StyledLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetailsPage;
