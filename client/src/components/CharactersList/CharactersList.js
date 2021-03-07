import React from 'react';
import { useSelector } from 'react-redux';

import CharactersCard from './CharactersCard/CharactersCard';

function CharactersList() {
  const characters = useSelector((state) => state.characters);

  return (
    <div className="CharactersList">
      {characters &&
        Object.keys(characters).map((key) => (
          <CharactersCard key={key} character={characters[key]} />
        ))}
    </div>
  );
}

export default CharactersList;
