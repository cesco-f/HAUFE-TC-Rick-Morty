import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from './../../services/authAPI';

import { loginHelper } from './../../helper/login.helper';

import Form from './../Form/Form';

function Register() {
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
        await register(username, password);
        await loginHelper(username, password, dispatch);
        setState(initialState);
      } catch (err) {
        setState(initialState);
        alert('Username already in used');
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
