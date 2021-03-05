const apiHost = process.env.REACT_APP_API_HOST || 'localhost';
const apiPort = process.env.REACT_APP_API_PORT || 4000;
export const baseUrl = `http://${apiHost}:${apiPort}`;

export function sendRequest(url, options) {
  return fetch(url, options)
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
}
