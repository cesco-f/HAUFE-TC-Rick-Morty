import * as actionTypes from './actionTypes';
import {
  getUserReq,
  addCharacterReq,
  removeCharacterReq,
} from '../../services/userAPI';

export const getUser = (token) => {
  return (dispatch) => {
    getUserReq(token)
      .then((user) => dispatch({ type: actionTypes.SET_USER, payload: user }))
      .catch((err) => console.log('err :>> ', err));
  };
};

export const addCharacter = (token, charId) => {
  return (dispatch) => {
    addCharacterReq(token, charId)
      .then((user) =>
        dispatch({
          type: actionTypes.ADD_CHARACTER_TO_FAV_LIST,
          payload: user,
        }),
      )
      .catch((err) => console.log('err :>> ', err));
  };
};

export const removeCharacter = (token, charId) => {
  return (dispatch) => {
    removeCharacterReq(token, charId)
      .then((user) =>
        dispatch({
          type: actionTypes.REMOVE_CHARACTER_FROM_FAV_LIST,
          payload: user,
        }),
      )
      .catch((err) => console.log('err :>> ', err));
  };
};
