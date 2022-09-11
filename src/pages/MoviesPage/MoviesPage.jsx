import React from 'react';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';

const MoviesPage = props => {
  return (
    <div>
      MoviesPage
      <Outlet />
    </div>
  );
};

// MoviesPage.propTypes = {

// };

export default MoviesPage;
