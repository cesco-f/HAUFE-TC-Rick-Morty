import { useState } from 'react';

export default function useCharacters() {
  const [charactersState, setCharactersState] = useState({
    characters: null,
    setCharacters: (characters) =>
      setCharactersState({
        ...charactersState,
        characters: characters.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {}),
      }),
  });

  return charactersState;
}
