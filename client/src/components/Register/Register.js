import React, { useState } from 'react';
import { register } from './../../services/authAPI';

import Button from './../UI/Button/Button';

import './Register.scss';

function Register() {
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
        const res = await register(username, password);

        if (res.status && res.status >= 400) {
          setState(initialState);
          throw new Error();
        } else {
          setState(initialState);
          alert('User registered');
        }
      } catch (err) {
        alert('An error occured');
      }
    } else {
      alert('Please fill everthing');
    }
  };

  const { username, password } = state;

  return (
    <div className="Register">
      <div className="Register-form-container">
        <form className="Register-form" onSubmit={handleSubmit}>
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
          <Button text="Register" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Register;
