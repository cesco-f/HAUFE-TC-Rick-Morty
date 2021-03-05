import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import CharactersList from './components/CharactersList/CharactersList';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';

import './App.scss';

function App() {
  const token = useSelector((state) => state.token);

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
      <Route path="/logout">
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
      <Route path="/logout">
        <Redirect to="/" />
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
      {token ? authRoutes : notAuthRoutes}
    </div>
  );
}

export default withRouter(App);
