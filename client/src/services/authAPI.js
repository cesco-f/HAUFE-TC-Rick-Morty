const apiHost = process.env.REACT_APP_API_HOST || 'localhost';
const apiPort = process.env.REACT_APP_API_PORT || 4000;
const baseUrl = `http://${apiHost}:${apiPort}`;

export const register = (username, email, password) => {
  return fetch(baseUrl + '/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  })
    .then((res) => {
      if (res.status < 400) {
        return res.json();
      }
      return res;
    })
    .catch((err) => {
      console.error(err);
      return Promise.reject();
    });
};
