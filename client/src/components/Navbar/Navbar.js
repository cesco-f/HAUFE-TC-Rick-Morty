import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setInvalidToken } from '../../store/actions/tokenActions';

import Button from './../UI/Button/Button';

import './Navbar.scss';

function Navbar() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const history = useHistory();

  const goToRegister = () => {
    history.push('/register');
  };

  const goToLogIn = () => {
    history.push('/login');
  };

  const logOut = () => {
    localStorage.clear();
    dispatch(setInvalidToken());
    history.push('/');
  };

  return (
    <div className="Navbar">
      <div className="Navbar-btns">
        {token ? (
          <Button text="Logout" onClickCb={logOut} />
        ) : (
          <>
            <Button text="Login" onClickCb={goToLogIn} />
            <Button text="Register" onClickCb={goToRegister} />
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
