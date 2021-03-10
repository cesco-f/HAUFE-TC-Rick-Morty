import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCharacter,
  removeCharacter,
} from './../../store/actions/userActions';

import Button from './../UI/Button/Button';

function CharacterDetail() {
  const { charId } = useParams();
  const token = useSelector((state) => state.token);
  const characters = useSelector((state) => state.characters);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const character = characters && characters[charId];

  const addToFavList = () => {
    dispatch(addCharacter(token, charId));
  };

  const removeFromFavList = () => {
    dispatch(removeCharacter(token, charId));
  };

  const goBack = () => {
    history.push('/');
  };

  return (
    character && (
      <div className="CharacterDetailContainer">
        <div className="CharacterDetail">
          <div className="CharacterDetail-name">Name: {character.name}</div>
          <div className="CharacterDetail-location">
            Location: {character.location.name}
          </div>
          <div className="CharacterDetail-status">
            Status: {character.status}
          </div>
          <div className="CharacterDetail-species">
            Species: {character.species}
          </div>
          <div className="CharacterDetail-origin">
            Origin: {character.origin.name}
          </div>
          <div className="CharacterDetail-image">
            <img src={character.image} alt="character" />
          </div>
          {user.favList.has(+charId) ? (
            <Button text="Remove" onClickCb={removeFromFavList} />
          ) : (
            <Button text="Add" onClickCb={addToFavList} />
          )}
        </div>
        <Button text="Go Back" onClickCb={goBack} />
      </div>
    )
  );
}

export default CharacterDetail;
