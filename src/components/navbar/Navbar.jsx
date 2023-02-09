import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import NavList from './NavList';
import { navData } from './Navbar-data';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <TwitterIcon style={{ fontSize: '3.3rem', color: '#1d9bf0' }} />
      </div>

      <div className="nav__navMenu">
        {navData.map((nav) => (
          <NavList Icon={nav.Icon} title={nav.title} />
        ))}
      </div>

      <div className="nav__navBtn">
        <button>Tweet</button>
      </div>
    </nav>
  );
};

export default Navbar;
