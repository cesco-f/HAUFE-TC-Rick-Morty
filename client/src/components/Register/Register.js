import React, { useState } from 'react';
import { register } from './../../services/authAPI';

import Form from './../Form/Form';

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

        setState(initialState);

        if (res.status && res.status >= 400) {
          throw new Error();
        } else {
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
    <Form
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      username={username}
      password={password}
      btnText="Register"
    />
  );
}

export default Register;
