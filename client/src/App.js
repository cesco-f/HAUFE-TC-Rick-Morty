import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import CharactersList from './components/CharactersList/CharactersList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';

import { setValidToken } from './store/actions/tokenActions';
import { getCharacters } from './store/actions/charactersActions';

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const [isTokenInit, setIsTokenInit] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsTokenInit(true);
    if (token) {
      dispatch(setValidToken(token));
      dispatch(getCharacters(token));
    }
  }, [dispatch]);

  const authRoutes = (
    <Switch>
      <Route exact path="/">
        <CharactersList />
      </Route>
      <Route path="/register">
        <Redirect to="/" />
      </Route>
      <Route path="/login">
        <Redirect to="/" />
      </Route>
      <Route path="/character/:charId">
        <CharacterDetail />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );

  const notAuthRoutes = (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/character/:charId">
        <Redirect to="/" />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );

  return (
    <div className="App">
      <Navbar />
      {isTokenInit && (token ? authRoutes : notAuthRoutes)}
    </div>
  );
}

export default withRouter(App);
