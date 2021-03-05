import * as actionTypes from '../actions/actionTypes';
const initialToken = null;

export const tokenReducer = (state = initialToken, action) => {
  switch (action.type) {
    case actionTypes.SET_VALID_TOKEN:
      return action.payload;
    case actionTypes.SET_INVALID_TOKEN:
      return null;
    default:
      return state;
  }
};
