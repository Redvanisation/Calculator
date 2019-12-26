/* eslint-disable arrow-parens */
/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const values = [['AC', '+/-', '%', '÷'], ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']];


class ButtonPanel extends Component {
  handleClick = (buttonName) => {
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
                  clickHandler={this.handleClick}
                />
              ))}
            </div>
          ))
        }
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

export default ButtonPanel;
