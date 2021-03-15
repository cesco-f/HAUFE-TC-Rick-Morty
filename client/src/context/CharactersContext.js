import { createContext, useContext, useReducer } from 'react';

const CharactersContext = createContext();

function charactersReducer(_, newCharacters) {
  return newCharacters.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}

export const CharactersProvider = (props) => {
  const [characters, setCharacters] = useReducer(charactersReducer, {});

  return (
    <CharactersContext.Provider
      value={[characters, setCharacters]}
      {...props}
    />
  );
};

export const useCharacters = () => {
  const context = useContext(CharactersContext);

  if (context === undefined) {
    throw new Error(
      'The useCharacters hook must be called inside CharactersProvider',
    );
  }

  return context;
};
