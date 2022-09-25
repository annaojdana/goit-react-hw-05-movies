import styles from './SearchBar.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const SearchBar = ({ onSubmit }) => {
  const { form, input, button, label } = styles;

  return (
    <form className={form} onSubmit={e => onSubmit(e)}>
      <div>
        <input key={nanoid()} className={input} type="text" name="query" />
        <button type="submit" className={button}>
          <span className={label}>Search</span>
        </button>
      </div>
    </form>
  );
};

SearchBar.propTypes = { onSubmit: PropTypes.func };

export default SearchBar;
