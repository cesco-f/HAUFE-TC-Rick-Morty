import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setValidToken } from '../../store/actions/tokenActions';
import { getCharacters } from '../../store/actions/charactersActions';
import { login } from './../../services/authAPI';

import Button from './../UI/Button/Button';

import './Login.scss';

function Login() {
  const dispatch = useDispatch();

  const initialState = {
    username: '',
    password: '',
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = state;
    if (username && password) {
      try {
        const res = await login(username, password);
        setState(initialState);
        if (res.status && res.status >= 400) {
          throw new Error();
        } else {
          localStorage.setItem('token', res.accessToken);
          dispatch(setValidToken(res.accessToken));
          dispatch(getCharacters(res.accessToken));
        }
      } catch (err) {
        alert('Invalid login');
      }
    } else {
      alert('Please fill everthing');
    }
  };

  const { username, password } = state;

  return (
    <div className="Login">
      <div className="Login-form-container">
        <form className="Login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={username}
              placeholder="Insert a username..."
            />
          </div>
          <div>
            <label htmlFor="password">PASSWORD </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
              placeholder="Insert a password..."
            />
          </div>
          <Button text="Login" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
