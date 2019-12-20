/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ name = 'Button' }) => <button type="button">{name}</button>;

export default Button;
