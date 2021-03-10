import React from 'react';
import peace from './../../assets/rick_morty_peace.jpeg';
import { useHistory } from 'react-router-dom';

import Button from './../UI/Button/Button';

function NotFound() {
  const history = useHistory();

  return (
    <div className="NotFound">
      <h1 className="NotFound-title">Sorry, not found</h1>
      <img className="NotFound-image" src={peace} alt="not found" />
      <Button text="Homepage" onClickCb={() => history.push('/')} />
    </div>
  );
}

export default NotFound;
