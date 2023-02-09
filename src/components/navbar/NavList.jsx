import React from 'react';
import './NavList.css';

const NavList = ({ Icon, title }) => {
  return (
    <div className="navList">
      {Icon && <Icon className="navList__icon" style={{ fontSize: '3rem' }} />}
      <p className="navList__title">{title}</p>
    </div>
  );
};

export default NavList;
