/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  handleClick = () => {
    const { clickHandler, btnName } = this.props;
    clickHandler(btnName);
  };

  render() {
    const { btnName, wide, color } = this.props;
    let theClass = 'calculator__button';
    if (color !== 'orange') {
      theClass = 'calculator__button button-gray';
    }
    if (wide) {
      theClass = 'calculator__button button-gray zero';
    }
    return (
      <button
        type="button"
        className={theClass}
        onClick={this.handleClick}
      >
        {btnName}
      </button>
    );
  }
}

Button.defaultProps = {
  btnName: 'button',
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  btnName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};

export default Button;
