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
    // this.setState({ ...calculate(this.state, buttonName) });
    console.log(buttonName);
  }

  render() {
    const { total, next } = this.state;
    const displayVal = total ? (next ? next.toString() : total.toString()) : '0';
    return (
      <div id="container" className="calculator">
        <Display result={displayVal} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}


export default App;
