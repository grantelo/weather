import React from 'react';

function Form({ submitHandler }) {
  return (
    <form onSubmit={(event) => submitHandler(event)} autoComplete="off">
      <input className="search" name="city" type="text" placeholder="Введите город" />
      <button type="submit" className="form-btn">
        Узнать погоду{' '}
      </button>{' '}
    </form>
  );
}

export default Form;
