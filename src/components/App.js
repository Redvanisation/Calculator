/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState({
      
    })
  }

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
