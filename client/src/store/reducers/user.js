import * as actionTypes from '../actions/actionTypes';

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...action.payload,
        favList: new Set(action.payload.favList),
      };
    default:
      return state;
  }
};
