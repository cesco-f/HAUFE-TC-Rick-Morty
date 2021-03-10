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
          <div className="CharacterDetail-entry">
            <span className="Entry">Name: </span>{' '}
            <span className="Value">{character.name}</span>
          </div>
          <div className="CharacterDetail-entry">
            <span className="Entry">Location: </span>{' '}
            <span className="Value">{character.location.name}</span>
          </div>
          <div className="CharacterDetail-entry">
            <span className="Entry">Status: </span>{' '}
            <span className="Value">{character.status}</span>
          </div>
          <div className="CharacterDetail-entry">
            <span className="Entry">Species: </span>{' '}
            <span className="Value">{character.species}</span>
          </div>
          <div className="CharacterDetail-entry">
            <span className="Entry">Origin: </span>{' '}
            <span className="Value">{character.origin.name}</span>
          </div>
          <div className="CharacterDetail-image">
            <img src={character.image} alt="character" />
          </div>
          {user.favList.has(+charId) ? (
            <Button
              text="Remove from favorites"
              onClickCb={removeFromFavList}
            />
          ) : (
            <Button text="Add to favorites" onClickCb={addToFavList} />
          )}
        </div>
        <Button text="Go Back" onClickCb={goBack} />
      </div>
    )
  );
}

export default CharacterDetail;
