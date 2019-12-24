import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnName = 'Button', color, wide, clickHandler, buttonName }) => {
  let theClass = 'calculator__button';
  if (color !== 'orange') {
    theClass = 'calculator__button button-gray';
  }
  if (wide) {
    theClass = 'calculator__button button-gray zero';
  }
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
    // console.log(buttonName);
  };

  return (
    <button
      type="button"
      className={theClass}
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

Button.defaultProps = {
  btnName: 'button',
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  btnName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
