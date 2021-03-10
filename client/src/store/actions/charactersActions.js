import * as actionTypes from './actionTypes';
import { getCharactersReq } from '../../services/charactersAPI';

export const getCharacters = (token) => {
  return (dispatch) => {
    getCharactersReq(token)
      .then((characters) =>
        dispatch({ type: actionTypes.SET_CHARACTERS, payload: characters }),
      )
      .catch((err) => console.log('err :>> ', err));
  };
};
