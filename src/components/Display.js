/* eslint-disable react/prop-types */
import React from 'react';

const Display = ({ result = '0' }) => <p>{result}</p>;

Display.defaultProps = {
  result: '0',
};

export default Display;
