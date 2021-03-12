import { createContext } from 'react';

const CharactersContext = createContext({
  characters: {},
  setCharacters: () => {},
});

export default CharactersContext;
