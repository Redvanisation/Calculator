/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';


class App extends Component {
  render() {
    return (
      <div id="container" className="calculator">
        <Display result="0" />
        <ButtonPanel />
      </div>
    );
  }
}


export default App;
