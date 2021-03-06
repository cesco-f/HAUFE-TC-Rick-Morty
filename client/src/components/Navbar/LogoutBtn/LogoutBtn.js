import React from 'react';
import Button from './../../UI/Button/Button';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInvalidToken } from '../../../store/actions/tokenActions';

function LogoutBtn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    localStorage.clear();
    dispatch(setInvalidToken());
    history.push('/');
  };

  return <Button text="Log out" onClickCb={logOut} />;
}

export default LogoutBtn;
