import React from 'react';
import Button from './../../UI/Button/Button';

import { useHistory } from 'react-router-dom';

function RegisterBtn() {
  const history = useHistory();

  const goToRegister = () => {
    history.push('/register');
  };

  return <Button text="Register" onClickCb={goToRegister} />;
}

export default RegisterBtn;
