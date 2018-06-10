import React from 'react';
import './style.css';

const btnTypes = {
  ghost: 'ghostButtonContainer',
  danger: 'dangerButtonContainer',
};

// types: [null, danger, ghost]
const Button = ({ label, onClick, type }) => (
  <button
    onClick={onClick}
    className={type ? btnTypes[type] : 'buttonContainer'}
  >
    {label}
  </button>
);

export default Button;
