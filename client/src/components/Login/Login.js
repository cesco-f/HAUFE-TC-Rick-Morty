import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginHelper } from './../../helper/login.helper';

import Form from './../Form/Form';

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
      loginHelper(username, password, dispatch);
      setState(initialState);
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
      btnText="Login"
    />
  );
}

export default Login;
