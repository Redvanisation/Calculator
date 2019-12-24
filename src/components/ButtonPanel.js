/* eslint-disable arrow-parens */
import React from 'react';
import Button from './Button';

const values = [['AC', '+/-', '%', '/'], ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '=']];

const ButtonPanel = () => (
  <div className="calculator__panel">
    {values.map(value => (
      <div key={value} className="calculator__panel--buttonsRow">
        {value.map((val) => {
          return <Button key={val} buttonName={val} color={value.indexOf(val) === value.length - 1 ? 'orange' : 'gray'} wide={val === '0'} />;
        })}
      </div>
    ))}
  </div>
);

export default ButtonPanel;
