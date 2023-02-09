import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import NavList from './NavList';
import { navData } from './Navbar-data';
import './Navbar.css';
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <TwitterIcon style={{ fontSize: '3.3rem', color: '#1d9bf0' }} />
      </div>

      <div className="nav__navMenu">
        {navData.map((nav) => (
          <NavList key={nav.id} Icon={nav.Icon} title={nav.title} />
        ))}
      </div>

      <div className="nav__navBtn">
        <button>Tweet</button>
      </div>

      <div className="nav__profile">
        <Avatar
          alt="Profile Picture"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fimginn.com%2Ftimmyproofficial%2F&psig=AOvVaw0qqwTy0nC-ScwWaKt0A7eI&ust=1676040797886000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLilo9bYiP0CFQAAAAAdAAAAABAI"
        />
        <div className="nav__profile-name">
          <h3>Ayanlola Bayo Ti...</h3>
          <p>@timmypro_</p>
        </div>
        <MoreHorizIcon className="navList__icon" />
      </div>
    </nav>
  );
};

export default Navbar;
