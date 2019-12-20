/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.css';


class HelloWorld extends Component {
  render() {
    return (
      <div className="title">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.querySelector('#root'),
);
