/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import ButtonPanel from './ButtonPanel';


class App extends Component {
  render() {
    return (
      <div id="container">
        <Display result="0" />
        <ButtonPanel />
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string,
};


export default App;
