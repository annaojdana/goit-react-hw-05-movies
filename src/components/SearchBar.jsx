import styles from './SearchBar.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const SearchBar = ({ value, onChange }) => {
  const { form, input, button, label } = styles;

  return (
    <form className={form}>
      <input
        key={nanoid()}
        name="queryInput"
        className={input}
        type="text"
        autoComplete="off"
        placeholder="Search images and photos"
        onChange={onChange}
      />
      <button type="submit" className={button}>
        <span className={label}>Search</span>
      </button>
    </form>
  );
};

SearchBar.propTypes = { value: PropTypes.string, onChange: PropTypes.func };

export default SearchBar;
