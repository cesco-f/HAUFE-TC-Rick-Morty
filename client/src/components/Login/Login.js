import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setValidToken } from '../../store/actions/tokenActions';
import { getCharacters } from '../../store/actions/charactersActions';
import { getUser } from '../../store/actions/userActions';
import { login } from './../../services/authAPI';

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
      try {
        const res = await login(username, password);
        setState(initialState);
        localStorage.setItem('token', res.accessToken);
        dispatch(setValidToken(res.accessToken));
        dispatch(getCharacters(res.accessToken));
        dispatch(getUser(res.accessToken));
      } catch (err) {
        setState(initialState);
        alert('Invalid login');
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
      btnText="Login"
    />
  );
}

export default Login;
