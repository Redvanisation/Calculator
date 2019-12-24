import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName = 'Button', color, wide }) => {
  let theClass = 'calculator__button';
  if (color !== 'orange') {
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

Button.defaultProps = {
  buttonName: 'button',
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
