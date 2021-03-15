import React, { useEffect, useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import CharactersList from './components/CharactersList/CharactersList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import CharactersContext from './context/CharactersContext';
import TokenContext from './context/TokenContext';

import { loginActions } from './helper/login.helper';

import { useUser } from './context/UserContext';
import useToken from './hooks/useToken';
import useCharacters from './hooks/useCharacters';

function App() {
  const setUser = useUser()[1];
  const tokenState = useToken();
  const charactersState = useCharacters();

  const [isTokenInit, setIsTokenInit] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsTokenInit(true);
    if (token) {
      loginActions(
        token,
        charactersState.setCharacters,
        tokenState.setToken,
        setUser,
      );
    }
  }, [charactersState.setCharacters, tokenState.setToken, setUser]);

  return (
    <CharactersContext.Provider value={charactersState}>
      <TokenContext.Provider value={tokenState}>
        <div className="App">
          <Navbar />
          {isTokenInit && (
            <Switch>
              <ProtectedRoute
                exact
                path="/"
                redirect="/login"
                canAccess={tokenState.token}
              >
                <CharactersList />
              </ProtectedRoute>
              <ProtectedRoute
                path="/register"
                redirect="/"
                canAccess={!tokenState.token}
              >
                <Register />
              </ProtectedRoute>
              <ProtectedRoute
                path="/login"
                redirect="/"
                canAccess={!tokenState.token}
              >
                <Login />
              </ProtectedRoute>
              <ProtectedRoute
                path="/character/:charId"
                redirect="/login"
                canAccess={tokenState.token}
              >
                <CharacterDetail />
              </ProtectedRoute>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          )}
        </div>
      </TokenContext.Provider>
    </CharactersContext.Provider>
  );
}

export default withRouter(App);
