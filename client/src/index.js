import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { tokenReducer } from './store/reducers/token';
import { charactersReducer } from './store/reducers/characters';
import { userReducer } from './store/reducers/user';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './fonts/get_schwifty.ttf';
import './styles/index.sass';

const reducer = combineReducers({
  token: tokenReducer,
  characters: charactersReducer,
  user: userReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
