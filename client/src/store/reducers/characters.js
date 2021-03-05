import * as actionTypes from '../actions/actionTypes';
const initialCharacters = {};

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
      const characters = { ...state };
      characters[action.payload] = {
        ...characters[action.payload],
        favList: true,
      };
      return characters;
    }
    case actionTypes.REMOVE_CHARACTER_FROM_FAV_LIST: {
      const characters = { ...state };
      characters[action.payload] = {
        ...characters[action.payload],
        favList: false,
      };
      return characters;
    }
    default:
      return state;
  }
};
