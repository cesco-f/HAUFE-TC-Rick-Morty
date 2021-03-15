import React, { useState } from 'react';

import { loginHelper } from './../../helper/login.helper';

import { useCharacters } from './../../context/CharactersContext';
import { useToken } from './../../context/TokenContext';
import { useUser } from './../../context/UserContext';

import Form from './../Form/Form';

function Login() {
  const setCharacters = useCharacters()[1];
  const setToken = useToken()[1];
  const setUser = useUser()[1];

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
      loginHelper(username, password, setCharacters, setToken, setUser);
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
