import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/fetchTrendyMovie';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

const Reviews = () => {

  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = () => {
      return fetchMovieReviews(movieId)
        .then(response => {
          console.log(response.results);
          return setReviews(response.results);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getMovieReviews();
  }, [movieId]);
  return (
    <div>
      <section>
        {reviews.length < 1 ? (
          <p>Sorry, the reviews is not available!</p>
        ) : (
          <ul>
            {reviews.map(({ author, content }) => {
              return (
                <li key={nanoid()}>
                  <h4>Author: {author}</h4>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
};

// Reviews.propTypes = {

// };

export default Reviews;
