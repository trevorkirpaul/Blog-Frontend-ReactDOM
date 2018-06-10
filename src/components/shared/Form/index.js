import React from 'react';
import TextField from 'components/shared/TextField';
import './style.css';

const Form = ({ fields }) => {
  return (
    <div className="formContainer">
      {fields.map(field => (
        <TextField
          type={field.type}
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          placeholder={field.placeholder}
          error={field.error}
        />
      ))}
    </div>
  );
};

export default Form;
