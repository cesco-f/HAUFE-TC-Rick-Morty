import { baseUrl, sendRequest } from './servicesCommon';

export const register = (username, email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  };
  return sendRequest(baseUrl + '/register', options);
};

export const login = (username, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };
  return sendRequest(baseUrl + '/login', options);
};
