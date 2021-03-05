import * as actionTypes from '../actions/actionTypes';
const initialToken = undefined;

export const tokenReducer = (state = initialToken, action) => {
  switch (action.type) {
    case actionTypes.SET_VALID_TOKEN:
      return action.payload;
    case actionTypes.SET_INVALID_TOKEN:
      return undefined;
    default:
      return state;
  }
};
