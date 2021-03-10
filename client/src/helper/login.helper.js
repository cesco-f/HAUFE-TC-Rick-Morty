import { login } from './../services/authAPI';
import { setValidToken } from '../store/actions/tokenActions';
import { getCharacters } from '../store/actions/charactersActions';
import { getUser } from '../store/actions/userActions';

export const loginHelper = async (username, password, dispatch) => {
  try {
    const res = await login(username, password);
    localStorage.setItem('token', res.accessToken);
    loginActions(dispatch, res.accessToken);
  } catch (error) {
    alert('Invalid login');
  }
};

export const loginActions = (dispatch, token) => {
  dispatch(setValidToken(token));
  dispatch(getCharacters(token));
  dispatch(getUser(token));
};
