import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserProvider } from './context/UserContext';
import { TokenProvider } from './context/TokenContext';
import { CharactersProvider } from './context/CharactersContext';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './fonts/get_schwifty.ttf';
import './styles/index.sass';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <TokenProvider>
        <CharactersProvider>
          <Router>
            <App />
          </Router>
        </CharactersProvider>
      </TokenProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
