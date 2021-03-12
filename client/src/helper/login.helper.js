import { login } from './../services/authAPI';
import { getCharactersReq } from './../services/charactersAPI';
import { getUserReq } from './../services/userAPI';

export const loginHelper = async (
  username,
  password,
  setCharacters,
  setToken,
  setUser,
) => {
  try {
    const res = await login(username, password);
    localStorage.setItem('token', res.accessToken);
    loginActions(res.accessToken, setCharacters, setToken, setUser);
  } catch (error) {
    alert('Invalid login');
  }
};

export const loginActions = (token, setCharacters, setToken, setUser) => {
  setToken(token);

  getCharactersReq(token)
    .then((characters) => setCharacters(characters))
    .catch((err) => console.log('err :>> ', err));

  getUserReq(token)
    .then((user) => setUser(user))
    .catch((err) => console.log('err :>> ', err));
};
