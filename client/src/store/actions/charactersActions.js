import * as actionTypes from './actionTypes';
import {
  getCharactersReq,
  addCharacterReq,
  removeCharacterReq,
} from '../../services/charactersAPI';

export const getCharacters = (token) => {
  return (dispatch) => {
    getCharactersReq(token)
      .then((characters) =>
        dispatch({ type: actionTypes.SET_CHARACTERS, payload: characters }),
      )
      .catch((err) => console.log('err :>> ', err));
  };
};

export const addCharacter = (token, charId) => {
  return (dispatch) => {
    addCharacterReq(token, charId)
      .then((res) =>
        dispatch({
          type: actionTypes.ADD_CHARACTER_TO_FAV_LIST,
          payload: res.charId,
        }),
      )
      .catch((err) => console.log('err :>> ', err));
  };
};

export const removeCharacter = (token, charId) => {
  return (dispatch) => {
    removeCharacterReq(token, charId)
      .then((res) =>
        dispatch({
          type: actionTypes.REMOVE_CHARACTER_FROM_FAV_LIST,
          payload: res.charId,
        }),
      )
      .catch((err) => console.log('err :>> ', err));
  };
};
