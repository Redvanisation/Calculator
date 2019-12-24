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
    case 'x':
      return num1.times(num2).toString();
    case '/':
      if (num2 === 0) {
        return "Division by 0 isn't permissible";
      }
      return num1.div(num2).toString();
    case '%':
      return num1.mod(num2).toString();
    default:
      return 'Wrong operation!';
  }
};

export default operate;
