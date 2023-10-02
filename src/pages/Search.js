import SearchBar from '../components/SearchBar';
import React from 'react';
import classes from './Search.module.css';
function Search() {
    return (
      <div className={classes['search-container']}>
        <SearchBar className={classes['search-bar']} /> {/* Apply the SearchBar styles */}
        <h1>Search</h1>
      </div>
    );
  }
export default Search;