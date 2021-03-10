import React from 'react';
import { useSelector } from 'react-redux';

import CharactersCard from './../CharactersCard/CharactersCard';

function CharactersList() {
  const characters = useSelector((state) => state.characters);

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
