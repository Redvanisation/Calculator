/* eslint-disable arrow-body-style */
import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  return (
    <div className="calculator__panel">
      <div id="group-1" className="calculator__panel--buttonsRow">
        <Button buttonName="AC" color />
        <Button buttonName="+/-" color />
        <Button buttonName="%" color />
        <Button buttonName="/" />
      </div>

      <div id="group-2" className="calculator__panel--buttonsRow">
        <Button buttonName="7" color />
        <Button buttonName="8" color />
        <Button buttonName="9" color />
        <Button buttonName="X" />
      </div>

      <div id="group-3" className="calculator__panel--buttonsRow">
        <Button buttonName="4" color />
        <Button buttonName="5" color />
        <Button buttonName="6" color />
        <Button buttonName="-" />
      </div>

      <div id="group-4" className="calculator__panel--buttonsRow">
        <Button buttonName="1" color />
        <Button buttonName="2" color />
        <Button buttonName="3" color />
        <Button buttonName="+" />
      </div>

      <div id="group-5" className="calculator__panel--buttonsRow">
        <Button buttonName="0" color wide />
        <Button buttonName="." color />
        <Button buttonName="=" />
      </div>
    </div>
  );
};

export default ButtonPanel;
