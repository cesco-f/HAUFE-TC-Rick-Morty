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
          Object.keys(characters).map((key) => (
            <CharactersCard key={key} character={characters[key]} />
          ))}
      </div>
    </div>
  );
}

export default CharactersList;
