import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CharactersCard({ character }) {
  const user = useSelector((state) => state.user);

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
