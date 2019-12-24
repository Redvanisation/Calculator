import operate from './operate';

const calculate = (calData, buttonName) => {
  let { total, next, operation } = calData;
  let result;
  const states = { total, next, operation };

  switch (buttonName) {
    case '+/-':
      total = -total;
      next = -next;
      operation = buttonName;
      return total;
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
