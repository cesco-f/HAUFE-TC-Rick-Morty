import React from 'react';
import { useCharacters } from './../../context/CharactersContext';

import CharactersCard from './../CharactersCard/CharactersCard';

function CharactersList() {
  const characters = useCharacters()[0];

  return (
    <div className="CharactersList-container">
      <h1 className="CharactersList-container-title">Characters</h1>
      <div className="CharactersList-container-list">
        {characters &&
          Object.entries(characters).map(([id, character]) => (
            <CharactersCard key={id} character={character} />
          ))}
      </div>
    </div>
  );
}

export default CharactersList;
