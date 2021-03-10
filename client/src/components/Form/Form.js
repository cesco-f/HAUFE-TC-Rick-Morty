import React from 'react';

import Button from './../UI/Button/Button';

function Form({ handleSubmit, handleChange, username, password, btnText }) {
  return (
    <div className="Form">
      <form className="Form-form" onSubmit={handleSubmit}>
        <div>
          <input
            className="Form-form-input"
            type="text"
            name="username"
            onChange={handleChange}
            value={username}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            className="Form-form-input"
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
            placeholder="Password"
          />
        </div>
        <Button text={btnText} type="submit" />
      </form>
    </div>
  );
}

export default Form;
