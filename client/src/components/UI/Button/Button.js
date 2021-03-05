import React from 'react';

import './Button.scss';

function Button({ text, onClickCb }) {
  return (
    <button className="Button" onClick={onClickCb}>
      {text}
    </button>
  );
}

export default Button;
