import React, { useState } from 'react';
import { register } from './../../services/authAPI';

import './Register.scss';

function Register() {
  const initialState = {
    username: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = state;
    if (username && email && password) {
      try {
        const res = await register(username, email, password);

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

  const { username, email, password } = state;

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
            <label htmlFor="email">EMAIL </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="Insert a email..."
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
          <button className="form_submit" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
