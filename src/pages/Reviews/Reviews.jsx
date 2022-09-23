import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/fetchTrendyMovie';
import { nanoid } from 'nanoid';


const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId, setReviews).catch(console.error);
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



export default Reviews;
