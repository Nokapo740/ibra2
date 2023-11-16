// src/Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Введите текст"
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
