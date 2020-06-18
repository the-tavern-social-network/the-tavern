import React from 'react';
import PropTypes from 'prop-types';

import { getDate } from '../../util';

const Field = ({ type, placeholder, reducerName, name, value, inputChange, cssClass, id }) => {
  let field;

  const { year, month, day } = getDate();

  const inputChangeHandler = (event) => {
    inputChange(name, event.target.value, reducerName);
  };

  switch (type) {
    case 'textarea':
      field = (
        <textarea
          id={id}
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
          id={id}
          className={cssClass}
          type="password"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
        />
      );
      break;
    case 'email':
      field = (
        <input
          id={id}
          className={cssClass}
          type="email"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputChangeHandler}
        />
      );
      break;
    case 'date':
      field = (
        <input
          id={id}
          className={cssClass}
          type="date"
          min={`${year - 80}-01-01`}
          max={`${year - 16}-${month}-${day}`}
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
          id={id}
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
  inputChange: PropTypes.func.isRequired,
  cssClass: PropTypes.string,
  id: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
  placeholder: '',
  cssClass: '',
  id: '',
};

export default Field;
