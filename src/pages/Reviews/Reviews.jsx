import styles from './Reviews.module.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/apiSupport';
import { nanoid } from 'nanoid';

const Reviews = () => {
  const { list, item, title, wrapper, text } = styles;
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId, setReviews).catch(console.error);
  }, [movieId]);

  return (
    <section className={wrapper}>
      {reviews.length < 1 ? (
        <p className="error">Sorry, the reviews is not available!</p>
      ) : (
        <ul className={list}>
          {reviews.map(({ author, content }) => {
            return (
              <li className={item} key={nanoid()}>
                <h4 className={title}>{author}</h4>
                <p className={text}>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Reviews;
