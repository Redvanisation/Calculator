import React from 'react';
import PropTypes from 'prop-types';


const Display = ({ result }) => (
  <p className="calculator__display">
    <span className="calculator__display--result">{result}</span>
  </p>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
