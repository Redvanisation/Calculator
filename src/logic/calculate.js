import operate from './operate';

const calculate = (calData, buttonName) => {
  let { total, next, operation } = calData;
  let result;
  let states = { total, next, operation };

  switch (buttonName) {
    case '+/-':
      total = -total;
      next = -next;
      operation = buttonName;
      states = { total, next, operation };
      return states;
    case 'AC':
      total = 0;
      return total;
    case '.':
      if (next) {
        result = [total, '.', next].join('');
        return result;
      }
      break;
    default:
      result = operate(total, next, operation);
      return result;
  }
  return states;
};


export default calculate;
