import React from 'react';
import { useSelector } from 'react-redux';

import LoginBtn from './LoginBtn/LoginBtn';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import RegisterBtn from './RegisterBtn/RegisterBtn';

import './Navbar.scss';

function Navbar() {
  const token = useSelector((state) => state.token);

  return (
    <div className="Navbar">
      <div className="Navbar-btns">
        {token ? (
          <LogoutBtn />
        ) : (
          <>
            <LoginBtn />
            <RegisterBtn />
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
