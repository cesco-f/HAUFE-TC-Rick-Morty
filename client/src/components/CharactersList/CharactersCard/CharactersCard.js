import React from 'react';
import { useHistory } from 'react-router-dom';

import './CharactersCard.scss';

function CharactersCard({ character }) {
  const history = useHistory();

  const goToDetails = () => {
    history.push(`/character/${character.id}`);
  };

  return (
    <div className="CharactersCard">
      <div className="CharactersCard-name">{character.name}</div>
      <div className="CharactersCard-image">
        <img src={character.image} alt="character" />
      </div>
      <div className="CharactersCard-favList">
        {character.favList ? 'In fav list' : 'Not in fav list'}
      </div>
      <div className="CharactersCard-button">
        <button onClick={goToDetails}>Go to details</button>
      </div>
    </div>
  );
}

export default CharactersCard;
