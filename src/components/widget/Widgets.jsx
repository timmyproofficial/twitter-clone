import React from 'react';
import SearchBar from './SearchBar';
import Trends from './Trends';
import './Widgets.css';

const Widgets = () => {
  return (
    <section className="widgets">
      <SearchBar />
      <Trends />
    </section>
  );
};

export default Widgets;
