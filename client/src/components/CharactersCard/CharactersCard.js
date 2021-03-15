import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './../../context/UserContext';

function CharactersCard({ character }) {
  const user = useUser()[0];

  return (
    <Link to={`/character/${character.id}`}>
      <div className="CharactersCard">
        <img
          className="CharactersCard-image"
          src={character.image}
          alt="character"
        />
        <div className="CharactersCard-name">{character.name}</div>
        <div className="CharactersCard-favList">
          Favorite list: {user && user.favList.has(character.id) ? '👍🏼' : '👎🏼'}
        </div>
      </div>
    </Link>
  );
}

export default CharactersCard;
