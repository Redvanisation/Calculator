/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';


class App extends Component {
  constructor() {
    super();

    this.state = {
      total: null,
      next: null,
      operation: null,
      calculated: false,
    };
  }

  handleClick = (buttonName) => {
    this.setState(prevState => calculate(prevState, buttonName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div id="container" className="calculator">
        <Display result={next || total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}


export default App;
