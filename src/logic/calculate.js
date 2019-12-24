/* eslint-disable consistent-return */
/* eslint-disable no-fallthrough */
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
        total = [total, '.', next].join('');
        break;
      }
    default:
      return operate(total, next, operation);
  }
};

export default calculate;
