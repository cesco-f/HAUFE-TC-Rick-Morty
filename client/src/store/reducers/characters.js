import * as actionTypes from '../actions/actionTypes';

export const charactersReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_CHARACTERS: {
      return action.payload.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});
    }
    default:
      return state;
  }
};
