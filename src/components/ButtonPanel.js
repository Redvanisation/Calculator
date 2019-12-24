/* eslint-disable arrow-body-style */
import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  return (
    <div className="calculator__panel">
      <div id="group-1" className="calculator__panel--buttonsRow">
        <Button buttonName="AC" color="gray" />
        <Button buttonName="+/-" color="gray" />
        <Button buttonName="%" color="gray" />
        <Button buttonName="/" />
      </div>

      <div id="group-2" className="calculator__panel--buttonsRow">
        <Button buttonName="7" color="gray" />
        <Button buttonName="8" color="gray" />
        <Button buttonName="9" color="gray" />
        <Button buttonName="X" />
      </div>

      <div id="group-3" className="calculator__panel--buttonsRow">
        <Button buttonName="4" color="gray" />
        <Button buttonName="5" color="gray" />
        <Button buttonName="6" color="gray" />
        <Button buttonName="-" />
      </div>

      <div id="group-4" className="calculator__panel--buttonsRow">
        <Button buttonName="1" color="gray" />
        <Button buttonName="2" color="gray" />
        <Button buttonName="3" color="gray" />
        <Button buttonName="+" />
      </div>

      <div id="group-5" className="calculator__panel--buttonsRow">
        <Button buttonName="0" color="gray" wide />
        <Button buttonName="." color="gray" />
        <Button buttonName="=" />
      </div>
    </div>
  );
};

export default ButtonPanel;
