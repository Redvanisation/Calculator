/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
import operate from './operate';

const calculate = (calData, buttonName) => {
  let { total, next, operation } = calData;

  switch (buttonName) {
    case '+/-':
      total = -total;
      next = -next;
      operation = buttonName;
      break;
    case 'AC':
      total = 0;
      break;
    case '.':
      if (next) {
        return total = [total, '.', next].join('');
      }
      break;
    default:
      return operate(total, next, operation);
  }
};

export default calculate;
