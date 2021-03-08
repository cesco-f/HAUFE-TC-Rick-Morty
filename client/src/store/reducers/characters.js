import * as actionTypes from '../actions/actionTypes';
const initialCharacters = null;

export const charactersReducer = (state = initialCharacters, action) => {
  switch (action.type) {
    case actionTypes.SET_CHARACTERS: {
      const normCharacters = {};
      for (const character of action.payload) {
        normCharacters[character.id] = { ...character };
      }
      return normCharacters;
    }
    case actionTypes.ADD_CHARACTER_TO_FAV_LIST: {
      return {
        ...state,
        [action.payload]: { ...state[action.payload], favList: true },
      };
    }
    case actionTypes.REMOVE_CHARACTER_FROM_FAV_LIST: {
      return {
        ...state,
        [action.payload]: { ...state[action.payload], favList: false },
      };
    }
    default:
      return state;
  }
};
