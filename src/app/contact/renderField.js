import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
  return(
        <div>
            <div className="control">
              <label className="clip" name="fullName" htmlFor="name">{label}</label>
              <input {...input} placeholder={label} type={type}/>
              {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
)};

export default renderField;
