import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  name, label, onChange, placeholder, value, error, pattern
}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    /*eslint-disable */
    wrapperClass += ' ' + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          pattern={pattern}
          value={value}
          onChange={onChange} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
