import React from 'react';

const Button = ({ text, color, size }) => (
  <button className={`button-style ${color} ${size}`}>{text}</button>
);

export default Button;
