/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './main.css';


ReactDOM.render(
  <div id="container">
    <Display />
    <ButtonPanel />
  </div>,
  document.querySelector('#root'),
);
