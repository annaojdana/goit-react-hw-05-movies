import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Cast from '../pages/Cast/Cast';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import Reviews from '../pages/Reviews/Reviews';
import SharedLayout from './SharedLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route path=":movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
