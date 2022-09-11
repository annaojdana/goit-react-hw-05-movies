import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/fetchTrendyMovie';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCast = () => {
      return fetchMovieCast(movieId)
        .then(response => {
          console.log(response);
          return setCast(response.cast);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getMovieCast();
  }, [movieId]);

  return (
    <div>
      <section>
        {cast.length < 1 ? (
          <p>Sorry, the cast is not available!</p>
        ) : (
          <ul>
            {cast.map(({ character, name, profile_path }) => {
              return (
                <li key={nanoid()}>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                      alt={`${name}`}
                    />
                  ) : (
                    <img
                      src={'https://placehold.jp/200x300.png'}
                      alt={`just placeholder`}
                    />
                  )}
                  <h4>Name: {name}</h4>
                  <p>Character: {character}</p>
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
