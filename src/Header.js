import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="landing-header">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo" />
      </div>
      <div className="title">
        <h1>Apple Inc.</h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Log In</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
