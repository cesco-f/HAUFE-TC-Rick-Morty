import * as actionTypes from '../actions/actionTypes';
const initialUser = null;

export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
    case actionTypes.ADD_CHARACTER_TO_FAV_LIST:
    case actionTypes.REMOVE_CHARACTER_FROM_FAV_LIST:
      return {
        ...action.payload,
        favList: new Set(action.payload.favList),
      };
    default:
      return state;
  }
};
