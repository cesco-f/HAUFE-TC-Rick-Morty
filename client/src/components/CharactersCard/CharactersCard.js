import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CharactersCard({ character }) {
  const user = useSelector((state) => state.user);

  return (
    <Link to={`/character/${character.id}`}>
      <div className="CharactersCard">
        <div className="CharactersCard-name">{character.name}</div>
        <div className="CharactersCard-image">
          <img src={character.image} alt="character" />
        </div>
        <div className="CharactersCard-favList">
          {user.favList.has(character.id) ? 'In fav list' : 'Not in fav list'}
        </div>
      </div>
    </Link>
  );
}

export default CharactersCard;
