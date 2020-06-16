import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ type, placeholder, reducerName, name, value, changeValue, cssClass }) => {
  let field;

  const inputChangeHandler = (event) => {
    changeValue(event.target.value);
  };

  switch (type) {
    case 'textarea':
      field = (
        <textarea
          className={cssClass}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}></textarea>
      );
      break;
    case 'password':
      field = (
        <input
          className={cssClass}
          type="password"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
        />
      );
      break;
    default:
      field = (
        <input
          type="text"
          className={cssClass}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
        />
      );
  }

  return <>{field}</>;
};

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  reducerName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.bool]).isRequired,
  changeValue: PropTypes.func.isRequired,
  cssClass: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
  cssClass: '',
};

export default Field;
