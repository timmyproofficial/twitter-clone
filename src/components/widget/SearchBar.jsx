import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <section className="search">
      <div className="search__box">
        <SearchIcon style={{ fontSize: '2.2rem', color: '#808080' }} />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Twitter"
          className="search__boxInput"
        />
      </div>
    </section>
  );
};

export default SearchBar;
