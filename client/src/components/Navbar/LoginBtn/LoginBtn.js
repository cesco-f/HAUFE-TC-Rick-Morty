import React from 'react';
import Button from './../../UI/Button/Button';

import { useHistory } from 'react-router-dom';

function LoginBtn() {
  const history = useHistory();

  const goToLogIn = () => {
    history.push('/login');
  };

  return <Button text="Log in" onClickCb={goToLogIn} />;
}

export default LoginBtn;
