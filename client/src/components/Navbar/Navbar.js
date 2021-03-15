import React from 'react';
import { Link } from 'react-router-dom';

import { useToken } from './../../context/TokenContext';

import navbarIcon from './../../assets/rick_morty_nav.png';
import writing from './../../assets/rick_morty_writing.png';

function Navbar() {
  const [token, setToken] = useToken();

  const logOut = () => {
    localStorage.clear();
    setToken(null);
  };

  return (
    <div className="Navbar">
      <div className="Navbar-icon-container">
        <Link to="/">
          <img
            className="Navbar-icon-container-img"
            alt="navbar-icon"
            src={navbarIcon}
          />
        </Link>
      </div>
      <div className="Navbar-writing-container">
        <img
          className="Navbar-writing-container-img"
          alt="navbar-writing"
          src={writing}
        />
      </div>
      <div className="Navbar-links">
        {token ? (
          <Link className="Navbar-links-el" to="/" onClick={logOut}>
            Logout
          </Link>
        ) : (
          <>
            <Link className="Navbar-links-el" to="/login">
              Login
            </Link>
            <Link className="Navbar-links-el" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
