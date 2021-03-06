import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../../store/actions/charactersActions';

import CharactersCard from './CharactersCard/CharactersCard';

function CharactersList() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (!characters) {
      dispatch(getCharacters(token));
    }
  }, [characters, token, dispatch]);

  return (
    <div className="CharactersList">
      {characters &&
        Object.keys(characters).map((key) => (
          <CharactersCard key={key} character={characters[key]} />
        ))}
    </div>
  );
}

export default CharactersList;
