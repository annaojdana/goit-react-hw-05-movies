import styles from './Cast.module.css';
import placeholderImg from '../../components/img/placeholderr.png';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/apiSupport';
import { nanoid } from 'nanoid';


const Cast = () => {
  const { list, item, title, text__wrapper } = styles;

  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId, setCast).catch(console.error);
  }, [movieId]);

  return (
    <section>
      {cast.length > 0 ? (
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
                  <img src={placeholderImg} alt={`Placeholder`} />
                )}
                <div className={text__wrapper}>
                  <h4 className={title}>{name}</h4>
                  {character ?? <p> {`as ${character}`}</p>}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="error">Sorry, the cast is not available!</p>
      )}
    </section>
  );
};



export default Cast;
