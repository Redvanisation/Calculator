/* eslint-disable import/no-extraneous-dependencies */
const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  switch (operation) {
    case '+':
      return num1.plus(num2).toString();
    case '-':
      return num1.minus(num2).toString();
    case '÷':
      if (num2.eq(0)) return '0';
      return num1.div(num2).toString();
    case 'x':
      return num1.times(num2).toString();
    case '%':
      if (num2.eq(0)) return '0';
      return num1.mod(num2).toString();
    default:
      return 0;
  }
};

export default operate;
