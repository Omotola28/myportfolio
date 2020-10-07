import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
  return(
        <div>
            <div className="control">
              <label className="clip" name={label} htmlFor={label}>{label}</label>
              <input {...input} placeholder={label} type={type}/>
              {touched && ((error && <span className="help is-danger is-size-6">{error}</span>) || (warning && <span className="help is-warning is-size">{warning}</span>))}
            </div>
        </div>
)};

export default renderField;
