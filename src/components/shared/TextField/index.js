import React from 'react';
import './style.css';

const TextField = ({ value, placeholder, onChange, type, name, error }) => {
  return (
    <div className={error ? 'textFieldContainerError' : 'textFieldContainer'}>
      <input
        type={type || 'text'}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
