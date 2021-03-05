import * as actionTypes from './actionTypes';

export const setValidToken = (token) => {
  return { type: actionTypes.SET_VALID_TOKEN, payload: token };
};

export const setInvalidToken = () => {
  return { type: actionTypes.SET_INVALID_TOKEN };
};
