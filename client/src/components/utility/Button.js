import React from 'react';

const Button = ({ text, color }) => (
  <button className={`button-style ${color}`}>{text}</button>
);

export default Button;
