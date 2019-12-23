/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName = 'Button' }) => <button type="button">{buttonName}</button>;

Button.propTypes = {
  buttonName: PropTypes.string,
};

export default Button;
