import React from 'react';
import { Link } from 'react-router-dom';

function CharactersCard({ character }) {
  return (
    <Link to={`/character/${character.id}`}>
      <div className="CharactersCard">
        <div className="CharactersCard-name">{character.name}</div>
        <div className="CharactersCard-image">
          <img src={character.image} alt="character" />
        </div>
        <div className="CharactersCard-favList">
          {character.favList ? 'In fav list' : 'Not in fav list'}
        </div>
      </div>
    </Link>
  );
}

export default CharactersCard;
