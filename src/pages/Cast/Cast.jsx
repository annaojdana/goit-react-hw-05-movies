import styles from './Cast.module.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/apiSupport';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

const Cast = () => {
  const { list, item, title, text__wrapper } = styles;

  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId, setCast).catch(console.error);
  }, [movieId]);

  return (
    <div>
      <section>
        {cast.length < 1 ? (
          <p className='error'>Sorry, the cast is not available!</p>
        ) : (
          <ul className={list}>
            {cast.map(({ character, name, profile_path }) => {
              return (
                <li className={item} key={nanoid()}>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                      alt={`${name}`}
                    />
                  ) : (
                    <img
                      src={'https://placehold.jp/200x300.png'}
                      alt={`Placeholder`}
                    />
                  )}
                  <div className={text__wrapper}>
                    <h4 className={title}>{name}</h4>
                    <p>Character: {character}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
};

// Cast.propTypes = {

// };

export default Cast;
