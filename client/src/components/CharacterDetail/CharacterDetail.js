import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { addCharacterReq, removeCharacterReq } from './../../services/userAPI';
import Button from './../UI/Button/Button';
import { useUser } from './../../context/UserContext';
import TokenContext from './../../context/TokenContext';
import CharactersContext from './../../context/CharactersContext';

function CharacterDetail() {
  const { charId } = useParams();
  const [user, setUser] = useUser();
  const { token } = useContext(TokenContext);
  const { characters } = useContext(CharactersContext);

  const character = characters && characters[charId];

  const history = useHistory();

  const addCharacter = () => {
    addCharacterReq(token, charId)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => console.log('err :>> ', err));
  };

  const removeCharacter = () => {
    removeCharacterReq(token, charId)
      .then((user) => setUser(user))
      .catch((err) => console.log('err :>> ', err));
  };

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
                onClickCb={removeCharacter}
              />
            ) : (
              <Button text="Add to favorites" onClickCb={addCharacter} />
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
