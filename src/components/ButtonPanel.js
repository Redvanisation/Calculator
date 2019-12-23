/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = () => {
  return (
    <div>
      <div id="group-1">
        <Button buttonName="AC" />
        <Button buttonName="+/-" />
        <Button buttonName="%" />
        <Button buttonName="/" />
      </div>

      <div id="group-2">
        <Button buttonName="7" />
        <Button buttonName="8" />
        <Button buttonName="9" />
        <Button buttonName="X" />
      </div>

      <div id="group-3">
        <Button buttonName="4" />
        <Button buttonName="5" />
        <Button buttonName="6" />
        <Button buttonName="-" />
      </div>

      <div id="group-4">
        <Button buttonName="1" />
        <Button buttonName="2" />
        <Button buttonName="3" />
        <Button buttonName="+" />
      </div>

      <div id="group-5">
        <Button buttonName="0" />
        <Button buttonName="." />
        <Button buttonName="=" />
      </div>
    </div>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
};

export default ButtonPanel;
