import React from 'react';

import './Button.scss';

function Button({ text, onClickCb, type }) {
  return (
    <button className="Button" onClick={onClickCb} type={type}>
      {text}
    </button>
  );
}

export default Button;
