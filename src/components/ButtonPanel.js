/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import Button from './Button';

const values = [['AC', '+/-', '%', '/'], ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']];


class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  }

  render() {
    return (
      <div className="calculator__panel">
        {
          values.map(value => (
            <div key={value} className="calculator__panel--buttonsRow">
              {value.map((val) => (
                <Button
                  key={val}
                  btnName={val}
                  color={value.indexOf(val) === value.length - 1 ? 'orange' : 'gray'}
                  wide={val === '0'}
                  clickHandler={() => this.handleClick(val)}
                />
              ))}
            </div>
          ))
        }
      </div>
    );
  }
}

export default ButtonPanel;
