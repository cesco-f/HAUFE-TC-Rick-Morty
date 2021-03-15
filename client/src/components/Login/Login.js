import React, { useState, useContext } from 'react';

import { loginHelper } from './../../helper/login.helper';

import CharactersContext from './../../context/CharactersContext';
import TokenContext from './../../context/TokenContext';
import { useUser } from './../../context/UserContext';

import Form from './../Form/Form';

function Login() {
  const { setCharacters } = useContext(CharactersContext);
  const { setToken } = useContext(TokenContext);
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
