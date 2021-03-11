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
  const character = useSelector((state) => state.characters[charId]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  return character ? (
    <div className="CharacterDetailContainer">
      <div className="CharacterDetail">
        <img
          className="CharacterDetail-image"
          src={character.image}
          alt="character"
        />
        <div className="CharacterDetail-details">
          <h2 className="CharacterDetail-details-name Center">
            {character.name}
          </h2>
          <div className="CharacterDetail-details-entry">
            <span className="Entry">Location: </span>{' '}
            <span className="Value">{character.location.name}</span>
          </div>
          <div className="CharacterDetail-details-entry">
            <span className="Entry">Status: </span>{' '}
            <span className="Value">{character.status}</span>
          </div>
          <div className="CharacterDetail-details-entry">
            <span className="Entry">Species: </span>{' '}
            <span className="Value">{character.species}</span>
          </div>
          <div className="CharacterDetail-details-entry">
            <span className="Entry">Origin: </span>{' '}
            <span className="Value">{character.origin.name}</span>
          </div>
          <div className="Center">
            {user.favList.has(+charId) ? (
              <Button
                text="Remove from favorites"
                onClickCb={() => {
                  dispatch(removeCharacter(token, charId));
                }}
              />
            ) : (
              <Button
                text="Add to favorites"
                onClickCb={() => {
                  dispatch(addCharacter(token, charId));
                }}
              />
            )}
          </div>
        </div>
      </div>

      <Button
        text="Go Back"
        onClickCb={() => {
          history.push('/');
        }}
      />
    </div>
  ) : null;
}

export default CharacterDetail;
