import React, { useEffect, useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import CharactersList from './components/CharactersList/CharactersList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import { loginActions } from './helper/login.helper';

import { useUser } from './context/UserContext';
import { useToken } from './context/TokenContext';
import { useCharacters } from './context/CharactersContext';

function App() {
  const setUser = useUser()[1];
  const [token, setToken] = useToken();
  const setCharacters = useCharacters()[1];

  const [isTokenInit, setIsTokenInit] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsTokenInit(true);
    if (token) {
      loginActions(token, setCharacters, setToken, setUser);
    }
  }, [setCharacters, setToken, setUser]);

  return (
    <div className="App">
      <Navbar />
      {isTokenInit && (
        <Switch>
          <ProtectedRoute exact path="/" redirect="/login" canAccess={token}>
            <CharactersList />
          </ProtectedRoute>
          <ProtectedRoute path="/register" redirect="/" canAccess={!token}>
            <Register />
          </ProtectedRoute>
          <ProtectedRoute path="/login" redirect="/" canAccess={!token}>
            <Login />
          </ProtectedRoute>
          <ProtectedRoute
            path="/character/:charId"
            redirect="/login"
            canAccess={token}
          >
            <CharacterDetail />
          </ProtectedRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default withRouter(App);
