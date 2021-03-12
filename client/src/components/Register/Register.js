import React, { useState, useContext } from 'react';
import { register } from './../../services/authAPI';

import { loginHelper } from './../../helper/login.helper';

import CharactersContext from './../../context/CharactersContext';
import TokenContext from './../../context/TokenContext';
import UserContext from './../../context/UserContext';

import Form from './../Form/Form';

function Register() {
  const { setCharacters } = useContext(CharactersContext);
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);

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
        await loginHelper(username, password, setCharacters, setToken, setUser);
        setState(initialState);
      } catch (err) {
        setState(initialState);
        alert('Username already in use');
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
