/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName = 'Button', color, wide }) => {
  let theClass = 'calculator__button';
  if (color) {
    theClass = 'calculator__button button-gray';
  }
  if (wide) {
    theClass = 'calculator__button button-gray zero';
  }
  return (
    <button
      type="button"
      className={theClass}
    >
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Button;
